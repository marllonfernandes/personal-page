import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { rateLimit } from 'express-rate-limit';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

// ─── Cloud Run / Load Balancer proxy trust ────────────────────────────────────
// Cloud Run sits behind Google's load balancer — trust exactly 1 hop so that
// express-rate-limit reads the real client IP from X-Forwarded-For correctly.
app.set('trust proxy', 1);

// ─── Static files (production) ────────────────────────────────────────────────
// Serve static files BEFORE other middlewares to avoid blocking by CORS/rate limiters
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist'), {
    maxAge: '1y',
    immutable: true,
    index: false, // Don't serve index.html here, handle it in catch-all
  }));
}

// ─── Security Headers ─────────────────────────────────────────────────────────
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  // Strict-Transport-Security is already set by Cloud Run / Google LB,
  // but we reinforce it here for defense-in-depth.
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  // Content Security Policy — restringe de onde scripts, estilos e recursos
  // podem ser carregados. Reduz o impacto de qualquer XSS no frontend Vue.
  // 'unsafe-inline' em script-src é necessário para o Google Tag Manager
  // (GTM injeta scripts inline). Remova-o se migrar o GTM para nonces.
  res.setHeader(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://googleads.g.doubleclick.net https://www.google.com",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net",
      "img-src 'self' data: https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self' data:",
      "frame-src https://www.googletagmanager.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join('; ')
  );
  // Remove fingerprinting header added by Express.
  res.removeHeader('X-Powered-By');
  next();
});

// ─── CORS ─────────────────────────────────────────────────────────────────────
const ALLOWED_ORIGINS = new Set([
  'https://cognitivatech.com.br',
  'https://www.cognitivatech.com.br',
  ...(process.env.NODE_ENV !== 'production' ? ['http://localhost:5173', 'http://localhost:4173', 'http://localhost:8080'] : []),
]);

// Add Cloud Run URL if provided (useful for testing before custom domain setup)
if (process.env.CLOUD_RUN_URL) {
  ALLOWED_ORIGINS.add(process.env.CLOUD_RUN_URL);
}

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests without Origin header (same-origin requests, direct navigation)
      if (!origin) {
        return callback(null, true);
      }
      if (ALLOWED_ORIGINS.has(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`CORS: origin '${origin}' not allowed`));
      }
    },
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: false,
    maxAge: 600, // Cache preflight response for 10 minutes
  })
);

// ─── Body parser ──────────────────────────────────────────────────────────────
// Limit request body size to prevent payload-based DoS.
app.use(express.json({ limit: '10kb' }));

// ─── Global rate limiter (all routes) ─────────────────────────────────────────
// Broad protection against automated scanning.
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15-minute window
  max: 100,                  // 100 requests per IP per window
  standardHeaders: 'draft-8', // Return RateLimit-* headers (RFC 9110)
  legacyHeaders: false,
  message: { error: 'Muitas requisições. Tente novamente em alguns minutos.' },
  // Skip rate-limit for static assets to avoid penalising legitimate browsers.
  skip: (req) => req.method === 'GET' && /\.(js|css|png|svg|ico|webp|woff2?)$/.test(req.path),
});

app.use(globalLimiter);

// ─── Strict rate limiter for lead submission ───────────────────────────────────
// A single real user rarely submits the form more than once per session.
const leadsLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1-hour window
  max: 5,                    // 5 form submissions per IP per hour
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: {
    error: 'Limite de envios atingido. Tente novamente em uma hora ou entre em contato pelo WhatsApp.',
  },
  // Persist the rate-limit counter across restarts if needed:
  // store: new RedisStore({ ... }),  ← add when you have Redis on Cloud Run
});

// ─── MongoDB ──────────────────────────────────────────────────────────────────
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('FATAL ERROR: MONGODB_URI environment variable is not defined.');
  process.exit(1);
}

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// ─── Schema & Model ───────────────────────────────────────────────────────────
const leadSchema = new mongoose.Schema({
  name:      { type: String, required: true, trim: true, maxlength: 120 },
  email:     { type: String, required: true, trim: true, maxlength: 254, lowercase: true },
  phone:     { type: String, required: true, trim: true, maxlength: 20  },
  segment:   { type: String, trim: true, maxlength: 60  },
  challenge: { type: String, trim: true, maxlength: 60  },
  createdAt: { type: Date, default: Date.now },
  // Store the real IP for abuse investigation — never expose this in responses.
  _ip:       { type: String, select: false },
});

const Lead = mongoose.model('Lead', leadSchema);

// ─── Validation helpers ───────────────────────────────────────────────────────
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_SEGMENTS  = new Set(['juridico','clinica_medica','clinica_vet','oficina','contabilidade','imobiliaria','pme','ecommerce','agencia','outro','']);
const ALLOWED_CHALLENGES = new Set(['planilhas','site','automacao','integracao','sistema','outro','']);

// ─── API Routes ───────────────────────────────────────────────────────────────
app.post('/api/leads', leadsLimiter, async (req, res) => {
  try {
    const { name, email, phone, segment = '', challenge = '' } = req.body ?? {};

    // ── Required field presence ──
    if (!name || !email || !phone) {
      return res.status(400).json({ error: 'Todos os campos obrigatórios devem ser preenchidos.' });
    }

    // ── Type guard ──
    if ([name, email, phone, segment, challenge].some((v) => typeof v !== 'string')) {
      return res.status(400).json({ error: 'Dados inválidos.' });
    }

    // ── Length limits (mirrors schema maxlength) ──
    if (name.trim().length < 3 || name.length > 120) {
      return res.status(400).json({ error: 'Nome inválido.' });
    }
    if (!EMAIL_RE.test(email) || email.length > 254) {
      return res.status(400).json({ error: 'E-mail inválido.' });
    }
    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length < 10 || phoneDigits.length > 11) {
      return res.status(400).json({ error: 'Telefone inválido.' });
    }

    // ── Enum allowlist (prevent junk data) ──
    if (!ALLOWED_SEGMENTS.has(segment) || !ALLOWED_CHALLENGES.has(challenge)) {
      return res.status(400).json({ error: 'Opção inválida selecionada.' });
    }

    const newLead = new Lead({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      segment,
      challenge,
      _ip: req.ip, // stored but never returned to client
    });

    await newLead.save();

    // Never echo back the saved document to avoid leaking internal fields.
    return res.status(201).json({ message: 'Lead salvo com sucesso!' });
  } catch (error) {
    console.error('Error saving lead:', error);
    // Return a generic message — never expose error details to the client.
    return res.status(500).json({ error: 'Erro interno. Tente novamente.' });
  }
});

// ─── SPA catch-all (production) ───────────────────────────────────────────────
// Serve index.html for all non-API, non-static routes
if (process.env.NODE_ENV === 'production') {
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

// ─── Global error handler ─────────────────────────────────────────────────────
// Catches CORS errors and any other unhandled errors from middleware.
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, _next) => {
  if (err.message?.startsWith('CORS')) {
    return res.status(403).json({ error: 'Forbidden' });
  }
  console.error('Unhandled error:', err);
  return res.status(500).json({ error: 'Erro interno.' });
});

// ─── Server ───────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} [${process.env.NODE_ENV ?? 'development'}]`);
});

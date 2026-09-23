<script setup>
defineEmits(['open-privacy', 'open-terms'])
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <h3 class="footer-title">CognitivaTech</h3>
          <p class="footer-tagline">Consultoria de TI, Arquitetura Cloud &amp; Agentes de IA</p>
          <div class="contact-info">
            <a href="mailto:cognitivatech4@gmail.com" class="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L1 7"/>
              </svg>
              cognitivatech4@gmail.com
            </a>
            <span class="separator">•</span>
            <a href="tel:+5511966464979" class="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              (11) 96646-4979
            </a>
          </div>
          <div class="company-credentials">
            <p class="legal-name">CognitivaTech &middot; Consultoria em Engenharia de Software &amp; IA</p>
            <p class="legal-location">São Paulo - SP &middot; Atendimento Remoto para todo o Brasil 📍</p>
          </div>
        </div>

        <div class="footer-nav">
          <div class="nav-column">
            <h4>Navegação</h4>
            <a href="#home">Início</a>
            <a href="#segments">Segmentos</a>
            <a href="#social-proof">Resultados</a>
            <a href="#services">Serviços</a>
            <a href="#contact">Diagnóstico</a>
          </div>
          <div class="nav-column">
            <h4>Legal &amp; Segurança</h4>
            <button class="link-btn" @click="$emit('open-privacy')">Política de Privacidade</button>
            <button class="link-btn" @click="$emit('open-terms')">Termos de Uso</button>
            <span class="compliance-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
              Conforme LGPD
            </span>
          </div>
        </div>
      </div>

      <!-- GCP Certification badge -->
      <div class="cert-row">
        <span class="cert-badge">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/960px-Google_Cloud_logo.svg.png"
            alt="Google Cloud" class="cert-logo" />
          <span class="cert-label">Google Cloud Certified Specialist</span>
          <span class="cert-check">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
        </span>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} CognitivaTech. Todos os direitos reservados.</p>
        <p class="trust-notice">Página protegida com criptografia SSL 256-bit.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--bg-secondary);
  padding: var(--spacing-xl) 0 var(--spacing-md);
  border-top: 1px solid var(--border-subtle);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
}

.footer-brand {
  max-width: 480px;
}

.footer-title {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  background: var(--gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.35rem;
}

.footer-tagline {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-bottom: 1.25rem;
}

.contact-info {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  font-size: 0.9rem;
  margin-bottom: 1.25rem;
}

.contact-item {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: var(--text-secondary);
  transition: color var(--transition-fast);
}

.contact-item:hover {
  color: var(--accent-secondary);
}

.separator {
  color: var(--text-muted);
}

.company-credentials {
  padding-top: 0.75rem;
  border-top: 1px solid var(--border-subtle);
}

.legal-name {
  font-size: 0.85rem;
  font-weight: 600;
  color: #cbd5e1;
  margin-bottom: 0.2rem;
}

.legal-location {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-bottom: 0;
}

.footer-nav {
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
}

.nav-column {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.nav-column h4 {
  font-family: var(--font-display);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.nav-column a,
.nav-column .link-btn {
  font-size: 0.9rem;
  color: var(--text-secondary);
  background: none;
  border: none;
  text-align: left;
  padding: 0;
  cursor: pointer;
  font-family: var(--font-body);
  transition: color var(--transition-fast);
}

.nav-column a:hover,
.nav-column .link-btn:hover {
  color: var(--accent-secondary);
}

.compliance-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--accent-emerald);
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.25);
  padding: 0.25rem 0.6rem;
  border-radius: 100px;
  margin-top: 0.5rem;
  width: fit-content;
}

/* Certification badge row */
.cert-row {
  display: flex;
  align-items: center;
  padding: var(--spacing-md) 0;
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
  margin-bottom: var(--spacing-md);
}

.cert-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.45rem 1rem;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-subtle);
  cursor: default;
}

.cert-logo {
  height: 16px;
  width: auto;
  display: block;
}

.cert-label {
  font-size: 0.82rem;
  font-weight: 600;
  color: #e2e8f0;
}

.cert-check {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(16, 185, 129, 0.18);
  color: var(--accent-emerald);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  font-size: 0.82rem;
  color: var(--text-muted);
}

.footer-bottom p {
  margin: 0;
}

.trust-notice {
  font-size: 0.78rem;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: var(--spacing-lg);
  }

  .footer-brand {
    max-width: 100%;
  }

  .footer-nav {
    gap: 2rem;
    width: 100%;
  }

  .cert-row {
    justify-content: center;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}
</style>

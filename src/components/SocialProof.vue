<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const metrics = [
  {
    value: 18,
    suffix: '+',
    label: 'Anos de Experiência',
    description: 'em desenvolvimento e arquitetura de software',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`
  },
  {
    value: 30,
    suffix: '+',
    label: 'Projetos Entregues',
    description: 'sistemas em produção com alto volume e criticidade',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
  },
  {
    value: 40,
    suffix: '%',
    label: 'Redução de Custo',
    description: 'em infraestrutura com migrações para cloud bem executadas',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`
  },
  {
    value: 15,
    suffix: '+',
    label: 'Tecnologias',
    description: 'em Cloud, IA, backend, frontend e DevOps dominadas',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`
  }
]

const achievements = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
    text: 'Migração On-Premise → GCP com zero downtime e 40% de redução de custo'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
    text: 'Arquitetura de microsserviços suportando 500k+ requisições/dia'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    text: 'Pipeline CI/CD reduzindo tempo de deploy de 2h para menos de 10 minutos'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    text: 'Agentes de IA integrados em sistemas legados, automatizando processos críticos'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    text: 'Liderança técnica de times multidisciplinares em projetos de grande escala'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    text: 'Modernização de sistemas monolíticos legados sem interrupção da operação'
  }
]

// Animated counter
const counters = ref(metrics.map(() => 0))
let animationFrames = []

function animateCounter(index, target, duration = 1800) {
  const startTime = performance.now()
  const start = 0

  function update(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3)
    counters.value[index] = Math.round(start + (target - start) * eased)
    if (progress < 1) {
      animationFrames[index] = requestAnimationFrame(update)
    }
  }

  animationFrames[index] = requestAnimationFrame(update)
}

let observer = null

onMounted(() => {
  const section = document.querySelector('.social-proof-section')
  if (!section) return

  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        metrics.forEach((m, i) => animateCounter(i, m.value))
        observer.disconnect()
      }
    },
    { threshold: 0.3 }
  )
  observer.observe(section)
})

onUnmounted(() => {
  animationFrames.forEach(id => cancelAnimationFrame(id))
  if (observer) observer.disconnect()
})
</script>

<template>
  <section class="social-proof-section" id="social-proof">
    <!-- Background decoration -->
    <div class="bg-blob blob-left"></div>
    <div class="bg-blob blob-right"></div>

    <div class="container">

      <!-- Section header -->
      <div class="section-header">
        <span class="section-tag">Resultados & Impacto</span>
        <h2 class="section-title">Nossa expertise em números</h2>
        <p class="section-subtitle">
          Cada número representa um projeto real, um prazo cumprido e um negócio que dependia do resultado.
          Experiência que se acumula entrega por entrega — e agora trabalhando para o seu negócio.
        </p>
      </div>

      <!-- Metrics grid -->
      <!-- <div class="metrics-grid">
        <div v-for="(metric, index) in metrics" :key="index" class="metric-card">
          <div class="metric-icon" v-html="metric.icon"></div>
          <div class="metric-value">
            {{ counters[index] }}<span class="metric-suffix">{{ metric.suffix }}</span>
          </div>
          <div class="metric-label">{{ metric.label }}</div>
          <div class="metric-description">{{ metric.description }}</div>
        </div>
      </div> -->

      <!-- Achievements -->
      <div class="achievements-wrapper">
        <h3 class="achievements-title">Resultados comprovados na prática</h3>
        <div class="achievements-grid">
          <div v-for="(item, index) in achievements" :key="index" class="achievement-item">
            <span class="achievement-icon" v-html="item.icon"></span>
            <span class="achievement-text">{{ item.text }}</span>
          </div>
        </div>
      </div>

      <!-- Anchor quote -->
      <div class="anchor-quote">
        <div class="quote-bar"></div>
        <blockquote>
          "Nossa missão é transformar desafios tecnológicos complexos em soluções que geram resultado real
          — com a seriedade de quem sabe o que está fazendo."
        </blockquote>
        <!-- <p class="quote-author">— Marllon Fernandes, Fundador & Arquiteto de Soluções</p> -->
      </div>

      <!-- Future testimonials placeholder -->
      <div class="testimonials-area">
        <div class="testimonial-label">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          Cases de clientes em breve
        </div>
        <p class="testimonial-hint">
          Estamos iniciando os primeiros projetos da consultoria. Seja um dos primeiros clientes e
          tenha atenção dedicada e acompanhamento próximo para garantir resultados excepcionais.
        </p>
        <a href="https://wa.me/5511966464979" target="_blank" rel="noopener" class="testimonial-cta">
          Seja um dos primeiros — fale agora
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </div>

    </div>
  </section>
</template>

<style scoped>
.social-proof-section {
  position: relative;
  padding: var(--spacing-xl) 0;
  background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  overflow: hidden;
}

/* Background blobs */
.bg-blob {
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
  z-index: 0;
}

.blob-left {
  background: radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 70%);
  top: -100px;
  left: -200px;
}

.blob-right {
  background: radial-gradient(circle, rgba(59, 130, 246, 0.07) 0%, transparent 70%);
  bottom: -100px;
  right: -200px;
}

.container {
  position: relative;
  z-index: 1;
}

/* Header */
.section-header {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.section-tag {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-primary);
  background: rgba(124, 58, 237, 0.1);
  border: 1px solid rgba(124, 58, 237, 0.2);
  padding: 0.3rem 1rem;
  border-radius: 100px;
  margin-bottom: var(--spacing-md);
}

.section-subtitle {
  font-size: 1.05rem;
  color: var(--text-secondary);
  max-width: 620px;
  margin: var(--spacing-sm) auto 0;
  line-height: 1.75;
}

/* Metrics Grid */
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
}

.metric-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 20px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}

.metric-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.06) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: inherit;
}

.metric-card:hover {
  border-color: rgba(124, 58, 237, 0.35);
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(124, 58, 237, 0.12);
}

.metric-card:hover::before {
  opacity: 1;
}

.metric-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  background: rgba(124, 58, 237, 0.12);
  border: 1px solid rgba(124, 58, 237, 0.2);
  border-radius: 14px;
  color: var(--accent-primary);
  margin: 0 auto 1.25rem;
  position: relative;
  z-index: 1;
}

.metric-value {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1;
  background: var(--gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 1;
}

.metric-suffix {
  font-size: 2rem;
}

.metric-label {
  font-size: 0.95rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.4rem;
  position: relative;
  z-index: 1;
}

.metric-description {
  font-size: 0.8rem;
  color: var(--text-secondary);
  line-height: 1.5;
  position: relative;
  z-index: 1;
}

/* Achievements */
.achievements-wrapper {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 24px;
  padding: 2.5rem;
  margin-bottom: var(--spacing-xl);
}

.achievements-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 1.5rem;
  text-align: center;
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.achievement-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.9rem 1rem;
  background: rgba(124, 58, 237, 0.05);
  border: 1px solid rgba(124, 58, 237, 0.12);
  border-radius: 12px;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.achievement-item:hover {
  background: rgba(124, 58, 237, 0.1);
  border-color: rgba(124, 58, 237, 0.25);
}

.achievement-icon {
  flex-shrink: 0;
  color: var(--accent-primary);
  margin-top: 1px;
}

.achievement-text {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.55;
}

/* Anchor quote */
.anchor-quote {
  text-align: center;
  max-width: 700px;
  margin: 0 auto var(--spacing-xl);
  padding: 2rem;
}

.quote-bar {
  width: 40px;
  height: 3px;
  background: var(--gradient-text);
  border-radius: 2px;
  margin: 0 auto 1.25rem;
}

blockquote {
  font-size: 1.15rem;
  color: var(--text-primary);
  line-height: 1.75;
  font-style: italic;
  font-weight: 400;
  margin-bottom: 0.75rem;
}

.quote-author {
  font-size: 0.85rem;
  color: var(--text-secondary);
  font-weight: 500;
  margin: 0;
}

/* Testimonials placeholder */
.testimonials-area {
  text-align: center;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.07) 0%, rgba(59, 130, 246, 0.06) 100%);
  border: 1px dashed rgba(124, 58, 237, 0.3);
  border-radius: 20px;
  padding: 2.5rem 2rem;
}

.testimonial-label {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent-secondary);
  margin-bottom: 0.75rem;
}

.testimonial-hint {
  font-size: 0.95rem;
  color: var(--text-secondary);
  max-width: 520px;
  margin: 0 auto 1.5rem;
  line-height: 1.7;
}

.testimonial-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--gradient-text);
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.7rem 1.75rem;
  border-radius: 2rem;
  text-decoration: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
  box-shadow: 0 4px 20px rgba(124, 58, 237, 0.3);
}

.testimonial-cta:hover {
  opacity: 0.9;
  transform: translateY(-2px);
  color: #fff;
}

/* Responsive */
@media (max-width: 1024px) {
  .metrics-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .metrics-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-sm);
  }

  .metric-card {
    padding: 1.5rem 1rem;
  }

  .metric-value {
    font-size: 2.25rem;
  }

  .achievements-grid {
    grid-template-columns: 1fr;
  }

  .achievements-wrapper {
    padding: 1.75rem 1.25rem;
  }

  .anchor-quote {
    padding: 1.5rem 1rem;
  }

  blockquote {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .metrics-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>

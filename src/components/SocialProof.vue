<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import SvgIcon from './SvgIcon.vue'
import { trackConversion } from '../utils/analytics'

const metrics = [
  {
    value: 18,
    suffix: '+',
    label: 'Anos de Bagagem Técnica',
    description: 'em desenvolvimento, cloud e arquitetura de sistemas',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`
  },
  {
    value: 30,
    suffix: '+',
    label: 'Projetos Entregues',
    description: 'sistemas em produção com estabilidade e alto volume',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
  },
  {
    value: 40,
    suffix: '%',
    label: 'Redução Média de Custo',
    description: 'em infraestrutura com modernização para cloud e IA',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`
  },
  {
    value: 15,
    suffix: '+',
    label: 'Tecnologias Dominadas',
    description: 'em Cloud, Agentes de IA, Microsserviços e DevOps',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`
  }
]

const achievements = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
    text: 'Migração On-Premise → GCP com zero downtime e 40% de redução de custos'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
    text: 'Arquitetura de microsserviços escalável suportando 500k+ requisições/dia'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    text: 'Pipelines CI/CD reduzindo tempo de deploy de 2h para menos de 10 minutos'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    text: 'Agentes de IA e automação WhatsApp integrados a bancos de dados e ERPs legados'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    text: 'Engenharia e consultoria direta, sem camadas de gerência intermediária ou jargões'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    text: 'Modernização de rotinas operacionais sem paralisar o atendimento aos seus clientes'
  }
]

// Animated counter
const counters = ref(metrics.map(() => 0))
let animationFrames = []

function animateCounter(index, target, duration = 1600) {
  const startTime = performance.now()
  const start = 0

  function update(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
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
    { threshold: 0.25 }
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
    <div class="container">

      <!-- Section header -->
      <div class="section-header">
        <span class="section-tag">Resultados &amp; Credibilidade</span>
        <h2 class="section-title">Nossa autoridade técnica em números</h2>
        <p class="section-subtitle">
          Cada indicador representa projetos reais entregues com rigor técnico e negócios que hoje operam com muito mais agilidade e tranquilidade.
        </p>
      </div>

      <!-- Metrics grid (Reativado com precisão) -->
      <div class="metrics-grid">
        <div v-for="(metric, index) in metrics" :key="index" class="metric-card">
          <div class="metric-icon" v-html="metric.icon"></div>
          <div class="metric-value">
            {{ counters[index] }}<span class="metric-suffix">{{ metric.suffix }}</span>
          </div>
          <div class="metric-label">{{ metric.label }}</div>
          <div class="metric-description">{{ metric.description }}</div>
        </div>
      </div>

      <!-- Achievements -->
      <div class="achievements-wrapper">
        <h3 class="achievements-title">Entregas e competências consolidadas</h3>
        <div class="achievements-grid">
          <div v-for="(item, index) in achievements" :key="index" class="achievement-item">
            <SvgIcon :svg="item.icon" class="achievement-icon" />
            <span class="achievement-text">{{ item.text }}</span>
          </div>
        </div>
      </div>

      <!-- Trust Commitment Callout -->
      <div class="trust-callout">
        <div class="trust-callout-header">
          <span class="trust-icon">🛡️</span>
          <div>
            <h4 class="trust-title">Atendimento Direto com Engenheiro Sênior</h4>
            <p class="trust-desc">
              Você não é atendido por estagiários nem recebe soluções genéricas de prateleira. Seu projeto e arquitetura de IA são desenhados diretamente por quem tem certificação <strong>Google Cloud</strong> e mais de 18 anos de experiência em engenharia de sistemas.
            </p>
          </div>
        </div>
        <div class="trust-cta-row">
          <a 
            href="https://wa.me/5511966464979?text=Ol%C3%A1%21+Gostaria+de+agendar+um+diagn%C3%B3stico+técnico+direto+com+o+especialista." 
            target="_blank" 
            rel="noopener" 
            class="trust-cta-btn"
            @click="trackConversion('whatsapp_click', 'social_proof_trust')"
          >
            Agendar diagnóstico técnico direto &rarr;
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.social-proof-section {
  position: relative;
  padding: var(--spacing-xl) 0;
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
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
  font-family: var(--font-display);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #38bdf8;
  background: rgba(37, 99, 235, 0.1);
  border: 1px solid rgba(37, 99, 235, 0.25);
  padding: 0.35rem 1rem;
  border-radius: 100px;
  margin-bottom: var(--spacing-sm);
}

.section-subtitle {
  font-size: 1.05rem;
  color: var(--text-secondary);
  max-width: 640px;
  margin: var(--spacing-sm) auto 0;
  line-height: 1.7;
}

/* Metrics Grid */
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  margin-bottom: var(--spacing-xl);
}

.metric-card {
  background: var(--bg-primary);
  border: 1px solid var(--border-subtle);
  border-radius: 0.85rem;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;
}

.metric-card:hover {
  border-color: var(--border-accent);
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.4);
}

.metric-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: rgba(37, 99, 235, 0.1);
  border: 1px solid rgba(37, 99, 235, 0.25);
  border-radius: 0.6rem;
  color: #38bdf8;
  margin: 0 auto 1.25rem;
}

.metric-value {
  font-family: var(--font-display);
  font-size: 2.8rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.metric-suffix {
  font-size: 2rem;
  color: #38bdf8;
}

.metric-label {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 700;
  color: #e2e8f0;
  margin-bottom: 0.4rem;
}

.metric-description {
  font-size: 0.82rem;
  color: var(--text-muted);
  line-height: 1.5;
}

/* Achievements */
.achievements-wrapper {
  background: var(--bg-primary);
  border: 1px solid var(--border-subtle);
  border-radius: 1rem;
  padding: 2.25rem;
  margin-bottom: var(--spacing-xl);
}

.achievements-title {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  color: #ffffff;
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
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-subtle);
  border-radius: 0.6rem;
  transition: all var(--transition-fast);
}

.achievement-item:hover {
  background: rgba(37, 99, 235, 0.05);
  border-color: var(--border-accent);
}

.achievement-icon {
  flex-shrink: 0;
  color: #38bdf8;
  margin-top: 2px;
}

.achievement-text {
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.55;
}

/* Trust Callout */
.trust-callout {
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(14, 165, 233, 0.04) 100%);
  border: 1px solid var(--border-accent);
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}

.trust-callout-header {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  max-width: 720px;
}

.trust-icon {
  font-size: 2rem;
  line-height: 1;
}

.trust-title {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.4rem;
}

.trust-desc {
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

.trust-desc strong {
  color: #38bdf8;
}

.trust-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.4rem;
  background: var(--accent-primary);
  color: #ffffff;
  border-radius: 0.5rem;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.88rem;
  white-space: nowrap;
  transition: all var(--transition-fast);
}

.trust-cta-btn:hover {
  background: #1d4ed8;
  color: #ffffff;
  transform: translateY(-2px);
}

@media (max-width: 1024px) {
  .metrics-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .metrics-grid {
    grid-template-columns: 1fr;
  }

  .achievements-grid {
    grid-template-columns: 1fr;
  }

  .trust-callout {
    flex-direction: column;
    align-items: flex-start;
  }

  .trust-cta-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>

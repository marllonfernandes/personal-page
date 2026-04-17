<script setup>
import { ref } from 'vue'

const activeCard = ref(null)

const plans = [
  {
    id: 'start',
    badge: '',
    title: 'Presença Digital',
    pitch: 'Para quem precisa ter um site profissional e aparecer no Google.',
    price: 'Sob consulta',
    highlight: true,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    details: [
      'Site institucional responsivo (até 5 páginas)',
      'Formulário de contato integrado',
      'Configuração de domínio e hospedagem',
      'SEO básico para Busca Google',
      'Integração com WhatsApp Business'
    ]
  },
  {
    id: 'grow',
    badge: '',
    title: 'Crescimento Acelerado',
    pitch: 'Para negócios que querem automatizar processos e ganhar escala.',
    price: 'Sob consulta',
    highlight: true,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
    details: [
      'Tudo do plano Starter',
      'Sistema de agendamento ou catálogo online',
      'Automações de WhatsApp e e-mail marketing',
      'Integração com meios de pagamento (Pix, cartão)',
      'Painel administrativo simples para gestão',
      'Suporte técnico'
    ]
  },
  {
    id: 'pro',
    badge: '',
    title: 'Transformação Digital',
    pitch: 'Para empresas que precisam integrar sistemas e modernizar operações.',
    price: 'Sob consulta',
    highlight: true,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
    details: [
      'Arquitetura de sistemas e roadmap tecnológico',
      'Integração entre sistemas legados e APIs externas',
      'Automação de processos críticos (ERP, CRM)',
      'Monitoramento e observabilidade da operação',
      'Treinamento e capacitação da equipe interna',
      'Suporte contínuo e SLA definido em contrato'
    ]
  }
]

function toggle(id) {
  activeCard.value = activeCard.value === id ? null : id
}
</script>

<template>
  <section class="consulting-section" id="consulting">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Consultoria</span>
        <h2 class="section-title">Soluções escaláveis para o seu negócio</h2>
        <p class="section-subtitle">
          Tecnologia de ponta acessível para quem está crescendo. Desde o primeiro site até a automação completa dos
          seus processos.
        </p>
      </div>

      <div class="plans-grid">
        <div v-for="plan in plans" :key="plan.id" class="plan-card"
          :class="{ 'is-highlighted': plan.highlight, 'is-open': activeCard === plan.id }" @click="toggle(plan.id)">
          <div v-if="plan.highlight" class="popular-ribbon">{{ plan.badge }}</div>

          <div class="plan-top">
            <div class="plan-icon" v-html="plan.icon"></div>
            <span v-if="!plan.highlight" class="plan-badge">{{ plan.badge }}</span>

            <div class="plan-info">
              <h3 class="plan-title">{{ plan.title }}</h3>
              <p class="plan-pitch">{{ plan.pitch }}</p>
            </div>

            <div class="chevron">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>

          <div class="plan-details">
            <ul class="details-list">
              <li v-for="(item, i) in plan.details" :key="i">
                <span class="detail-check">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                {{ item }}
              </li>
            </ul>

            <a href="https://wa.me/5511966464979" target="_blank" rel="noopener" class="cta-btn" @click.stop>
              Falar com especialista
            </a>
          </div>
        </div>
      </div>

      <p class="disclaimer">
        Todos os projetos incluem diagnóstico gratuito inicial. Preços sob consulta conforme escopo e complexidade.
      </p>
    </div>
  </section>
</template>

<style scoped>
.consulting-section {
  padding: var(--spacing-xl) 0;
  background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  position: relative;
  overflow: hidden;
}

.consulting-section::before {
  content: '';
  position: absolute;
  bottom: -100px;
  left: -100px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%);
  pointer-events: none;
}

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
  color: var(--accent-secondary);
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  padding: 0.3rem 1rem;
  border-radius: 100px;
  margin-bottom: var(--spacing-md);
}

.section-subtitle {
  font-size: 1.05rem;
  color: var(--text-secondary);
  max-width: 580px;
  margin: var(--spacing-sm) auto 0;
  line-height: 1.7;
}

/* Grid */
.plans-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  align-items: start;
}

/* Card */
.plan-card {
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
}

.plan-card:hover {
  border-color: rgba(124, 58, 237, 0.3);
  box-shadow: 0 8px 30px rgba(124, 58, 237, 0.08);
  transform: translateY(-4px);
}

.plan-card.is-highlighted {
  border-color: rgba(124, 58, 237, 0.5);
  box-shadow: 0 0 0 1px rgba(124, 58, 237, 0.3), 0 16px 50px rgba(124, 58, 237, 0.15);
  background: rgba(124, 58, 237, 0.05);
}

.plan-card.is-open {
  border-color: rgba(124, 58, 237, 0.5);
  box-shadow: 0 12px 50px rgba(124, 58, 237, 0.15);
}

/* Ribbon */
.popular-ribbon {
  background: var(--gradient-text);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
  padding: 0.35rem 0;
}

/* Top */
.plan-top {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  user-select: none;
}

.plan-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(124, 58, 237, 0.1);
  border: 1px solid rgba(124, 58, 237, 0.2);
  border-radius: 12px;
  color: var(--accent-primary);
}

.plan-badge {
  position: absolute;
  top: var(--spacing-md);
  right: 3rem;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent-secondary);
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  padding: 0.2rem 0.6rem;
  border-radius: 100px;
}

.plan-info {
  flex: 1;
  min-width: 0;
}

.plan-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 0.3rem;
}

.plan-pitch {
  font-size: 0.88rem;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.5;
}

.chevron {
  flex-shrink: 0;
  color: var(--text-secondary);
  margin-top: 2px;
  transition: transform 0.3s ease, color 0.3s ease;
}

.plan-card.is-open .chevron {
  transform: rotate(180deg);
  color: var(--accent-primary);
}

/* Details */
.plan-details {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1),
    padding 0.3s ease;
  padding: 0 var(--spacing-lg);
}

.plan-card.is-open .plan-details {
  max-height: 500px;
  padding: 0 var(--spacing-lg) var(--spacing-lg);
}

.details-list {
  list-style: none;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding-top: var(--spacing-md);
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: var(--spacing-md);
}

.details-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

.detail-check {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(124, 58, 237, 0.15);
  border-radius: 50%;
  color: var(--accent-primary);
  margin-top: 1px;
}

.cta-btn {
  display: block;
  text-align: center;
  background: var(--gradient-text);
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.7rem 1.5rem;
  border-radius: 2rem;
  margin-top: var(--spacing-md);
  transition: opacity 0.2s ease, transform 0.2s ease;
  box-shadow: 0 4px 15px rgba(124, 58, 237, 0.25);
}

.cta-btn:hover {
  opacity: 0.9;
  transform: translateY(-1px);
  color: #fff;
}

.disclaimer {
  text-align: center;
  margin-top: var(--spacing-xl);
  font-size: 0.85rem;
  color: var(--text-secondary);
  opacity: 0.7;
}

@media (max-width: 1024px) {
  .plans-grid {
    grid-template-columns: 1fr;
    max-width: 560px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .plan-top {
    padding: var(--spacing-md);
  }

  .plan-details {
    padding: 0 var(--spacing-md);
  }

  .plan-card.is-open .plan-details {
    padding: 0 var(--spacing-md) var(--spacing-md);
  }
}
</style>

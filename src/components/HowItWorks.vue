<script setup>
const steps = [
  {
    number: '01',
    phase: 'Diagnóstico & Arquitetura',
    title: 'Entendemos sua operação a fundo',
    description: 'Conversamos sobre as rotinas da sua empresa, identificamos onde estão os gargalos manuais e desenhamos a solução técnica sob medida.',
    deliverable: 'Entrega: Diagnóstico e roadmap em até 48h'
  },
  {
    number: '02',
    phase: 'Proposta & Escopo Fechado',
    title: 'Planejamento claro e custo fixo',
    description: 'Apresentamos um plano transparente: tecnologias escolhidas, cronograma com entregas incrementais e valor acordado sem custos ocultos.',
    deliverable: 'Entrega: Proposta com SLA e prazo contratual'
  },
  {
    number: '03',
    phase: 'Desenvolvimento & Operação',
    title: 'Construção, testes e entrega assistida',
    description: 'Construímos o sistema com você acompanhando cada marco. Ao final, fazemos homologação conjunta, treinamento da equipe e suporte operacional.',
    deliverable: 'Entrega: Sistema em produção + Suporte direto'
  }
]
</script>

<template>
  <section class="how-it-works-section" id="how-it-works">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Metodologia &amp; Transparência</span>
        <h2 class="section-title">Do diagnóstico à entrega — sem caixas-pretas</h2>
        <p class="section-subtitle">
          Um processo de engenharia estruturado, com marcos claros e entregas que você valida etapa por etapa.
        </p>
      </div>

      <!-- Execution Timeline Stepper -->
      <div class="timeline-stepper">
        <div 
          v-for="(step, index) in steps" 
          :key="step.number"
          class="timeline-step"
        >
          <!-- Step Header with Giant Number & Phase -->
          <div class="step-top">
            <span class="step-number">{{ step.number }}</span>
            <div class="step-phase-badge">{{ step.phase }}</div>
          </div>

          <!-- Step Content -->
          <h3 class="step-title">{{ step.title }}</h3>
          <p class="step-desc">{{ step.description }}</p>

          <!-- Step Deliverable Badge -->
          <div class="step-deliverable">
            <span class="deliverable-icon">✦</span>
            <span>{{ step.deliverable }}</span>
          </div>

          <!-- Step Connector (between steps) -->
          <div v-if="index < steps.length - 1" class="step-connector">
            <div class="connector-pulse"></div>
          </div>
        </div>
      </div>

      <!-- Bottom CTA Box -->
      <div class="cta-box">
        <div class="cta-content">
          <div class="cta-scarcity">
            <span class="scarcity-dot"></span>
            Agenda aberta para novos diagnósticos técnicos
          </div>
          <h3 class="cta-title">Agende um diagnóstico gratuito com o especialista</h3>
          <p class="cta-desc">30 minutos. Sem compromisso. Avaliamos a viabilidade da sua automação e indicamos o melhor caminho.</p>
        </div>
        <a href="https://wa.me/5511966464979?text=Ol%C3%A1%21+Gostaria+de+agendar+um+diagn%C3%B3stico+gratuito+de+30+minutos." target="_blank" rel="noopener" class="cta-btn">
          Falar no WhatsApp &rarr;
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.how-it-works-section {
  padding: var(--spacing-xl) 0;
  background-color: var(--bg-primary);
  position: relative;
}

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
  max-width: 620px;
  margin: var(--spacing-sm) auto 0;
  line-height: 1.7;
}

/* Timeline Stepper */
.timeline-stepper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  position: relative;
  margin-bottom: var(--spacing-xl);
}

.timeline-step {
  position: relative;
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  border-radius: 1rem;
  padding: 2.25rem 1.75rem;
  display: flex;
  flex-direction: column;
  transition: all var(--transition-normal);
}

.timeline-step:hover {
  transform: translateY(-4px);
  border-color: var(--border-accent);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45);
}

.step-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.25rem;
}

.step-number {
  font-family: var(--font-display);
  font-size: 2.75rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.04em;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.2) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.step-phase-badge {
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #38bdf8;
  background: rgba(37, 99, 235, 0.12);
  border: 1px solid rgba(37, 99, 235, 0.3);
  padding: 0.25rem 0.65rem;
  border-radius: 100px;
}

.step-title {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.75rem;
  line-height: 1.35;
}

.step-desc {
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.65;
  flex-grow: 1;
  margin-bottom: 1.5rem;
}

.step-deliverable {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: #cbd5e1;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-subtle);
  padding: 0.45rem 0.85rem;
  border-radius: 0.5rem;
}

.deliverable-icon {
  color: #38bdf8;
}

/* Connector */
.step-connector {
  display: none;
}

/* CTA Box */
.cta-box {
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(14, 165, 233, 0.05) 100%);
  border: 1px solid var(--border-accent);
  border-radius: 1rem;
  padding: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.cta-content {
  flex: 1;
}

.cta-scarcity {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-display);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #38bdf8;
  background: rgba(14, 165, 233, 0.1);
  border: 1px solid rgba(14, 165, 233, 0.25);
  padding: 0.25rem 0.75rem;
  border-radius: 100px;
  margin-bottom: 0.75rem;
}

.scarcity-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #38bdf8;
  box-shadow: 0 0 6px #38bdf8;
  animation: pulse-green 1.8s ease-in-out infinite;
}

@keyframes pulse-green {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.8); }
}

.cta-title {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 0.4rem;
}

.cta-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin: 0;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-primary);
  color: #ffffff;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.92rem;
  padding: 0.85rem 1.8rem;
  border-radius: 0.5rem;
  transition: all var(--transition-fast);
  white-space: nowrap;
}

.cta-btn:hover {
  background: #1d4ed8;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(37, 99, 235, 0.45);
  color: #ffffff;
}

@media (max-width: 992px) {
  .timeline-stepper {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
  
  .cta-box {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }
}
</style>

<script setup>
</script>

<template>
  <section class="how-it-works-section" id="how-it-works">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Como Funciona</span>
        <h2 class="section-title">Do problema ao sistema em funcionamento — sem complicação</h2>
        <p class="section-subtitle">
          Desenvolvemos o software certo para o seu negócio, com acompanhamento em cada etapa.
        </p>
      </div>

      <div class="steps-grid">
        <!-- Passo 1 -->
        <div class="step-card">
          <div class="step-badge">Passo 1</div>
          <h3 class="step-title">Entendemos o seu negócio</h3>
          <p class="step-desc">
            Conversamos sobre como sua empresa opera hoje, onde estão os gargalos e o que você precisa automatizar ou melhorar.
          </p>
          <div class="step-footer">
            Reunião gratuita de 30 min, sem compromisso.
          </div>
        </div>

        <!-- Passo 2 -->
        <div class="step-card">
          <div class="step-badge">Passo 2</div>
          <h3 class="step-title">Propomos a solução ideal</h3>
          <p class="step-desc">
            Apresentamos um plano claro: o que será desenvolvido, em quanto tempo, com qual investimento — sem surpresas no meio do caminho.
          </p>
          <div class="step-footer">
            Proposta detalhada com escopo, prazo e custo fixo.
          </div>
        </div>

        <!-- Passo 3 -->
        <div class="step-card">
          <div class="step-badge">Passo 3</div>
          <h3 class="step-title">Desenvolvemos e entregamos</h3>
          <p class="step-desc">
            Construímos seu sistema com entregas parciais para você acompanhar o progresso. Ao final, treinamos sua equipe e damos suporte na implantação.
          </p>
          <div class="step-footer">
            Você acompanha tudo em tempo real.
          </div>
        </div>
      </div>

      <!-- Bottom CTA Box -->
      <div class="cta-box">
        <div class="cta-content">
          <h3 class="cta-title">Agende um diagnóstico gratuito</h3>
          <p class="cta-desc">30 minutos. Sem compromisso. A gente analisa seu caso e indica o melhor caminho.</p>
        </div>
        <a href="https://wa.me/5511966464979" target="_blank" rel="noopener" class="cta-btn">
          Falar no WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.how-it-works-section {
  padding: var(--spacing-xl) 0;
  background-color: var(--bg-secondary);
  position: relative;
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
  max-width: 600px;
  margin: var(--spacing-sm) auto 0;
  line-height: 1.7;
}

/* Steps Grid */
.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.step-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.step-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border-color: rgba(59, 130, 246, 0.3);
}

.step-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 600;
  color: #fff;
  background: var(--gradient-bg);
  border: 1px solid rgba(124, 58, 237, 0.3);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  margin-bottom: 1.2rem;
  align-self: flex-start;
}

.step-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
}

.step-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
  flex-grow: 1;
  margin-bottom: 1.5rem;
}

.step-footer {
  font-size: 0.85rem;
  color: #8a94a6;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

/* CTA Box */
.cta-box {
  background: var(--gradient-bg);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.cta-content {
  flex: 1;
}

.cta-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
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
  background: #fff;
  color: #0f111a;
  font-weight: 600;
  padding: 0.8rem 1.8rem;
  border-radius: 30px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  white-space: nowrap;
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
}

@media (max-width: 992px) {
  .steps-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .cta-box {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }
}
</style>

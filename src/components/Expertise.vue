<script setup>
import SvgIcon from './SvgIcon.vue'

const pillars = [
  {
    code: 'PILAR 01',
    title: 'Engenharia de Software & Microsserviços',
    summary: 'Aplicações desacopladas, seguras e preparadas para alto volume transacional sem gargalos de concorrência.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    capabilities: [
      'Design de APIs RESTful e gRPC de altíssima performance',
      'Modernização de monólitos legados com zero downtime',
      'Padrões de resiliência: Circuit Breaker, Retries e Event-Driven'
    ],
    techs: ['Node.js', 'Python (FastAPI)', '.NET Core', 'PostgreSQL', 'Redis', 'RabbitMQ']
  },
  {
    code: 'PILAR 02',
    title: 'Arquitetura Cloud & SRE (Google Cloud)',
    summary: 'Projetos e migrações executadas por especialista certificado Google Cloud, com foco em custo e disponibilidade.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/><polyline points="12 12 12 18"/><polyline points="9 15 12 12 15 15"/></svg>`,
    capabilities: [
      'Migração segura On-Premise → Google Cloud Platform (GCP)',
      'Orquestração de microsserviços com Kubernetes (GKE) e Docker',
      'Observabilidade avançada com OpenTelemetry e alertas proativos'
    ],
    techs: ['Google Cloud (GCP)', 'Kubernetes (GKE)', 'Docker', 'Terraform', 'OpenTelemetry', 'Datadog']
  },
  {
    code: 'PILAR 03',
    title: 'Inteligência Artificial & Agentes Autônomos',
    summary: 'Automação cognitiva de ponta a ponta conectada às bases de dados, ERPs e canais de atendimento da sua empresa.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1H1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/><circle cx="7.5" cy="14.5" r="1.5"/><circle cx="16.5" cy="14.5" r="1.5"/></svg>`,
    capabilities: [
      'Agentes autônomos com execução de ferramentas e chamadas de API',
      'Guardrails determinísticos e RAG privado (zero alucinação e sigilo)',
      'Extração inteligente de dados em contratos e documentos via OCR',
      'Atendimento humanizado com contexto do negócio via WhatsApp'
    ],
    techs: ['OpenAI / Claude', 'LangChain', 'Vector DBs (pgvector)', 'WhatsApp API', 'Ollama / vLLM']
  }
]
</script>

<template>
  <section class="expertise-section" id="expertise">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Pilares Arquiteturais</span>
        <h2 class="section-title">Engenharia sólida em cada linha de código</h2>
        <p class="section-subtitle">
          Não usamos soluções improvisadas. Aplicamos padrões rigorosos de engenharia, infraestrutura em nuvem e inteligência artificial para construir plataformas que não caem.
        </p>
      </div>

      <!-- Pillars Matrix -->
      <div class="pillars-grid">
        <div
          v-for="pillar in pillars"
          :key="pillar.code"
          class="pillar-card"
        >
          <div class="pillar-top">
            <span class="pillar-code">{{ pillar.code }}</span>
            <div class="pillar-icon">
              <SvgIcon :svg="pillar.icon" />
            </div>
          </div>

          <h3 class="pillar-title">{{ pillar.title }}</h3>
          <p class="pillar-summary">{{ pillar.summary }}</p>

          <!-- Capabilities List -->
          <ul class="capabilities-list">
            <li v-for="(cap, i) in pillar.capabilities" :key="i">
              <span class="cap-check">✓</span>
              <span>{{ cap }}</span>
            </li>
          </ul>

          <!-- Stack Chips -->
          <div class="tech-stack-box">
            <div class="tech-label">TECNOLOGIAS &amp; AMBIENTE:</div>
            <div class="tech-chips">
              <span v-for="t in pillar.techs" :key="t" class="tech-chip">{{ t }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.expertise-section {
  padding: var(--spacing-xl) 0;
  background: var(--bg-secondary);
  position: relative;
  overflow: hidden;
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
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
  max-width: 640px;
  margin: var(--spacing-sm) auto 0;
  line-height: 1.7;
}

/* Pillars Grid */
.pillars-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.pillar-card {
  position: relative;
  background: var(--bg-primary);
  border: 1px solid var(--border-subtle);
  border-radius: 1rem;
  padding: 2.25rem 1.75rem;
  display: flex;
  flex-direction: column;
  transition: all var(--transition-normal);
}

.pillar-card:hover {
  transform: translateY(-4px);
  border-color: var(--border-accent);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45);
}

.pillar-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
}

.pillar-code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #38bdf8;
  background: rgba(37, 99, 235, 0.12);
  border: 1px solid rgba(37, 99, 235, 0.3);
  padding: 0.22rem 0.6rem;
  border-radius: 0.35rem;
}

.pillar-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(37, 99, 235, 0.1);
  border: 1px solid rgba(37, 99, 235, 0.25);
  border-radius: 0.6rem;
  color: #38bdf8;
  flex-shrink: 0;
}

.pillar-title {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.6rem;
  line-height: 1.35;
}

.pillar-summary {
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.65;
  margin-bottom: 1.5rem;
}

.capabilities-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  margin-bottom: 1.75rem;
  flex-grow: 1;
}

.capabilities-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.86rem;
  color: #cbd5e1;
  line-height: 1.5;
}

.cap-check {
  color: var(--accent-emerald);
  font-weight: 700;
  margin-top: 1px;
}

/* Tech Stack Box */
.tech-stack-box {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding-top: 1.25rem;
}

.tech-label {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: #64748b;
  margin-bottom: 0.65rem;
}

.tech-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tech-chip {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.72rem;
  color: #94a3b8;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-subtle);
  padding: 0.2rem 0.55rem;
  border-radius: 0.35rem;
  transition: all var(--transition-fast);
}

.pillar-card:hover .tech-chip {
  color: #e2e8f0;
  border-color: rgba(255, 255, 255, 0.12);
}

@media (max-width: 992px) {
  .pillars-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
}
</style>

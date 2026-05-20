<script setup>
const niches = [
  {
    id: 'juridico',
    title: 'Escritórios Jurídicos',
    description: 'Controle de prazos, gestão de contratos e honorários em um sistema. Triagem de documentos com IA e alertas automáticos de prazo.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
    tag: 'Alta demanda'
  },
  {
    id: 'clinicas',
    title: 'Clínicas Médicas, Odontológicas & Veterinárias',
    description: 'Agendamento online, atendente virtual com IA no WhatsApp e prontuário digital — menos faltas, mais pacientes atendidos.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
    tag: 'Alta demanda'
  },
  {
    id: 'contabilidade',
    title: 'Contabilidades',
    description: 'Gestão de clientes, documentos fiscais e relatórios automatizados. Menos retrabalho, mais eficiência operacional.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    tag: null
  },
  {
    id: 'imobiliarias',
    title: 'Imobiliárias & Corretores',
    description: 'Catálogo online, contratos eletrônicos e acompanhamento de clientes. Venda mais sem deixar nenhum lead escapar.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    tag: null
  },
  {
    id: 'pme',
    title: 'Pequenas & Médias Empresas',
    description: 'Operação, vendas e equipe organizadas em um sistema sob medida com IA — atendimento automatizado e relatórios gerados na hora.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
    tag: null
  },
  {
    id: 'ecommerce',
    title: 'E-commerce & Varejo',
    description: 'Estoque sincronizado, pedidos automatizados e integração com marketplaces. Escale sem perder o controle.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
    tag: null
  },
  {
    id: 'oficinas',
    title: 'Oficinas & Prestadores de Serviço',
    description: 'Ordem de serviço digital, orçamento gerado por IA e acompanhamento do cliente via WhatsApp. Chega de caderno e planilha.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    tag: null
  }
]
</script>

<template>
  <section class="niches-section" id="segments">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Segmentos</span>
        <h2 class="section-title">Feito para quem está crescendo</h2>
        <p class="section-subtitle">
          Atendemos negócios que precisam sair das planilhas e do WhatsApp — e ter um sistema que cresce junto com a empresa.
        </p>
      </div>

      <div class="niches-grid">
        <div
          v-for="niche in niches"
          :key="niche.id"
          class="niche-card"
        >
          <span v-if="niche.tag" class="hot-tag">{{ niche.tag }}</span>
          <div class="niche-icon" v-html="niche.icon"></div>
          <h3 class="niche-title">{{ niche.title }}</h3>
          <p class="niche-desc">{{ niche.description }}</p>
        </div>
      </div>

      <div class="niches-footer">
        <p>Não encontrou seu segmento? Atendemos qualquer negócio em crescimento no Brasil.</p>
        <a href="#contact" class="footer-link">Fale com a gente →</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.niches-section {
  padding: var(--spacing-xl) 0;
  background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
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
  color: var(--accent-primary);
  background: rgba(124, 58, 237, 0.1);
  border: 1px solid rgba(124, 58, 237, 0.2);
  padding: 0.3rem 1rem;
  border-radius: 100px;
  margin-bottom: var(--spacing-md);
}

.section-title {
  font-size: clamp(1.75rem, 3.5vw, 2.75rem);
  font-weight: 700;
  color: #fff;
  line-height: 1.2;
  margin-bottom: var(--spacing-sm);
}

.section-subtitle {
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 580px;
  margin: 0 auto;
  line-height: 1.7;
}

.niches-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.niche-card {
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  padding: 1.75rem;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.niche-card:hover {
  transform: translateY(-4px);
  border-color: rgba(124, 58, 237, 0.35);
  box-shadow: 0 12px 40px rgba(124, 58, 237, 0.12);
}

.hot-tag {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #f59e0b;
  background: rgba(245, 158, 11, 0.1);
  border: 1px solid rgba(245, 158, 11, 0.25);
  padding: 0.2rem 0.6rem;
  border-radius: 100px;
}

.niche-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(124, 58, 237, 0.1);
  border: 1px solid rgba(124, 58, 237, 0.15);
  border-radius: 12px;
  color: var(--accent-primary);
  margin-bottom: 1rem;
}

.niche-title {
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.niche-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.65;
}

.niches-footer {
  text-align: center;
  padding-top: var(--spacing-md);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.niches-footer p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
}

.footer-link {
  color: var(--accent-primary);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: opacity 0.2s;
}

.footer-link:hover {
  opacity: 0.75;
}

@media (max-width: 900px) {
  .niches-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .niches-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<script setup>
import SvgIcon from './SvgIcon.vue'

const featuredNiches = [
  {
    id: 'juridico',
    title: 'Escritórios Jurídicos & Advocacia',
    badge: 'Alta Procura · IA Jurídica',
    description: 'Elimine o risco de perda de prazos e automatize rotinas manuais com agentes cognitivos integrados ao DJE e aos seus processos.',
    highlights: [
      'Varredura diária de intimações no DJE e diários eletrônicos',
      'Cálculo automatizado de tempestividade e prazos CPC/CLT',
      'Notificação instantânea para advogados e clientes no WhatsApp'
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`
  },
  {
    id: 'clinicas',
    title: 'Clínicas Médicas & Odonto',
    badge: 'Alta Procura · Atendimento 24/7',
    description: 'Atendente virtual com IA treinado na conduta da sua clínica, agendando consultas e reduzindo drasticamente as faltas.',
    highlights: [
      'Agendamento inteligente 24 horas por dia no WhatsApp',
      'Confirmação ativa de presença com redução de no-show',
      'Integração com prontuários e calendários médicos'
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`
  }
]

const standardNiches = [
  {
    id: 'contabilidade',
    title: 'Contabilidades & Gestão Fiscal',
    description: 'Gestão de documentos fiscais, cobrança automatizada de certidões e relatórios executivos sem intervenção humana.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`
  },
  {
    id: 'imobiliarias',
    title: 'Imobiliárias & Corretores',
    description: 'Triagem inteligente de compradores via WhatsApp, catálogo sincronizado e envio de contratos com assinatura eletrônica.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`
  },
  {
    id: 'pme',
    title: 'Pequenas & Médias Empresas',
    description: 'Painéis gerenciais unificados, automação de fluxo de caixa e agentes conectando vendas, pós-venda e financeiro.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`
  }
]

const bannerNiche = {
  id: 'ecommerce',
  title: 'E-commerce & Varejo Especializado',
  badge: 'Escala & Automação',
  description: 'Sincronização de estoque multicanal, esteira de separação automatizada e atendimento pós-venda assistido por IA com rastreamento em tempo real.',
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`
}
</script>

<template>
  <section class="niches-section" id="segments">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Segmentos Atendidos</span>
        <h2 class="section-title">Soluções arquitetadas para o seu setor</h2>
        <p class="section-subtitle">
          Eliminamos os gargalos operacionais específicos do seu segmento com sistemas e agentes de IA projetados para a realidade do seu negócio.
        </p>
      </div>

      <!-- Bento Grid Layout -->
      <div class="bento-grid">
        <!-- Featured 1: Jurídico (Span 2) -->
        <div class="bento-card bento-featured bento-juridico">
          <div class="card-glow"></div>
          <div class="card-top">
            <span class="bento-badge">{{ featuredNiches[0].badge }}</span>
            <div class="bento-icon">
              <SvgIcon :svg="featuredNiches[0].icon" />
            </div>
          </div>
          <h3 class="bento-title">{{ featuredNiches[0].title }}</h3>
          <p class="bento-desc">{{ featuredNiches[0].description }}</p>
          <ul class="highlights-list">
            <li v-for="(hl, i) in featuredNiches[0].highlights" :key="i">
              <span class="hl-check">✓</span>
              <span>{{ hl }}</span>
            </li>
          </ul>
        </div>

        <!-- Featured 2: Clínicas (Span 1) -->
        <div class="bento-card bento-featured bento-clinicas">
          <div class="card-glow"></div>
          <div class="card-top">
            <span class="bento-badge">{{ featuredNiches[1].badge }}</span>
            <div class="bento-icon">
              <SvgIcon :svg="featuredNiches[1].icon" />
            </div>
          </div>
          <h3 class="bento-title">{{ featuredNiches[1].title }}</h3>
          <p class="bento-desc">{{ featuredNiches[1].description }}</p>
          <ul class="highlights-list">
            <li v-for="(hl, i) in featuredNiches[1].highlights" :key="i">
              <span class="hl-check">✓</span>
              <span>{{ hl }}</span>
            </li>
          </ul>
        </div>

        <!-- Row 2: Standard Niches (3 columns) -->
        <div 
          v-for="niche in standardNiches" 
          :key="niche.id"
          class="bento-card bento-standard"
        >
          <div class="bento-icon icon-sm">
            <SvgIcon :svg="niche.icon" />
          </div>
          <h3 class="bento-title-sm">{{ niche.title }}</h3>
          <p class="bento-desc-sm">{{ niche.description }}</p>
        </div>

        <!-- Row 3: Banner Niche (Span 3) -->
        <div class="bento-card bento-banner">
          <div class="banner-left">
            <div class="bento-icon">
              <SvgIcon :svg="bannerNiche.icon" />
            </div>
            <div>
              <div class="banner-header">
                <h3 class="bento-title">{{ bannerNiche.title }}</h3>
                <span class="bento-badge">{{ bannerNiche.badge }}</span>
              </div>
              <p class="bento-desc">{{ bannerNiche.description }}</p>
            </div>
          </div>
          <a href="https://wa.me/5511966464979?text=Ol%C3%A1%21+Gostaria+de+solu%C3%A7%C3%B5es+para+meu+E-commerce+ou+Varejo." target="_blank" rel="noopener" class="banner-cta">
            Consultar especialista &rarr;
          </a>
        </div>
      </div>

      <div class="niches-footer">
        <p>Não encontrou seu segmento específico? Atendemos empresas com processos sob medida em todo o Brasil.</p>
        <a href="#contact" class="footer-link">Solicitar análise para o meu negócio &rarr;</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.niches-section {
  padding: var(--spacing-xl) 0;
  background: var(--bg-primary);
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
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
}

/* Bento Grid */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-bottom: var(--spacing-xl);
}

/* Bento Card Base */
.bento-card {
  position: relative;
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  border-radius: 1rem;
  padding: 2rem;
  overflow: hidden;
  transition: all var(--transition-normal);
}

.bento-card:hover {
  transform: translateY(-4px);
  border-color: var(--border-accent);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45);
}

.card-glow {
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%);
  pointer-events: none;
}

/* Featured Spans */
.bento-juridico {
  grid-column: span 2;
}

.bento-clinicas {
  grid-column: span 1;
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
}

.bento-badge {
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #38bdf8;
  background: rgba(14, 165, 233, 0.12);
  border: 1px solid rgba(14, 165, 233, 0.3);
  padding: 0.25rem 0.7rem;
  border-radius: 100px;
}

.bento-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(37, 99, 235, 0.12);
  border: 1px solid rgba(37, 99, 235, 0.25);
  border-radius: 0.6rem;
  color: #38bdf8;
  flex-shrink: 0;
}

.icon-sm {
  width: 38px;
  height: 38px;
  margin-bottom: 1rem;
}

.bento-title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.6rem;
  line-height: 1.3;
}

.bento-desc {
  font-size: 0.93rem;
  color: var(--text-secondary);
  line-height: 1.65;
  margin-bottom: 1.25rem;
}

.highlights-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding-top: 1rem;
}

.highlights-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.55rem;
  font-size: 0.85rem;
  color: #cbd5e1;
  line-height: 1.5;
}

.hl-check {
  color: var(--accent-emerald);
  font-weight: 700;
}

/* Standard Cards */
.bento-standard {
  padding: 1.75rem 1.5rem;
}

.bento-title-sm {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.45rem;
}

.bento-desc-sm {
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

/* Banner Card (Span 3) */
.bento-banner {
  grid-column: span 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  background: linear-gradient(135deg, rgba(16, 21, 34, 0.95) 0%, rgba(37, 99, 235, 0.06) 100%);
  border: 1px solid rgba(37, 99, 235, 0.3);
}

.banner-left {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  flex: 1;
}

.banner-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 0.35rem;
}

.banner-header .bento-title {
  margin: 0;
}

.banner-left .bento-desc {
  margin: 0;
}

.banner-cta {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.4rem;
  background: rgba(37, 99, 235, 0.15);
  border: 1px solid rgba(37, 99, 235, 0.4);
  color: #38bdf8;
  font-family: var(--font-display);
  font-size: 0.88rem;
  font-weight: 600;
  border-radius: 0.5rem;
  white-space: nowrap;
  transition: all var(--transition-fast);
}

.banner-cta:hover {
  background: var(--accent-primary);
  color: #ffffff;
  transform: translateY(-2px);
}

/* Footer */
.niches-footer {
  text-align: center;
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--border-subtle);
}

.niches-footer p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 0.6rem;
}

.footer-link {
  color: #38bdf8;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.95rem;
  transition: color var(--transition-fast);
}

.footer-link:hover {
  color: #7dd3fc;
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 992px) {
  .bento-grid {
    grid-template-columns: 1fr;
  }

  .bento-juridico,
  .bento-clinicas,
  .bento-banner {
    grid-column: span 1;
  }

  .bento-banner {
    flex-direction: column;
    align-items: flex-start;
  }

  .banner-left {
    flex-direction: column;
  }

  .banner-cta {
    width: 100%;
    justify-content: center;
  }
}
</style>

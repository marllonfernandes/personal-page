<script setup>
import { ref } from 'vue'

const activeCard = ref(null)

const services = [
  {
    id: 'sites',
    title: 'Desenvolvimento de Sites',
    summary: 'Sites modernos, responsivos e de alta performance.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    details: [
      'Landing pages e sites institucionais',
      'Portais web com autenticação e painel administrativo',
      'Progressive Web Apps (PWA)',
      'Otimização de performance (Core Web Vitals)',
      'SEO técnico e acessibilidade (WCAG)',
      'Frameworks: Vue.js, React, Angular, Next.js'
    ]
  },
  {
    id: 'apis',
    title: 'APIs & Middlewares',
    summary: 'Construção de APIs robustas e camadas de integração inteligentes.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    details: [
      'Design e implementação de APIs RESTful e GraphQL',
      'Middlewares de transformação e roteamento de dados',
      'Autenticação e autorização (OAuth2, JWT, API Keys)',
      'Rate limiting, throttling e circuit breaker',
      'Documentação com OpenAPI/Swagger',
      'Node.js, .NET Core, Python (FastAPI)'
    ]
  },
  {
    id: 'integracoes',
    title: 'Integrações de Sistemas',
    summary: 'Conexão entre sistemas legados, SaaS e plataformas modernas.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
    details: [
      'Integração entre ERPs, CRMs e sistemas legados',
      'Webhooks e event-driven integrations',
      'ETL e sincronização de dados em batch',
      'Mensageria com Pub/Sub, RabbitMQ e Kafka',
      'Conectores para plataformas como Salesforce, HubSpot, SAP',
      'Transformação de dados com mapeamentos customizados'
    ]
  },
  {
    id: 'observabilidade',
    title: 'Observabilidade',
    summary: 'Visibilidade total sobre o comportamento dos seus sistemas.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
    details: [
      'Distributed tracing com OpenTelemetry',
      'Logs estruturados e correlacionados (Cloud Logging, Datadog)',
      'Métricas customizadas e dashboards executivos',
      'Alertas inteligentes e SLOs/SLAs mensuráveis',
      'Profiling de performance em produção',
      'Análise de causa raiz (RCA) e gestão de incidentes'
    ]
  },
  {
    id: 'monitoramento',
    title: 'Monitoramento & SRE',
    summary: 'Garantia de disponibilidade, confiabilidade e resiliência.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    details: [
      'Monitoramento contínuo de infraestrutura e aplicações',
      'Health checks, probes e readiness em Kubernetes',
      'Uptime monitoring e alertas proativos por múltiplos canais',
      'Runbooks e playbooks de resposta a incidentes',
      'Chaos engineering e testes de resiliência',
      'Ferramentas: Prometheus, Grafana, Cloud Monitoring, New Relic'
    ]
  }
]

function toggle(id) {
  activeCard.value = activeCard.value === id ? null : id
}
</script>

<template>
  <section class="services-section" id="services">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Serviços</span>
        <h2 class="section-title">O Que Eu Ofereço</h2>
        <p class="section-subtitle">
          Soluções técnicas end-to-end, do código à infraestrutura. Clique em um serviço para mais detalhes.
        </p>
      </div>

      <div class="services-grid">
        <div
          v-for="service in services"
          :key="service.id"
          class="service-card"
          :class="{ 'is-open': activeCard === service.id }"
          @click="toggle(service.id)"
        >
          <div class="card-top">
            <div class="service-icon" v-html="service.icon"></div>
            <div class="service-info">
              <h3 class="service-title">{{ service.title }}</h3>
              <p class="service-summary">{{ service.summary }}</p>
            </div>
            <div class="chevron">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
          </div>

          <div class="card-details">
            <ul class="details-list">
              <li v-for="(detail, i) in service.details" :key="i">
                <span class="detail-dot"></span>
                {{ detail }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
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
  max-width: 560px;
  margin: var(--spacing-sm) auto 0;
  line-height: 1.7;
}

/* Grid */
.services-grid {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  max-width: 860px;
  margin: 0 auto;
}

/* Card */
.service-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  border-color: rgba(124, 58, 237, 0.3);
  box-shadow: 0 8px 30px rgba(124, 58, 237, 0.08);
}

.service-card.is-open {
  border-color: rgba(124, 58, 237, 0.45);
  box-shadow: 0 12px 40px rgba(124, 58, 237, 0.13);
}

/* Top row */
.card-top {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-lg) var(--spacing-xl);
  user-select: none;
}

.service-icon {
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
  transition: background 0.3s ease;
}

.service-card.is-open .service-icon,
.service-card:hover .service-icon {
  background: rgba(124, 58, 237, 0.2);
}

.service-info {
  flex: 1;
  min-width: 0;
}

.service-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 0.25rem;
}

.service-summary {
  font-size: 0.92rem;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.5;
}

.chevron {
  flex-shrink: 0;
  color: var(--text-secondary);
  transition: transform 0.3s ease, color 0.3s ease;
}

.service-card.is-open .chevron {
  transform: rotate(180deg);
  color: var(--accent-primary);
}

/* Details panel */
.card-details {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1),
              padding 0.3s ease;
  padding: 0 var(--spacing-xl);
}

.service-card.is-open .card-details {
  max-height: 400px;
  padding: 0 var(--spacing-xl) var(--spacing-lg);
}

.details-list {
  list-style: none;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding-top: var(--spacing-md);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 0.6rem var(--spacing-lg);
}

.details-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

.detail-dot {
  flex-shrink: 0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent-primary);
  margin-top: 0.45rem;
}

@media (max-width: 768px) {
  .card-top {
    padding: var(--spacing-md);
  }

  .card-details {
    padding: 0 var(--spacing-md);
  }

  .service-card.is-open .card-details {
    padding: 0 var(--spacing-md) var(--spacing-md);
  }

  .details-list {
    grid-template-columns: 1fr;
  }
}
</style>

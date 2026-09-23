<script setup>
import { ref, onMounted } from 'vue'
import { trackConversion } from '../utils/analytics'

const showContent = ref(false)

const scenarios = [
  {
    id: 'juridico',
    name: 'Escritório Jurídico',
    tag: 'Processamento DJE & Prazos',
    trigger: {
      source: 'Diário Oficial (DJE) / WhatsApp',
      badge: 'Gatilho Detectado',
      text: 'Publicação de intimação identificada: Proc. 0038192-44.2024.5.02.0019 — Intimação para manifestação.'
    },
    action: {
      agent: 'Agente Juris-AI',
      badge: 'Leitura OCR & Inteligência Jurídica',
      text: 'Varredura de PDF, classificação de peça (Contestação), cálculo automático de prazo (15 dias úteis CPC).'
    },
    result: {
      status: 'Executado com Sucesso',
      badge: 'Sincronização & Alerta',
      text: 'Prazo fatal inserido na agenda do sócio + resumo executivo enviado no WhatsApp do advogado responsável.'
    },
    metrics: {
      latency: '1.18s',
      cost: 'R$ 0,00',
      status: '200 OK'
    }
  },
  {
    id: 'clinicas',
    name: 'Clínica Médica & Odonto',
    tag: 'Atendimento & Triagem 24/7',
    trigger: {
      source: 'WhatsApp Paciente',
      badge: 'Mensagem Recebida',
      text: '"Boa tarde! Preciso remarcar minha consulta com a Dra. Camila para quinta-feira após as 16h."'
    },
    action: {
      agent: 'Agente Atendimento-AI',
      badge: 'Interpretação & Consulta de Agenda',
      text: 'Identificação de intenção e horário, consulta ao sistema de prontuário e validação de disponibilidade médica.'
    },
    result: {
      status: 'Executado com Sucesso',
      badge: 'Confirmação Automática',
      text: 'Horário das 16:30 confirmado no sistema + lembrete automático agendado e enviado ao WhatsApp do paciente.'
    },
    metrics: {
      latency: '0.84s',
      cost: 'R$ 0,00',
      status: '200 OK'
    }
  },
  {
    id: 'pme',
    name: 'PME & Vendas B2B',
    tag: 'Automação Comercial & CRM',
    trigger: {
      source: 'Formulário / E-mail Corporativo',
      badge: 'Novo Lead B2B',
      text: 'Solicitação de cotação para automação de estoque e integração de 6 filiais recebida via formulário web.'
    },
    action: {
      agent: 'Agente Operações-AI',
      badge: 'Qualificação & Precificação',
      text: 'Verificação de CNPJ na Receita Federal, cálculo automatizado de escopo e geração instantânea de minuta em PDF.'
    },
    result: {
      status: 'Executado com Sucesso',
      badge: 'Disparo & CRM Sync',
      text: 'Proposta comercial enviada no WhatsApp do decisor + oportunidade registrada no CRM com pontuação A+.'
    },
    metrics: {
      latency: '1.42s',
      cost: 'R$ 0,00',
      status: '200 OK'
    }
  }
]

const selectedScenarioId = ref('juridico')
const activeScenario = ref(scenarios[0])

const selectScenario = (id) => {
  selectedScenarioId.value = id
  activeScenario.value = scenarios.find(s => s.id === id) || scenarios[0]
}

onMounted(() => {
  setTimeout(() => showContent.value = true, 80)
})
</script>

<template>
  <section class="hero" id="home">
    <!-- Subtle technical grid & ambient light -->
    <div class="hero-grid"></div>
    <div class="ambient-glow"></div>

    <div class="container hero-content" :class="{ 'visible': showContent }">
      <div class="hero-center">
        <div class="hero-badge">
          <span class="badge-dot"></span>
          <span class="badge-text">Engenharia de Software &amp; Automação com IA</span>
        </div>

        <h1 class="hero-title">
          Planilha, WhatsApp e e-mail ainda <span class="highlight">controlam</span> o seu negócio?
        </h1>

        <p class="description">
          Desenvolvemos sistemas sob medida e <strong>agentes de inteligência artificial</strong> para empresas que querem automatizar a operação, eliminar gargalos e escalar com previsibilidade — sem gambiarras digitais.
        </p>

        <div class="niche-chips">
          <span class="niche-chip">Escritórios Jurídicos</span>
          <span class="niche-chip">Clínicas Médicas &amp; Odonto</span>
          <span class="niche-chip">Contabilidades</span>
          <span class="niche-chip">Imobiliárias</span>
          <span class="niche-chip">PMEs em Crescimento</span>
          <span class="niche-chip">E-commerce</span>
        </div>

        <div class="cta-group">
          <a 
            href="https://wa.me/5511966464979?text=Ol%C3%A1%21+Gostaria+de+solicitar+um+diagn%C3%B3stico+tecnol%C3%B3gico+gratuito+para+minha+empresa." 
            target="_blank" 
            rel="noopener" 
            class="btn btn-primary"
            @click="trackConversion('whatsapp_click', 'hero')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.843L.057 23.428a.75.75 0 0 0 .916.916l5.585-1.453A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.516-5.188-1.415l-.372-.22-3.862 1.005 1.006-3.862-.22-.372A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            Quero um diagnóstico gratuito &rarr;
          </a>
          <a href="#how-it-works" class="btn btn-secondary">Ver como funciona &rarr;</a>
        </div>

        <p class="microcopy">
          <span class="check-icon">✓</span> Sessão consultiva de 30 min &middot; 
          <span class="check-icon">✓</span> Sem compromisso &middot; 
          <span class="check-icon">✓</span> Retorno em até 1 dia útil
        </p>

        <!-- Live Agent Telemetry Console (Differentiation Anchor) -->
        <div class="telemetry-console">
          <!-- Console Top Bar -->
          <div class="console-header">
            <div class="console-dots">
              <span class="dot dot-red"></span>
              <span class="dot dot-yellow"></span>
              <span class="dot dot-green"></span>
            </div>
            <div class="console-title">
              <span class="console-engine">cognitiva-engine://</span>workflow-telemetry
            </div>
            <div class="console-status">
              <span class="live-dot"></span>
              <span class="live-text">ENGINE ATIVA</span>
            </div>
          </div>

          <!-- Scenario Switcher Tabs -->
          <div class="console-tabs-bar">
            <div class="tabs-label">Selecione o cenário:</div>
            <div class="console-tabs">
              <button
                v-for="scenario in scenarios"
                :key="scenario.id"
                class="tab-btn"
                :class="{ 'active': selectedScenarioId === scenario.id }"
                @click="selectScenario(scenario.id)"
              >
                {{ scenario.name }}
              </button>
            </div>
          </div>

          <!-- Live Pipeline Execution Display -->
          <div class="console-body">
            <div class="pipeline-flow">
              <!-- Step 1: Input -->
              <div class="pipeline-node node-trigger">
                <div class="node-header">
                  <span class="node-step">01. GATILHO</span>
                  <span class="node-tag">{{ activeScenario.trigger.badge }}</span>
                </div>
                <div class="node-source">{{ activeScenario.trigger.source }}</div>
                <p class="node-detail">{{ activeScenario.trigger.text }}</p>
              </div>

              <!-- Connector Arrow -->
              <div class="pipeline-connector">
                <div class="connector-line"></div>
                <div class="connector-arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </div>

              <!-- Step 2: AI Processing -->
              <div class="pipeline-node node-action">
                <div class="node-header">
                  <span class="node-step">02. IA COGNITIVA</span>
                  <span class="node-tag tag-ai">{{ activeScenario.action.badge }}</span>
                </div>
                <div class="node-source text-cyan">{{ activeScenario.action.agent }}</div>
                <p class="node-detail">{{ activeScenario.action.text }}</p>
              </div>

              <!-- Connector Arrow -->
              <div class="pipeline-connector">
                <div class="connector-line"></div>
                <div class="connector-arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </div>

              <!-- Step 3: Result -->
              <div class="pipeline-node node-result">
                <div class="node-header">
                  <span class="node-step">03. EXECUÇÃO</span>
                  <span class="node-tag tag-success">{{ activeScenario.result.badge }}</span>
                </div>
                <div class="node-source text-emerald">{{ activeScenario.result.status }}</div>
                <p class="node-detail">{{ activeScenario.result.text }}</p>
              </div>
            </div>

            <!-- Console Telemetry Bar -->
            <div class="console-telemetry-bar">
              <div class="telemetry-item">
                <span class="tel-label">LATÊNCIA:</span>
                <span class="tel-val text-cyan">{{ activeScenario.metrics.latency }}</span>
              </div>
              <div class="telemetry-item">
                <span class="tel-label">CUSTO OPERACIONAL:</span>
                <span class="tel-val text-emerald">{{ activeScenario.metrics.cost }}</span>
              </div>
              <div class="telemetry-item">
                <span class="tel-label">INTERVENÇÃO MANUAL:</span>
                <span class="tel-val">0 min (100% Autônomo)</span>
              </div>
              <div class="telemetry-item">
                <span class="tel-label">STATUS PROTOCOLO:</span>
                <span class="tel-val text-emerald">{{ activeScenario.metrics.status }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 92vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: calc(var(--spacing-xl) + 2rem) 0 var(--spacing-xl);
  background: var(--bg-primary);
}

/* Precision grid background */
.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 54px 54px;
  mask-image: radial-gradient(ellipse 70% 60% at 50% 30%, black 20%, transparent 80%);
  pointer-events: none;
}

.ambient-glow {
  position: absolute;
  top: -15%;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 450px;
  background: radial-gradient(ellipse, rgba(37, 99, 235, 0.14) 0%, rgba(14, 165, 233, 0.05) 45%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

/* Content */
.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 2;
  position: relative;
  width: 100%;
}

.hero-content.visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-center {
  text-align: center;
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
}

/* Badge */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-family: var(--font-display);
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: #38bdf8;
  background: rgba(37, 99, 235, 0.1);
  border: 1px solid rgba(37, 99, 235, 0.25);
  padding: 0.38rem 1rem;
  border-radius: 100px;
  margin-bottom: var(--spacing-lg);
}

.badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #38bdf8;
  box-shadow: 0 0 8px #38bdf8;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.8); }
}

/* Title */
.hero-title {
  font-size: clamp(2.3rem, 5vw, 3.7rem);
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: var(--spacing-md);
  color: #ffffff;
  letter-spacing: -0.03em;
  max-width: 860px;
  margin-left: auto;
  margin-right: auto;
}

.highlight {
  background: linear-gradient(135deg, #60a5fa 0%, #38bdf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Description */
.description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.75;
  max-width: 700px;
  margin: 0 auto var(--spacing-lg);
}

.description strong {
  color: var(--text-primary);
  font-weight: 600;
}

/* Niche chips */
.niche-chips {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: var(--spacing-xl);
}

.niche-chip {
  display: inline-flex;
  align-items: center;
  font-size: 0.82rem;
  font-weight: 500;
  color: #cbd5e1;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-subtle);
  padding: 0.35rem 0.85rem;
  border-radius: 100px;
  transition: all var(--transition-fast);
}

.niche-chip:hover {
  border-color: var(--border-accent);
  color: #ffffff;
  background: rgba(37, 99, 235, 0.08);
}

/* CTA */
.cta-group {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  margin-bottom: var(--spacing-md);
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.85rem 1.85rem;
  border-radius: 0.65rem;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.95rem;
  text-align: center;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.btn-primary {
  background: var(--accent-primary);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.35);
}

.btn-primary:hover {
  background: #1d4ed8;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(37, 99, 235, 0.45);
  color: #ffffff;
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-subtle);
  color: var(--text-primary);
  backdrop-filter: blur(8px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: var(--border-medium);
  transform: translateY(-2px);
}

/* Microcopy */
.microcopy {
  font-size: 0.84rem;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin: 0 auto var(--spacing-xl);
}

.check-icon {
  color: var(--accent-emerald);
  font-weight: 700;
}

/* ==========================================================================
   TELEMETRY CONSOLE (Differentiation Anchor)
   ========================================================================== */
.telemetry-console {
  background: #0c101a;
  border: 1px solid var(--border-medium);
  border-top: 1px solid rgba(56, 189, 248, 0.4);
  border-radius: 1rem;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(37, 99, 235, 0.12);
  text-align: left;
  overflow: hidden;
  margin-top: 1.5rem;
  transition: all var(--transition-normal);
}

.telemetry-console:hover {
  border-color: rgba(56, 189, 248, 0.4);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(37, 99, 235, 0.18);
}

/* Console Header */
.console-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.25rem;
  background: rgba(16, 21, 34, 0.85);
  border-bottom: 1px solid var(--border-subtle);
}

.console-dots {
  display: flex;
  gap: 6px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.dot-red { background: #ef4444; opacity: 0.8; }
.dot-yellow { background: #f59e0b; opacity: 0.8; }
.dot-green { background: #10b981; opacity: 0.8; }

.console-title {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.78rem;
  color: #94a3b8;
  letter-spacing: 0.02em;
}

.console-engine {
  color: #38bdf8;
}

.console-status {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.72rem;
  color: #10b981;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.25);
  padding: 0.2rem 0.55rem;
  border-radius: 100px;
}

.live-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 6px #10b981;
  animation: pulse 1.8s infinite;
}

/* Tabs */
.console-tabs-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.25rem;
  background: rgba(10, 13, 20, 0.5);
  border-bottom: 1px solid var(--border-subtle);
  flex-wrap: wrap;
  gap: 0.75rem;
}

.tabs-label {
  font-family: var(--font-display);
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #64748b;
}

.console-tabs {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tab-btn {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-subtle);
  color: #94a3b8;
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.35rem 0.85rem;
  border-radius: 0.45rem;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.tab-btn:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.06);
  border-color: var(--border-medium);
}

.tab-btn.active {
  color: #38bdf8;
  background: rgba(37, 99, 235, 0.15);
  border-color: rgba(56, 189, 248, 0.4);
  box-shadow: 0 0 12px rgba(37, 99, 235, 0.25);
}

/* Console Body & Pipeline */
.console-body {
  padding: 1.5rem 1.25rem;
}

.pipeline-flow {
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  gap: 0.75rem;
  align-items: stretch;
  margin-bottom: 1.25rem;
}

.pipeline-node {
  background: rgba(16, 21, 34, 0.7);
  border: 1px solid var(--border-subtle);
  border-radius: 0.65rem;
  padding: 1.15rem 1rem;
  display: flex;
  flex-direction: column;
  transition: all var(--transition-normal);
}

.pipeline-node:hover {
  border-color: var(--border-medium);
  background: rgba(16, 21, 34, 0.95);
}

.node-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  gap: 0.5rem;
}

.node-step {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #64748b;
}

.node-tag {
  font-size: 0.68rem;
  font-weight: 600;
  padding: 0.15rem 0.45rem;
  border-radius: 0.3rem;
  background: rgba(255, 255, 255, 0.05);
  color: #cbd5e1;
  white-space: nowrap;
}

.tag-ai {
  background: rgba(56, 189, 248, 0.12);
  color: #38bdf8;
  border: 1px solid rgba(56, 189, 248, 0.25);
}

.tag-success {
  background: rgba(16, 185, 129, 0.12);
  color: #10b981;
  border: 1px solid rgba(16, 185, 129, 0.25);
}

.node-source {
  font-family: var(--font-display);
  font-size: 0.88rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.4rem;
}

.text-cyan {
  color: #38bdf8 !important;
}

.text-emerald {
  color: #10b981 !important;
}

.node-detail {
  font-size: 0.82rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin: 0;
}

/* Connector */
.pipeline-connector {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #38bdf8;
  opacity: 0.6;
}

/* Telemetry Bar */
.console-telemetry-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(10, 13, 20, 0.8);
  border: 1px solid var(--border-subtle);
  border-radius: 0.5rem;
  padding: 0.65rem 1rem;
  flex-wrap: wrap;
  gap: 0.75rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.72rem;
}

.telemetry-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.tel-label {
  color: #64748b;
  font-weight: 600;
}

.tel-val {
  color: #e2e8f0;
  font-weight: 700;
}

/* Media Queries */
@media (max-width: 992px) {
  .pipeline-flow {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .pipeline-connector {
    transform: rotate(90deg);
    padding: 0.25rem 0;
  }

  .console-telemetry-bar {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.4rem;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.1rem;
  }

  .cta-group {
    flex-direction: column;
    width: 100%;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }

  .microcopy {
    flex-direction: column;
    gap: 0.35rem;
  }

  .console-tabs-bar {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>

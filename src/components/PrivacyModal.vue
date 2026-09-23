<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  initialTab: {
    type: String,
    default: 'privacy' // 'privacy' or 'terms'
  }
})

const emit = defineEmits(['close'])

const activeTab = ref(props.initialTab)

watch(() => props.initialTab, (newVal) => {
  activeTab.value = newVal
})

const closeModal = () => {
  emit('close')
}

const handleKeyDown = (e) => {
  if (e.key === 'Escape' && props.isOpen) {
    closeModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <Teleport to="body">
    <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
      <div class="modal-container" role="dialog" aria-modal="true">
        <!-- Header -->
        <div class="modal-header">
          <div class="tabs">
            <button 
              class="tab-btn" 
              :class="{ active: activeTab === 'privacy' }"
              @click="activeTab = 'privacy'"
            >
              Política de Privacidade
            </button>
            <button 
              class="tab-btn" 
              :class="{ active: activeTab === 'terms' }"
              @click="activeTab = 'terms'"
            >
              Termos de Uso
            </button>
          </div>
          <button class="close-btn" @click="closeModal" aria-label="Fechar modal">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <!-- Body -->
        <div class="modal-body">
          <!-- Privacy Content -->
          <div v-if="activeTab === 'privacy'" class="content-section">
            <h2>Política de Privacidade & Proteção de Dados (LGPD)</h2>
            <p class="effective-date">Última atualização: Setembro de 2026</p>

            <p>
              A <strong>CognitivaTech Consultoria em Tecnologia da Informação</strong> ("CognitivaTech") valoriza a sua privacidade e está comprometida com a transparência e a segurança no tratamento dos seus dados pessoais, em estrita conformidade com a <strong>Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD)</strong>.
            </p>

            <h3>1. Coleta e Finalidade dos Dados</h3>
            <p>Ao preencher o nosso formulário de contato ou solicitar um diagnóstico gratuito, coletamos:</p>
            <ul>
              <li><strong>Nome completo:</strong> para identificar você em nosso atendimento.</li>
              <li><strong>E-mail corporativo/pessoal:</strong> para envio da proposta, diagnóstico ou retorno do contato.</li>
              <li><strong>Telefone / WhatsApp:</strong> para agendamento do diagnóstico e comunicação direta.</li>
              <li><strong>Segmento e Desafio Operacional:</strong> para contextualizar tecnicamente a solução recomendada.</li>
            </ul>
            <p>
              <strong>Base Legal:</strong> O tratamento é fundamentado no Artigo 7º, incisos V e IX da LGPD (execução de procedimentos preliminares relacionados a contrato a pedido do titular e legítimo interesse).
            </p>

            <h3>2. Não Compartilhamento de Dados</h3>
            <p>
              A CognitivaTech <strong>não vende, não aluga e não compartilha</strong> seus dados pessoais com terceiros para fins publicitários ou comerciais. O acesso aos dados é restrito aos especialistas técnicos responsáveis pelo seu atendimento.
            </p>

            <h3>3. Armazenamento e Segurança</h3>
            <p>
              Adotamos práticas modernas de segurança da informação, incluindo criptografia em trânsito (HTTPS/SSL), armazenamento em servidores seguros em nuvem e políticas rígidas de controle de acesso.
            </p>

            <h3>4. Seus Direitos como Titular</h3>
            <p>Conforme o Artigo 18 da LGPD, você possui o direito de:</p>
            <ul>
              <li>Confirmar a existência de tratamento e acessar seus dados;</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
              <li>Solicitar a eliminação dos seus dados pessoais tratados com consentimento;</li>
              <li>Revogar seu consentimento a qualquer momento.</li>
            </ul>
            <p>
              Para exercer qualquer um dos seus direitos, basta entrar em contato com o nosso Encarregado de Dados (DPO) através do e-mail: <a href="mailto:cognitivatech4@gmail.com">cognitivatech4@gmail.com</a>.
            </p>
          </div>

          <!-- Terms Content -->
          <div v-if="activeTab === 'terms'" class="content-section">
            <h2>Termos de Uso</h2>
            <p class="effective-date">Última atualização: Setembro de 2026</p>

            <p>
              Ao navegar no website da <strong>CognitivaTech</strong> e utilizar nossos canais de contato, você concorda com os seguintes termos:
            </p>

            <h3>1. Propriedade Intelectual</h3>
            <p>
              Todo o conteúdo deste site (textos, códigos, marcas, layout e arquitetura) é de titularidade da CognitivaTech ou licenciado a ela, sendo protegido pela legislação de direitos autorais e propriedade industrial.
            </p>

            <h3>2. Diagnóstico e Consultoria Preliminar</h3>
            <p>
              A oferta de diagnóstico gratuito consiste em uma sessão consultiva preliminar para análise de viabilidade técnica. A contratação formal de desenvolvimento de software, automações ou infraestrutura é regida por contrato de prestação de serviços específico (SOW/Contrato B2B), firmado entre as partes.
            </p>

            <h3>3. Limitação de Responsabilidade</h3>
            <p>
              Empregamos nossos melhores esforços para manter as informações sempre atualizadas e precisas. No entanto, não nos responsabilizamos por indisponibilidades temporárias decorrentes de fatores externos de telecomunicações ou manutenção técnica.
            </p>

            <h3>4. Foro Aplicável</h3>
            <p>
              Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o Foro da Comarca de São Paulo/SP para dirimir eventuais controvérsias.
            </p>
          </div>
        </div>

        <!-- Footer -->
        <div class="modal-footer">
          <button class="btn-primary" @click="closeModal">Entendido</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(10, 13, 20, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: 1.5rem;
  animation: fadeIn 0.2s ease-out;
}

.modal-container {
  background: #101522;
  border: 1px solid var(--border-medium);
  border-radius: 1rem;
  max-width: 680px;
  width: 100%;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
  overflow: hidden;
  animation: scaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes scaleUp {
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: scale(1); }
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.75rem;
  border-bottom: 1px solid var(--border-subtle);
  background: #0d111c;
}

.tabs {
  display: flex;
  gap: 0.5rem;
}

.tab-btn {
  background: none;
  border: none;
  font-family: var(--font-display);
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--text-secondary);
  padding: 0.5rem 0.85rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.tab-btn:hover {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.04);
}

.tab-btn.active {
  color: #38bdf8;
  background: rgba(37, 99, 235, 0.15);
  border: 1px solid rgba(37, 99, 235, 0.3);
}

.close-btn {
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 0.4rem;
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);
}

.close-btn:hover {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.08);
}

.modal-body {
  padding: 1.75rem;
  overflow-y: auto;
  color: var(--text-secondary);
  font-size: 0.93rem;
  line-height: 1.7;
}

.content-section h2 {
  font-size: 1.4rem;
  margin-bottom: 0.35rem;
  color: var(--text-primary);
}

.effective-date {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
}

.content-section h3 {
  font-size: 1.05rem;
  color: #e2e8f0;
  margin-top: 1.25rem;
  margin-bottom: 0.4rem;
}

.content-section ul {
  padding-left: 1.25rem;
  margin-bottom: 1rem;
}

.content-section li {
  margin-bottom: 0.35rem;
}

.content-section a {
  color: var(--accent-secondary);
  text-decoration: underline;
}

.modal-footer {
  padding: 1rem 1.75rem;
  border-top: 1px solid var(--border-subtle);
  background: #0d111c;
  display: flex;
  justify-content: flex-end;
}

.btn-primary {
  background: var(--accent-primary);
  color: #ffffff;
  border: none;
  padding: 0.55rem 1.4rem;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background var(--transition-fast);
}

.btn-primary:hover {
  background: #1d4ed8;
}
</style>

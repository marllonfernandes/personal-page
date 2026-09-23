<script setup>
import { ref } from 'vue'
import { trackConversion } from '../utils/analytics'

const faqs = [
  {
    question: 'Quanto custa um sistema sob medida ou um agente de IA?',
    answer: 'Trabalhamos com o modelo de <strong>escopo fechado e custo fixo</strong>. Você não recebe faturas surpresa por horas abertas. Durante a sessão de diagnóstico gratuita de 30 minutos, mapeamos exatamente a sua necessidade e apresentamos uma proposta transparente com cronograma, marcos de entrega e valor final acordado.'
  },
  {
    question: 'Minha empresa é de pequeno porte. A automação com IA vale a pena?',
    answer: 'Com certeza. A maioria dos nossos clientes são pequenos e médios negócios (escritórios com 3 a 20 profissionais, clínicas e prestadores de serviços). Se você ou sua equipe gastam mais de <strong>10 horas por semana</strong> copiando dados entre planilhas, respondendo mensagens repetitivas no WhatsApp ou controlando prazos manualmente, a automação costuma se pagar logo no primeiro mês de operação.'
  },
  {
    question: 'Vou precisar abandonar ou trocar os sistemas e ERPs que já uso?',
    answer: '<strong>Não.</strong> Nossos sistemas e agentes de IA são desenvolvidos para se <strong>integrarem à sua estrutura atual</strong> (ERPs como TOTVS, Bling, Tiny, prontuários, Google Sheets, bancos de dados legados e WhatsApp). Criamos pontes seguras via APIs e webhooks para que sua equipe continue operando sem o trauma de uma migração forçada.'
  },
  {
    question: 'Qual é o prazo típico para ver a solução funcionando na prática?',
    answer: 'Agentes de atendimento, triagem inteligente e automações pontuais de rotinas entram em produção em <strong>1 a 2 semanas</strong>. Sistemas gerenciais completos e plataformas web sob medida são entregues em ciclos incrementais de <strong>3 a 6 semanas</strong>, com homologações semanais para você acompanhar a evolução.'
  },
  {
    question: 'Como fica a segurança dos dados e o sigilo das informações (LGPD)?',
    answer: 'Segurança e conformidade são inegociáveis. Nossos agentes operam em <strong>ambientes de nuvem privados com criptografia</strong> — os dados da sua empresa e dos seus clientes <strong>nunca são compartilhados ou utilizados para treinar modelos de IA públicos</strong>. Além da conformidade total com a LGPD, assinamos <strong>Termo de Confidencialidade e Sigilo (NDA)</strong> antes de iniciar qualquer projeto.'
  },
  {
    question: 'O código-fonte e a solução desenvolvida pertencem à minha empresa?',
    answer: '<strong>Sim, 100%.</strong> Ao concluir o projeto, todo o código-fonte, infraestrutura de nuvem, banco de dados e documentação técnica são transferidos integralmente para a titularidade da sua empresa. Você tem total autonomia: <strong>não cobramos royalties, não impomos taxas ocultas de manutenção e você não fica refém de contratos de aprisionamento tecnológico (vendor lock-in)</strong>.'
  },
  {
    question: 'Como vocês garantem que a IA não invente respostas ou cometa erros (alucinação)?',
    answer: 'Nossos agentes corporativos não operam como chatbots genéricos soltos na web. Implementamos arquitetura <strong>RAG (Retrieval-Augmented Generation)</strong> com bases de conhecimento restritas aos documentos e regras da sua empresa, <strong>guardrails determinísticos</strong> que validam dados antes de qualquer resposta e mecanismos de <strong>aprovação humana (human-in-the-loop)</strong> para qualquer ação crítica ou sensível.'
  }
]

const openIndex = ref(0) // Primeiro item aberto por padrão para guiar a leitura

const toggle = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section class="faq-section" id="faq">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Perguntas Frequentes &amp; Garantias</span>
        <h2 class="section-title">Respostas diretas, sem letras miúdas</h2>
        <p class="section-subtitle">
          Tudo o que você precisa saber sobre prazos, custos, segurança e como a tecnologia é implantada no seu negócio.
        </p>
      </div>

      <div class="faq-accordion">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="faq-item"
          :class="{ 'is-open': openIndex === index }"
        >
          <button
            class="faq-question"
            @click="toggle(index)"
            :aria-expanded="openIndex === index"
          >
            <span class="question-text">{{ faq.question }}</span>
            <span class="faq-chevron">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </button>

          <div class="faq-answer-wrapper">
            <div class="faq-answer">
              <p v-html="faq.answer"></p>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Help Callout -->
      <div class="faq-help-box">
        <p class="help-text">
          Tem alguma dúvida técnica específica sobre a operação da sua empresa?
        </p>
        <a
          href="https://wa.me/5511966464979?text=Ol%C3%A1%21+Gostaria+de+tirar+uma+d%C3%BAvida+t%C3%A9cnica+sobre+o+meu+projeto."
          target="_blank"
          rel="noopener"
          class="help-link"
          @click="trackConversion('whatsapp_click', 'faq_help')"
        >
          Falar diretamente com o engenheiro sênior no WhatsApp &rarr;
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-section {
  padding: var(--spacing-xl) 0;
  background-color: var(--bg-primary);
  position: relative;
  border-top: 1px solid var(--border-subtle);
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
  margin: var(--spacing-sm) auto 0;
  line-height: 1.7;
}

/* Accordion */
.faq-accordion {
  max-width: 820px;
  margin: 0 auto var(--spacing-xl);
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.faq-item {
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  border-radius: 0.75rem;
  overflow: hidden;
  transition: all var(--transition-normal);
}

.faq-item:hover {
  border-color: var(--border-medium);
}

.faq-item.is-open {
  border-color: var(--border-accent);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
}

.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  gap: 1rem;
}

.question-text {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.4;
  transition: color var(--transition-fast);
}

.faq-item.is-open .question-text {
  color: #38bdf8;
}

.faq-chevron {
  flex-shrink: 0;
  color: var(--text-muted);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), color var(--transition-fast);
}

.faq-item.is-open .faq-chevron {
  transform: rotate(180deg);
  color: #38bdf8;
}

/* Answer */
.faq-answer-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.faq-item.is-open .faq-answer-wrapper {
  grid-template-rows: 1fr;
}

.faq-answer {
  overflow: hidden;
}

.faq-answer p {
  padding: 0 1.5rem 1.35rem;
  font-size: 0.93rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0;
}

.faq-answer :deep(strong) {
  color: #ffffff;
  font-weight: 600;
}

/* Help Box */
.faq-help-box {
  max-width: 820px;
  margin: 0 auto;
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px dashed var(--border-subtle);
  border-radius: 0.75rem;
}

.help-text {
  font-size: 0.92rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
}

.help-link {
  color: #38bdf8;
  font-family: var(--font-display);
  font-size: 0.92rem;
  font-weight: 600;
  transition: color var(--transition-fast);
}

.help-link:hover {
  color: #7dd3fc;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .faq-question {
    padding: 1.1rem 1.25rem;
  }

  .question-text {
    font-size: 0.98rem;
  }

  .faq-answer p {
    padding: 0 1.25rem 1.25rem;
    font-size: 0.9rem;
  }
}
</style>

<script setup>
import { ref, computed, watch } from 'vue';

defineEmits(['open-privacy']);

const form = ref({
  name: '',
  email: '',
  phone: '',
  segment: '',
  challenge: ''
});

const isSubmitting = ref(false);
const submitSuccess = ref(false);
const submitError = ref('');

// Phone Masking
const applyPhoneMask = (value) => {
  if (!value) return '';
  value = value.replace(/\D/g, '');
  if (value.length > 11) value = value.slice(0, 11);
  
  if (value.length <= 2) return value;
  if (value.length <= 6) return `(${value.slice(0, 2)}) ${value.slice(2)}`;
  if (value.length <= 10) return `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
  return `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
};

watch(() => form.value.phone, (newVal) => {
  const maskedValue = applyPhoneMask(newVal);
  if (maskedValue !== newVal) {
    form.value.phone = maskedValue;
  }
});

// Validation logic
const isEmailValid = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(form.value.email);
});

const isPhoneValid = computed(() => {
  const digits = form.value.phone.replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 11;
});

const isNameValid = computed(() => form.value.name.trim().length >= 3);

const isFormValid = computed(() => {
  return isNameValid.value && isEmailValid.value && isPhoneValid.value;
});

const submitForm = async () => {
  if (!isFormValid.value) return;
  
  isSubmitting.value = true;
  submitError.value = '';
  
  try {
    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.value)
    });
    
    if (!response.ok) {
      throw new Error('Erro ao enviar dados. Tente novamente.');
    }
    
    submitSuccess.value = true;

    // Disparo de evento de conversão para Google Ads & GTM
    if (typeof window !== 'undefined') {
      if (window.gtag) {
        window.gtag('event', 'generate_lead', {
          event_category: 'form',
          event_label: form.value.segment || 'geral'
        });
      }
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'lead_form_submitted',
          leadSegment: form.value.segment,
          leadChallenge: form.value.challenge
        });
      }
    }

    form.value = { name: '', email: '', phone: '', segment: '', challenge: '' };
    
    setTimeout(() => {
      submitSuccess.value = false;
    }, 5000);
    
  } catch (err) {
    submitError.value = err.message;
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <section class="contact-section" id="contact">
    <div class="container">
      <div class="contact-card">
        <span class="section-tag">Contato &amp; Diagnóstico</span>

        <h2 class="contact-title">
          Vamos conversar sobre<br />
          <span class="highlight">o seu projeto?</span>
        </h2>

        <p class="contact-text">
          Seja para entender como a automação com IA pode transformar sua operação ou para desenvolver uma solução sob medida — nossa equipe técnica está disponível para uma conversa sem compromisso.
        </p>

        <form class="lead-form" @submit.prevent="submitForm" v-if="!submitSuccess">
          <div class="form-group">
            <input type="text" id="name" v-model="form.name" required placeholder="Seu nome completo" class="form-input" :class="{ 'input-invalid': form.name && !isNameValid }">
            <span v-if="form.name && !isNameValid" class="field-error">Nome muito curto</span>
          </div>
          <div class="form-group">
            <input type="email" id="email" v-model="form.email" required placeholder="Seu e-mail profissional" class="form-input" :class="{ 'input-invalid': form.email && !isEmailValid }">
            <span v-if="form.email && !isEmailValid" class="field-error">E-mail inválido</span>
          </div>
          <div class="form-group">
            <input type="tel" id="phone" v-model="form.phone" required placeholder="Seu WhatsApp com DDD (11) 99999-9999" class="form-input" :class="{ 'input-invalid': form.phone && !isPhoneValid }">
            <span v-if="form.phone && !isPhoneValid" class="field-error">Telefone inválido</span>
          </div>
          <div class="form-group">
            <select id="segment" v-model="form.segment" class="form-input form-select">
              <option value="" disabled>Qual é o seu segmento? (opcional)</option>
              <option value="juridico">Escritório Jurídico / Advocacia</option>
              <option value="clinica_medica">Clínica Médica / Odontológica</option>
              <option value="clinica_vet">Clínica Veterinária</option>
              <option value="oficina">Oficina Mecânica / Prestador de Serviço</option>
              <option value="contabilidade">Contabilidade / Financeiro</option>
              <option value="imobiliaria">Imobiliária / Corretora</option>
              <option value="pme">Pequena ou Média Empresa</option>
              <option value="ecommerce">E-commerce / Varejo</option>
              <option value="agencia">Agência Digital / Marketing</option>
              <option value="outro">Outro</option>
            </select>
          </div>
          <div class="form-group">
            <select id="challenge" v-model="form.challenge" class="form-input form-select">
              <option value="" disabled>Qual é seu maior desafio? (opcional)</option>
              <option value="planilhas">Controlo tudo em planilhas e perco tempo</option>
              <option value="site">Preciso de um sistema ou site profissional</option>
              <option value="automacao">Quero automatizar processos com IA</option>
              <option value="integracao">Meus sistemas não se integram</option>
              <option value="sistema">Preciso de um sistema personalizado sob medida</option>
              <option value="outro">Outro</option>
            </select>
          </div>
          
          <div class="form-actions">
            <button type="submit" class="btn btn-submit" :disabled="isSubmitting || !isFormValid">
              <span v-if="isSubmitting">Enviando solicitação...</span>
              <span v-else>Solicitar Diagnóstico Gratuito &rarr;</span>
            </button>
            <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Consultoria+CognitivaTech&details=Reuni%C3%A3o+de+diagn%C3%B3stico+com+a+CognitivaTech.&add=cognitivatech4@gmail.com" target="_blank" rel="noopener" class="btn btn-calendar">
              <img src="/google_calendar.png" alt="Google Calendar" width="18" height="18" />
              Agendar direto no Google Calendar
            </a>
          </div>

          <p class="privacy-note">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            <span>Seus dados estão protegidos pela LGPD. Não enviamos spam. 
              <button type="button" class="privacy-link-btn" @click="$emit('open-privacy')">Ver Política de Privacidade</button>
            </span>
          </p>
          
          <p v-if="submitError" class="error-msg">{{ submitError }}</p>
        </form>
        
        <div v-else class="success-msg">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent-emerald)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <h3>Mensagem recebida com sucesso!</h3>
          <p>Nossa equipe entrará em contato em até 1 dia útil pelo WhatsApp informado.</p>
        </div>

        <div class="contact-divider">ou converse diretamente</div>

        <div class="contact-actions">
          <a href="https://wa.me/5511966464979?text=Ol%C3%A1%21+Vim+pelo+site+da+CognitivaTech+e+gostaria+de+falar+sobre+um+projeto." target="_blank" rel="noopener" class="btn btn-whatsapp">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.843L.057 23.428a.75.75 0 0 0 .916.916l5.585-1.453A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.516-5.188-1.415l-.372-.22-3.862 1.005 1.006-3.862-.22-.372A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Chamar no WhatsApp
          </a>
        </div>

        <div class="contact-info">
          <a href="mailto:cognitivatech4@gmail.com" class="info-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            cognitivatech4@gmail.com
          </a>
          <span class="separator">&middot;</span>
          <a href="tel:+5511966464979" class="info-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            (11) 96646-4979
          </a>
        </div>
        
        <p class="remote-notice">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
          </svg>
          Atendimento remoto para todo o Brasil. Sem necessidade de reuniões presenciais burocráticas.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  position: relative;
  padding: var(--spacing-xl) 0;
  background-color: var(--bg-primary);
  overflow: hidden;
}

/* Card */
.contact-card {
  position: relative;
  z-index: 1;
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  border-radius: 1.25rem;
  padding: 3.5rem 2.5rem;
}

.section-tag {
  display: inline-block;
  font-family: var(--font-display);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #38bdf8;
  background: rgba(37, 99, 235, 0.1);
  border: 1px solid rgba(37, 99, 235, 0.25);
  padding: 0.35rem 1rem;
  border-radius: 100px;
  margin-bottom: 1.25rem;
}

.contact-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 800;
  line-height: 1.2;
  color: #ffffff;
  margin-bottom: 1rem;
}

.highlight {
  background: linear-gradient(135deg, #60a5fa 0%, #38bdf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contact-text {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 580px;
  margin: 0 auto 2.25rem;
}

/* Form Styles */
.lead-form {
  max-width: 480px;
  margin: 0 auto 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.form-input {
  width: 100%;
  padding: 0.9rem 1.15rem;
  border-radius: 0.65rem;
  border: 1px solid var(--border-subtle);
  background: rgba(10, 13, 20, 0.6);
  color: #ffffff;
  font-family: var(--font-body);
  font-size: 0.95rem;
  transition: all var(--transition-fast);
}

.form-input:focus {
  outline: none;
  border-color: var(--accent-primary);
  background: rgba(10, 13, 20, 0.85);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
}

.form-input::placeholder {
  color: #64748b;
}

.form-select {
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1.1rem center;
  cursor: pointer;
}

.form-select option {
  background: #101522;
  color: #ffffff;
}

.form-actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.btn-submit {
  width: 100%;
  justify-content: center;
  background: var(--accent-primary);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.35);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.95rem;
  padding: 0.85rem;
  border-radius: 0.65rem;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.btn-submit:hover:not(:disabled) {
  background: #1d4ed8;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(37, 99, 235, 0.45);
}

.btn-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.btn-calendar {
  width: 100%;
  justify-content: center;
  background: rgba(255, 255, 255, 0.03);
  color: var(--text-primary);
  border: 1px solid var(--border-subtle);
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.88rem;
  padding: 0.75rem;
  border-radius: 0.65rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all var(--transition-fast);
}

.btn-calendar:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: var(--border-medium);
}

.privacy-note {
  font-size: 0.78rem;
  color: var(--text-muted);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  margin-top: 0.65rem;
  margin-bottom: 0;
  text-align: center;
  line-height: 1.4;
}

.privacy-link-btn {
  background: none;
  border: none;
  color: #38bdf8;
  font-size: 0.78rem;
  text-decoration: underline;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
}

.privacy-link-btn:hover {
  color: #7dd3fc;
}

.error-msg {
  color: #ef4444;
  font-size: 0.85rem;
  margin-top: 0.5rem;
}

.input-invalid {
  border-color: #ef4444 !important;
}

.field-error {
  color: #ef4444;
  font-size: 0.75rem;
  text-align: left;
  display: block;
  margin-top: 0.2rem;
  padding-left: 0.5rem;
}

.success-msg {
  padding: 2rem;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.25);
  border-radius: 1rem;
  margin: 0 auto 1.5rem;
  max-width: 480px;
}

.success-msg h3 {
  color: #ffffff;
  margin: 1rem 0 0.5rem;
  font-family: var(--font-display);
}

.success-msg p {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.contact-divider {
  display: flex;
  align-items: center;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 1.25rem auto 1.5rem;
  max-width: 480px;
}

.contact-divider::before,
.contact-divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid var(--border-subtle);
}

.contact-divider::before {
  margin-right: 1rem;
}

.contact-divider::after {
  margin-left: 1rem;
}

.contact-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1.75rem;
}

.btn-whatsapp {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.75rem 1.6rem;
  border-radius: 0.65rem;
  font-family: var(--font-display);
  font-size: 0.9rem;
  font-weight: 600;
  background: rgba(37, 211, 102, 0.1);
  border: 1px solid rgba(37, 211, 102, 0.3);
  color: #4ade80;
  transition: all var(--transition-fast);
}

.btn-whatsapp:hover {
  background: rgba(37, 211, 102, 0.18);
  border-color: rgba(37, 211, 102, 0.5);
  transform: translateY(-2px);
  color: #4ade80;
}

/* Info row */
.contact-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.info-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  color: var(--text-secondary);
  transition: color var(--transition-fast);
}

.info-link:hover {
  color: var(--accent-secondary);
}

.separator {
  color: var(--text-muted);
}

.remote-notice {
  margin-top: 1.5rem;
  font-size: 0.82rem;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.02);
  padding: 0.5rem 1.25rem;
  border-radius: 100px;
  border: 1px dashed var(--border-subtle);
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 768px) {
  .contact-card {
    padding: 2.5rem 1.25rem;
  }

  .btn-whatsapp {
    width: 100%;
    justify-content: center;
  }
}
</style>

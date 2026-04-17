<template>
  <section class="contact-section" id="contact">
    <div class="bg-glow bg-glow--left"></div>
    <div class="bg-glow bg-glow--right"></div>

    <div class="container">
      <div class="contact-card">
        <span class="section-tag">Contato</span>

        <h2 class="contact-title">
          Vamos conversar sobre<br />
          <span class="highlight">o seu negócio?</span>
        </h2>

        <p class="contact-text">
          Seja para tirar uma dúvida, entender como a tecnologia pode impulsionar sua empresa
          ou iniciar um projeto juntos — estou disponível para uma conversa sem compromisso.
        </p>

        <div class="contact-actions">
          <a href="mailto:marllon.mfb@gmail.com" class="btn btn-email">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Enviar um e-mail
          </a>

          <a href="https://wa.me/5511966464979" target="_blank" rel="noopener" class="btn btn-whatsapp">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path
                d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.843L.057 23.428a.75.75 0 0 0 .916.916l5.585-1.453A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.516-5.188-1.415l-.372-.22-3.862 1.005 1.006-3.862-.22-.372A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Chamar no WhatsApp
          </a>
        </div>

        <div class="contact-info">
          <a href="mailto:marllon.mfb@gmail.com" class="info-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            marllon.mfb@gmail.com
          </a>
          <span class="separator">·</span>
          <a href="tel:+5511966464979" class="info-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            (11) 96646-4979
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  position: relative;
  padding: var(--spacing-xl) 0;
  background-color: var(--bg-secondary);
  overflow: hidden;
}

/* Ambient glows */
.bg-glow {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  z-index: 0;
}

.bg-glow--left {
  background: radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, transparent 70%);
  top: -100px;
  left: -150px;
}

.bg-glow--right {
  background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
  bottom: -100px;
  right: -150px;
}

/* Card */
.contact-card {
  position: relative;
  z-index: 1;
  max-width: 780px;
  margin: 0 auto;
  text-align: center;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 28px;
  padding: 4rem 3rem;
}

.section-tag {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-primary);
  background: rgba(124, 58, 237, 0.1);
  border: 1px solid rgba(124, 58, 237, 0.2);
  padding: 0.3rem 1rem;
  border-radius: 100px;
  margin-bottom: 1.5rem;
}

.contact-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.2;
  color: #fff;
  margin-bottom: 1.25rem;
}

.highlight {
  background: var(--gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contact-text {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.75;
  max-width: 560px;
  margin: 0 auto 2.5rem;
}

/* Buttons */
.contact-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 2rem;
  border-radius: 2rem;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease, opacity 0.25s ease;
  text-decoration: none;
}

.btn-email {
  background: var(--gradient-text);
  color: #fff;
  box-shadow: 0 4px 20px rgba(124, 58, 237, 0.35);
}

.btn-email:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 28px rgba(124, 58, 237, 0.5);
  color: #fff;
}

.btn-whatsapp {
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
}

.btn-whatsapp:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.28);
  transform: translateY(-3px);
  color: #fff;
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
  transition: color 0.2s ease;
}

.info-link:hover {
  color: var(--accent-primary);
}

.separator {
  color: var(--text-secondary);
  opacity: 0.4;
}

@media (max-width: 768px) {
  .contact-card {
    padding: 2.5rem 1.5rem;
  }

  .contact-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    justify-content: center;
  }
}
</style>

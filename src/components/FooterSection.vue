<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <h3>CognitivaTech</h3>
          <p>Consultoria de TI &amp; Engenharia de Software</p>
          <div class="contact-info">
            <a href="mailto:cognitivatech4@gmail.com">cognitivatech4@gmail.com</a>
            <span>•</span>
            <a href="tel:+5511966464979">(11) 96646-4979</a>
          </div>
          <p class="remote-footer-text">Atendimento 100% remoto — atendemos empresas em todo o Brasil 📍.</p>
        </div>
      </div>

      <!-- GCP Certification badge -->
      <div class="cert-row">
        <span class="cert-badge">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/960px-Google_Cloud_logo.svg.png"
            alt="Google Cloud" class="cert-logo" />
          <span class="cert-label">Certified</span>
          <span class="cert-check">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
        </span>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} CognitivaTech. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--bg-secondary);
  padding: var(--spacing-xl) 0 var(--spacing-md);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
}

.footer-logo h3 {
  font-size: 1.5rem;
  background: var(--gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.2rem;
}

.footer-logo p {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.contact-info {
  display: flex;
  gap: var(--spacing-sm);
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.contact-info a {
  color: var(--text-secondary);
  transition: color var(--transition-fast);
}

.contact-info a:hover {
  color: var(--accent-primary);
}

.remote-footer-text {
  font-size: 0.85rem !important;
  color: var(--text-secondary);
  opacity: 0.8;
  margin-top: 0.75rem !important;
  margin-bottom: 0 !important;
}

.footer-links {
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.footer-links a {
  font-weight: 500;
  font-size: 0.95rem;
}

.footer-links a:hover {
  text-decoration: underline;
}

/* Certification badge row */
.cert-row {
  display: flex;
  align-items: center;
  padding-bottom: var(--spacing-lg);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  margin-bottom: var(--spacing-md);
}

.cert-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.75rem 0.35rem 0.55rem;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.09);
  cursor: default;
}

.cert-logo {
  height: 14px;
  width: auto;
  display: block;
}

.cert-label {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--text-secondary);
}

.cert-check {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(52, 211, 153, 0.15);
  color: #34d399;
}

.cert-arrow {
  color: var(--text-secondary);
  opacity: 0.6;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-top: var(--spacing-md);
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.footer-bottom p {
  margin: 0;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
  }

  .cert-row {
    justify-content: center;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: var(--spacing-sm);
  }
}
</style>

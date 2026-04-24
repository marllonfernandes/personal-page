<script setup>
import { ref, onMounted } from 'vue'

const showContent = ref(false)

onMounted(() => {
  setTimeout(() => showContent.value = true, 100)
})
</script>

<template>
  <section class="hero" id="home">
    <!-- Animated background grid -->
    <div class="hero-grid"></div>
    <div class="hero-blob blob-1"></div>
    <div class="hero-blob blob-2"></div>

    <div class="container hero-content" :class="{ 'visible': showContent }">
      <!-- Main headline -->
      <div class="hero-center">
        <!-- <span class="company-tag">
          <span class="tag-dot"></span>
          Consultoria
        </span> -->

        <h1 class="hero-title">
          Planilha, WhatsApp e e-mail ainda <span class="highlight">controlam</span> seu negócio?
        </h1>

        <p class="description">
          Desenvolvemos sistemas sob medida para pequenas empresas que querem organizar a operação, reduzir retrabalho e crescer — sem depender de gambiarras digitais.
        </p>

        <div class="cta-group">
          <a href="https://wa.me/5511966464979" target="_blank" rel="noopener" class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.843L.057 23.428a.75.75 0 0 0 .916.916l5.585-1.453A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.516-5.188-1.415l-.372-.22-3.862 1.005 1.006-3.862-.22-.372A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            Quero um diagnóstico gratuito →
          </a>
          <a href="#how-it-works" class="btn btn-secondary">Ver como funciona →</a>
        </div>

        <p class="microcopy">
          Diagnóstico de 30 min &middot; Sem compromisso &middot; Respondemos em até 1 dia útil
        </p>

      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: var(--spacing-xl) 0 0;
  background: var(--gradient-bg);
}

/* Background decorations */
.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(124, 58, 237, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(124, 58, 237, 0.06) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 100%);
  pointer-events: none;
}

.hero-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  pointer-events: none;
  z-index: 0;
}

.blob-1 {
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%);
  top: -200px;
  left: -200px;
}

.blob-2 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%);
  bottom: -100px;
  right: -150px;
}

/* Content */
.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1s ease, transform 1s ease;
  z-index: 2;
  position: relative;
}

.hero-content.visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-center {
  text-align: center;
  max-width: 800px;
  padding-bottom: var(--spacing-xl);
}

/* Tag */
.company-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-primary);
  background: rgba(124, 58, 237, 0.1);
  border: 1px solid rgba(124, 58, 237, 0.2);
  padding: 0.35rem 1rem;
  border-radius: 100px;
  margin-bottom: var(--spacing-lg);
}

.tag-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent-primary);
  box-shadow: 0 0 6px rgba(124, 58, 237, 0.8);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
}

/* Title */
.hero-title {
  font-size: clamp(2.2rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: var(--spacing-md);
  color: #fff;
  letter-spacing: -0.02em;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.highlight {
  background: var(--gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Description */
.description {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.8;
  max-width: 620px;
  margin: 0 auto var(--spacing-xl);
}

.description strong {
  color: var(--text-primary);
  font-weight: 600;
}

/* CTA */
.cta-group {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  margin-bottom: var(--spacing-sm); /* Reduced margin to accommodate microcopy */
  flex-wrap: wrap;
}

/* Microcopy */
.microcopy {
  font-size: 0.85rem;
  color: var(--text-secondary);
  opacity: 0.8;
  margin-bottom: var(--spacing-xl);
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.9rem 2rem;
  border-radius: 2rem;
  font-weight: 600;
  font-size: 0.95rem;
  text-align: center;
  cursor: pointer;
  transition: all var(--transition-normal);
}

.btn-primary {
  background: var(--gradient-text);
  color: #fff;
  box-shadow: 0 4px 20px rgba(124, 58, 237, 0.35);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(124, 58, 237, 0.55);
  color: #fff;
}

.btn-secondary {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: var(--text-primary);
  backdrop-filter: blur(8px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-3px);
}

/* Founder badge */
.founder-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.55rem 1rem 0.55rem 0.7rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 100px;
  width: fit-content;
  margin: 0 auto;
}

.founder-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(124, 58, 237, 0.15);
  border: 1px solid rgba(124, 58, 237, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-primary);
  flex-shrink: 0;
}

.founder-info {
  display: flex;
  flex-direction: column;
  line-height: 1.3;
  text-align: left;
}

.founder-name {
  font-size: 0.82rem;
  font-weight: 600;
  color: #fff;
}

.founder-role {
  font-size: 0.72rem;
  color: var(--text-secondary);
}

.founder-cert {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding-left: 0.75rem;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
}

.founder-cert img {
  height: 12px;
  width: auto;
}

.founder-cert span {
  font-size: 0.7rem;
  color: var(--text-secondary);
  font-weight: 500;
}

/* Stats strip */
.stats-strip {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  background: rgba(255, 255, 255, 0.03);
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  padding: 2rem 0;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  padding: 0 3rem;
}

.stat-value {
  font-size: 2.2rem;
  font-weight: 800;
  line-height: 1;
  background: var(--gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-suffix {
  font-size: 1.5rem;
}

.stat-label {
  font-size: 0.78rem;
  color: var(--text-secondary);
  text-align: center;
  line-height: 1.4;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.08);
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .stats-strip {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 1.5rem;
    gap: 1px;
    background-color: rgba(255, 255, 255, 0.07);
  }

  .stat-item {
    padding: 1.25rem 1rem;
    background: var(--bg-primary);
  }

  .stat-divider {
    display: none;
  }

  .stat-value {
    font-size: 1.8rem;
  }

  .founder-badge {
    flex-wrap: wrap;
    justify-content: center;
    border-radius: 16px;
    padding: 0.75rem 1rem;
  }

  .founder-cert {
    border-left: none;
    padding-left: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 0.5rem;
    width: 100%;
    justify-content: center;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .cta-group {
    flex-direction: column;
    align-items: center;
  }
}
</style>

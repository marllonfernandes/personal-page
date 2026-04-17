<script setup>
import { ref, onMounted } from 'vue'

const showContent = ref(false)

onMounted(() => {
  setTimeout(() => showContent.value = true, 100)
})
</script>

<template>
  <section class="hero" id="home">
    <div class="container hero-content" :class="{ 'visible': showContent }">
      <div class="hero-text-area">
        <h2 class="greeting">Olá, eu sou</h2>
        <h1 class="name">Marllon Fernandes</h1>
        <h3 class="role">Arquiteto de Soluções &amp; Engenheiro de Software Senior</h3>

        <p class="description">
          Arquitetura e Desenvolvimento de Soluções de Ponta a Ponta. 18 anos entregando sistemas seguros e escaláveis.
          Especialista em Cloud, infraestruturas On-premise e Inteligência Artificial — combinando LLMs e Agentes de IA
          para criar produtos digitais mais inteligentes e que acompanham o crescimento do seu negócio.
        </p>

        <div class="cta-group">
          <a href="#services" class="btn btn-primary">Serviços</a>
        </div>
      </div>

      <div class="hero-visual">
        <div class="photo-wrapper">
          <div class="photo-ring ring-outer"></div>
          <div class="photo-ring ring-inner"></div>
          <div class="photo-frame">
            <img src="/personal.png" alt="Marllon Fernandes" class="profile-photo" />
          </div>
          <div class="glow-spot"></div>
        </div>
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
  padding: var(--spacing-xl) 0;
  background: var(--gradient-bg);
}

.hero-content {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: var(--spacing-xl);
  align-items: center;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1s ease, transform 1s ease;
  z-index: 2;
}

.hero-content.visible {
  opacity: 1;
  transform: translateY(0);
}

.greeting {
  font-size: 1.5rem;
  color: var(--accent-primary);
  font-weight: 500;
  margin-bottom: var(--spacing-sm);
}

.name {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: var(--spacing-sm);
  background: var(--gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.role {
  font-size: 1.4rem;
  color: var(--text-primary);
  font-weight: 600;
  margin-bottom: var(--spacing-lg);
}

.description {
  font-size: 1.1rem;
  max-width: 500px;
  margin-bottom: var(--spacing-lg);
  line-height: 1.7;
}

/* GCP certification badge */
.cert-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.5rem 1rem 0.5rem 0.65rem;
  margin-bottom: var(--spacing-xl);
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  text-decoration: none;
  transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
}

.cert-badge:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(66, 133, 244, 0.4);
  transform: translateY(-2px);
}

.cert-logo {
  flex-shrink: 0;
}

.cert-text {
  display: flex;
  flex-direction: column;
  line-height: 1.25;
}

.cert-label {
  font-size: 0.82rem;
  font-weight: 600;
  color: #fff;
}

.cert-sub {
  font-size: 0.72rem;
  color: var(--text-secondary);
}

.cert-arrow {
  flex-shrink: 0;
  color: var(--text-secondary);
  transition: color 0.25s ease;
}

.cert-badge:hover .cert-arrow {
  color: #4285F4;
}

.cta-group {
  display: flex;
  gap: var(--spacing-md);
}

.btn {
  display: inline-block;
  padding: 0.8rem 2rem;
  border-radius: 2rem;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: all var(--transition-normal);
}

.btn-primary {
  background: var(--gradient-text);
  color: #fff;
  box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(124, 58, 237, 0.5);
  color: #fff;
}

.btn-secondary {
  background: transparent;
  border: 1px solid var(--accent-primary);
  color: var(--text-primary);
}

.btn-secondary:hover {
  background: rgba(124, 58, 237, 0.1);
  transform: translateY(-2px);
}

/* ---- Photo Area ---- */
.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 480px;
}

.photo-wrapper {
  position: relative;
  width: 420px;
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.photo-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(124, 58, 237, 0.25);
  animation: spin-slow linear infinite;
}

.ring-outer {
  width: 100%;
  height: 100%;
  animation-duration: 18s;
  border-style: dashed;
  border-color: rgba(124, 58, 237, 0.18);
}

.ring-inner {
  width: 82%;
  height: 82%;
  animation-duration: 12s;
  animation-direction: reverse;
  border-color: rgba(59, 130, 246, 0.18);
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.photo-frame {
  position: relative;
  width: 72%;
  height: 72%;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid rgba(124, 58, 237, 0.45);
  box-shadow:
    0 0 0 8px rgba(124, 58, 237, 0.08),
    0 30px 70px rgba(0, 0, 0, 0.55);
  z-index: 2;
  background: var(--bg-secondary);
}

.profile-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 12%;
  display: block;
  filter: grayscale(10%);
  transition: filter 0.4s ease;
}

.photo-frame:hover .profile-photo {
  filter: grayscale(0%);
}

.glow-spot {
  position: absolute;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.22) 0%, transparent 70%);
  bottom: -40px;
  right: -40px;
  filter: blur(40px);
  pointer-events: none;
  z-index: 0;
}

@media (max-width: 1024px) {
  .photo-wrapper {
    width: 360px;
    height: 360px;
  }
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-visual {
    order: -1;
    min-height: 280px;
  }

  .photo-wrapper {
    width: 240px;
    height: 240px;
  }

  .description {
    margin: 0 auto var(--spacing-xl);
  }

  .cta-group {
    justify-content: center;
    flex-wrap: wrap;
  }

  .name {
    font-size: 2.8rem;
  }

  .role {
    font-size: 1.15rem;
  }
}
</style>

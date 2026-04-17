<script setup>
const expertise = [
  {
    title: 'Construir Aplicações Sólidas',
    description: 'Desenvolvimento de sistemas robustos, escaláveis e resilientes com boas práticas de engenharia de software e foco em qualidade.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`
  },
  {
    title: 'Migração para Microsserviços',
    description: 'Transformação de aplicações monolíticas em arquiteturas de microsserviços, garantindo desacoplamento, autonomia e facilidade de manutenção.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>`
  },
  {
    title: 'Cloud Migration (On-Premise → Cloud)',
    description: 'Projeção e execução de migrações de ambientes On Premise para nuvem pública, com foco em segurança, custo e performance.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/><polyline points="12 12 12 18"/><polyline points="9 15 12 12 15 15"/></svg>`
  },
  {
    title: 'Arquiteturas de Referência',
    description: 'Elaboração de arquiteturas de referência para evolução das plataformas, definindo padrões técnicos e guias estratégicos de longo prazo.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>`
  },
  {
    title: 'Hands-on em Projetos Estratégicos',
    description: 'Atuação direta e colaborativa em projetos estratégicos, alinhado ao time de desenvolvimento para garantir entrega com qualidade e agilidade.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
  },
  {
    title: 'Modernização de Sistemas',
    description: 'Alavancagem da modernização tecnológica de sistemas legados, adotando novas stacks, padrões de design e práticas de engenharia modernas.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`
  }
];
</script>

<template>
  <section class="expertise-section" id="expertise">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Especialidades</span>
        <h2 class="section-title">Como Posso Ajudar</h2>
        <p class="section-subtitle">
          Atuo de forma estratégica e técnica para transformar desafios complexos em soluções escaláveis e modernas.
        </p>
      </div>

      <div class="expertise-grid">
        <div
          v-for="(item, index) in expertise"
          :key="index"
          class="expertise-card"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="card-accent"></div>
          <div class="expertise-icon" v-html="item.icon"></div>
          <div class="expertise-content">
            <h3 class="expertise-title">{{ item.title }}</h3>
            <p class="expertise-description">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.expertise-section {
  padding: var(--spacing-xl) 0;
  background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
  position: relative;
  overflow: hidden;
}

.expertise-section::before {
  content: '';
  position: absolute;
  top: -150px;
  right: -150px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.06) 0%, transparent 70%);
  pointer-events: none;
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
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 580px;
  margin: var(--spacing-sm) auto 0;
  line-height: 1.7;
}

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
}

.expertise-card {
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  padding: var(--spacing-xl) var(--spacing-lg);
  display: flex;
  gap: var(--spacing-md);
  align-items: flex-start;
  cursor: default;
  overflow: hidden;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  animation: fadeInUp 0.5s ease both;
}

.expertise-card:hover {
  transform: translateY(-6px);
  border-color: rgba(124, 58, 237, 0.35);
  box-shadow: 0 12px 40px rgba(124, 58, 237, 0.12);
}

.expertise-card:hover .card-accent {
  opacity: 1;
}

.card-accent {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.05) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  border-radius: inherit;
}

.expertise-icon {
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(124, 58, 237, 0.1);
  border: 1px solid rgba(124, 58, 237, 0.2);
  border-radius: 12px;
  color: var(--accent-primary);
  transition: background 0.3s ease;
}

.expertise-card:hover .expertise-icon {
  background: rgba(124, 58, 237, 0.2);
}

.expertise-content {
  flex: 1;
}

.expertise-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 var(--spacing-sm);
  line-height: 1.4;
}

.expertise-description {
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .expertise-grid {
    grid-template-columns: 1fr;
  }

  .expertise-card {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>

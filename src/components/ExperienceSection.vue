<script setup>
const experiences = [
  {
    role: 'Arquiteto de Soluções',
    company: 'Confidencial / Projetos Estratégicos',
    period: 'Outubro 2021 - Presente',
    description: 'Foco em transformar aplicações monolíticas em microserviços e projetar arquiteturas On-Premise para Cloud Pública. Liderança técnica em modernização de sistemas utilizando Angular, VueJS, React, Node.js e .NET Core.',
    highlights: [
      'Construção de aplicações robustas e escaláveis',
      'Migração estratégica para nuvens públicas',
      'Elaboração de arquiteturas de referência',
      'Atuação hands-on em projetos críticos'
    ]
  },
  {
    role: 'Engenheiro de Software Sênior',
    company: 'Projetos Corporativos & Clientes Enterprise',
    period: 'Abril 2008 - Setembro 2021',
    description: 'Desenvolvimento de soluções técnicas de alta complexidade para clientes enterprise. Experiência ampla com NodeJS, .NET Core, Python, VueJS e Angular, entregando projetos de grande escala com qualidade e confiabilidade.',
    highlights: [
      'Desenvolvimento de requisitos de software complexos',
      'Criação de testes automatizados e manuais',
      'Documentação técnica e garantia de qualidade',
      'Interface direta com clientes para detalhamento de requisitos'
    ]
  }
];
</script>

<template>
  <section class="experience-section" id="experience">
    <div class="container">
      <h2 class="section-title">Trajetória Profissional</h2>
      
      <div class="experience-timeline">
        <div v-for="(exp, index) in experiences" :key="index" class="experience-item" :style="{ animationDelay: `${index * 0.2}s` }">
          <div class="experience-dot"></div>
          <div class="experience-content glass-panel">
            <div class="experience-header">
              <h3 class="role">{{ exp.role }}</h3>
              <span class="period">{{ exp.period }}</span>
            </div>
            <h4 class="company">{{ exp.company }}</h4>
            <p class="description">{{ exp.description }}</p>
            <ul class="highlights">
              <li v-for="(highlight, hIndex) in exp.highlights" :key="hIndex">{{ highlight }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  padding: var(--spacing-xl) 0;
  background-color: var(--bg-primary);
}

.experience-timeline {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  padding-left: 2rem;
}

.experience-timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--gradient-text);
  opacity: 0.3;
}

.experience-item {
  position: relative;
  margin-bottom: var(--spacing-xl);
  opacity: 0;
  transform: translateX(-20px);
  animation: slideIn 0.8s ease forwards;
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.experience-dot {
  position: absolute;
  left: -2rem;
  top: 1.5rem;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: var(--gradient-text);
  border: 4px solid var(--bg-primary);
  box-shadow: 0 0 10px rgba(124, 58, 237, 0.5);
  z-index: 2;
}

.experience-content {
  padding: var(--spacing-lg);
  transition: transform var(--transition-normal);
}

.experience-content:hover {
  transform: scale(1.01);
  border-color: rgba(124, 58, 237, 0.2);
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: var(--spacing-xs);
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.role {
  font-size: 1.4rem;
  color: #fff;
  margin: 0;
}

.period {
  font-size: 0.9rem;
  color: var(--accent-secondary);
  font-weight: 500;
}

.company {
  font-size: 1.1rem;
  color: var(--text-primary);
  opacity: 0.9;
  margin-bottom: var(--spacing-md);
}

.description {
  font-size: 1rem;
  margin-bottom: var(--spacing-md);
}

.highlights {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-sm);
}

.highlights li {
  font-size: 0.9rem;
  padding-left: 1.2rem;
  position: relative;
  color: var(--text-secondary);
}

.highlights li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--accent-primary);
}

@media (max-width: 768px) {
  .experience-header {
    flex-direction: column;
  }
  
  .experience-timeline {
    padding-left: 1.5rem;
  }
  
  .experience-dot {
    left: -1.75rem;
  }
}
</style>

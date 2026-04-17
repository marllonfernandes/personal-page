<script setup>
const skills = [
  { name: 'AI Agents (LLMs/LangChain)', level: 90, category: 'Artificial Intelligence' },
  { name: 'Cloud Architecture (GCP/AWS)', level: 95, category: 'Infrastructure' },
  { name: 'Terraform / IaC', level: 90, category: 'DevOps' },
  { name: 'Kubernetes / Docker', level: 95, category: 'Containers' },
  { name: 'Vue.js / React / Angular', level: 90, category: 'Frontend' },
  { name: 'Node.js / Python / .NET Core', level: 92, category: 'Backend' },
  { name: 'SQL Server / MongoDB / BigQuery', level: 88, category: 'Data' },
  { name: 'SRE & Cloud Security', level: 85, category: 'Operations' }
];
</script>

<template>
  <section class="skills-section" id="skills">
    <div class="container">
      <h2 class="section-title">Minhas Habilidades</h2>
      
      <div class="skills-grid">
        <div v-for="(skill, index) in skills" :key="index" class="skill-card glass-panel" :style="{ animationDelay: `${index * 0.1}s` }">
          <div class="skill-header">
            <h4>{{ skill.name }}</h4>
            <span class="skill-category">{{ skill.category }}</span>
          </div>
          
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" :style="{ width: `${skill.level}%` }"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  padding: var(--spacing-xl) 0;
  background-color: var(--bg-secondary);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-lg);
}

.skill-card {
  padding: var(--spacing-lg);
  transition: transform var(--transition-normal);
}

.skill-card:hover {
  transform: translateY(-5px);
  border-color: rgba(124, 58, 237, 0.3);
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: var(--spacing-md);
}

.skill-header h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
}

.skill-category {
  font-size: 0.8rem;
  color: var(--accent-secondary);
  background: rgba(59, 130, 246, 0.1);
  padding: 0.2rem 0.6rem;
  border-radius: 1rem;
}

.progress-bar-bg {
  width: 100%;
  height: 8px;
  background-color: var(--bg-tertiary);
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  background: var(--gradient-text);
  border-radius: 4px;
  transition: width 1.5s ease-out;
  /* Start wide enough so it animates from left to right smoothly if triggered */
}
</style>

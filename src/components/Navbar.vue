<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const isScrolled = ref(false);
const activeSection = ref('home');

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

let observer;

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  
  // Set up IntersectionObserver to track visible sections
  const options = {
    root: null,
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
        // Update URL smoothly without jumping
        history.replaceState(null, null, `#${entry.target.id}`);
      }
    });
  }, options);

  // Observe all sections we care about
  const sections = ['home', 'expertise', 'services', 'how-it-works', 'contact'];
  setTimeout(() => {
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }, 100);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  if (observer) observer.disconnect();
});
</script>

<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="container navbar-container">
      <!-- Logo -->
      <a href="#home" class="logo" @click="closeMenu">
        Cognitiva<span class="highlight">Tech</span>
      </a>

      <!-- Desktop Menu -->
      <ul class="nav-links desktop-menu">
        <li><a href="#home" :class="{ active: activeSection === 'home' }">Início</a></li>
        <li><a href="#expertise" :class="{ active: activeSection === 'expertise' }">Especialidades</a></li>
        <li><a href="#services" :class="{ active: activeSection === 'services' }">Serviços</a></li>
        <li><a href="#how-it-works" :class="{ active: activeSection === 'how-it-works' }">Como Funciona</a></li>
        <li><a href="#contact" class="btn-nav" :class="{ active: activeSection === 'contact' }">Contato</a></li>
      </ul>

      <!-- Mobile Hamburger -->
      <button class="hamburger" @click="toggleMenu" aria-label="Toggle menu">
        <span class="hamburger-line" :class="{ 'line-1': isMenuOpen }"></span>
        <span class="hamburger-line" :class="{ 'line-2': isMenuOpen }"></span>
        <span class="hamburger-line" :class="{ 'line-3': isMenuOpen }"></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ 'is-open': isMenuOpen }">
      <ul class="nav-links">
        <li><a href="#home" @click="closeMenu" :class="{ active: activeSection === 'home' }">Início</a></li>
        <li><a href="#expertise" @click="closeMenu" :class="{ active: activeSection === 'expertise' }">Especialidades</a></li>
        <li><a href="#services" @click="closeMenu" :class="{ active: activeSection === 'services' }">Serviços</a></li>
        <li><a href="#how-it-works" @click="closeMenu" :class="{ active: activeSection === 'how-it-works' }">Como Funciona</a></li>
        <li><a href="#contact" class="btn-nav" @click="closeMenu" :class="{ active: activeSection === 'contact' }">Contato</a></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1.25rem 0;
  transition: all 0.3s ease;
  background: transparent;
}

.navbar-scrolled {
  background: rgba(15, 17, 26, 0.9);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 1rem 0;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.25rem;
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.02em;
}

.highlight {
  background: var(--gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-links a {
  color: var(--text-secondary);
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: #fff;
}

.nav-links a.active {
  color: var(--accent-primary);
  font-weight: 700;
}

.btn-nav {
  background: rgba(124, 58, 237, 0.1);
  color: var(--accent-primary) !important;
  border: 1px solid rgba(124, 58, 237, 0.3);
  padding: 0.5rem 1.25rem;
  border-radius: 100px;
  font-weight: 600 !important;
  transition: all 0.2s ease !important;
}

.btn-nav:hover {
  background: rgba(124, 58, 237, 0.2);
  border-color: rgba(124, 58, 237, 0.5);
  color: #fff !important;
  transform: translateY(-2px);
}

.hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  flex-direction: column;
  gap: 6px;
  padding: 0.5rem;
  z-index: 1001;
}

.hamburger-line {
  display: block;
  width: 24px;
  height: 2px;
  background: #fff;
  transition: all 0.3s ease;
}

.mobile-menu {
  display: none;
}

@media (max-width: 768px) {
  .desktop-menu {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .hamburger-line.line-1 {
    transform: rotate(45deg) translate(5px, 6px);
  }

  .hamburger-line.line-2 {
    opacity: 0;
  }

  .hamburger-line.line-3 {
    transform: rotate(-45deg) translate(5px, -6px);
  }

  .mobile-menu {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: var(--bg-primary);
    padding-top: 5rem;
    clip-path: circle(0% at top right);
    transition: clip-path 0.4s ease-in-out;
    z-index: 999;
  }

  .mobile-menu.is-open {
    clip-path: circle(150% at top right);
  }

  .mobile-menu .nav-links {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
  }

  .mobile-menu .nav-links a {
    font-size: 1.25rem;
  }
  
  .mobile-menu .btn-nav {
    margin-top: 1rem;
    padding: 0.75rem 2rem;
  }
}
</style>

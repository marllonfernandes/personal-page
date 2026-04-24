<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Expertise from './components/Expertise.vue'
import Services from './components/Services.vue'
import HowItWorks from './components/HowItWorks.vue'
import Contact from './components/Contact.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="app-wrapper">
    <Navbar />
    <main>
      <Hero />
      <Expertise />
      <Services />
      <HowItWorks />
      <Contact />
    </main>
    <FooterSection />
    <WhatsAppButton />
  </div>
</template>

<style scoped>
.app-wrapper {
  position: relative;
}
</style>

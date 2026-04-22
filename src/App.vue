<script setup>
import Hero from './components/Hero.vue'
import Expertise from './components/Expertise.vue'
import Services from './components/Services.vue'
import Contact from './components/Contact.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="app-wrapper">
    <main>
      <Hero />
      <Expertise />
      <Services />
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

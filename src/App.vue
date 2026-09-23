<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import NichesSection from './components/NichesSection.vue'
import SocialProof from './components/SocialProof.vue'
import Services from './components/Services.vue'
import Expertise from './components/Expertise.vue'
import HowItWorks from './components/HowItWorks.vue'
import Contact from './components/Contact.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'
import FooterSection from './components/FooterSection.vue'
import PrivacyModal from './components/PrivacyModal.vue'

const isModalOpen = ref(false)
const modalTab = ref('privacy')

const openModal = (tab) => {
  modalTab.value = tab
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>

<template>
  <div class="app-wrapper">
    <Navbar />
    <main>
      <Hero />
      <NichesSection />
      <SocialProof />
      <Services />
      <Expertise />
      <HowItWorks />
      <Contact @open-privacy="openModal('privacy')" />
    </main>
    <FooterSection 
      @open-privacy="openModal('privacy')" 
      @open-terms="openModal('terms')" 
    />
    <WhatsAppButton />
    <PrivacyModal 
      :is-open="isModalOpen" 
      :initial-tab="modalTab" 
      @close="closeModal" 
    />
  </div>
</template>

<style scoped>
.app-wrapper {
  position: relative;
  min-height: 100vh;
  background-color: var(--bg-primary);
}
</style>

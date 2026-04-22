<script setup>
const whatsappNumber = '5511966464979';
const message = 'Olá Marllon! Acessei sua página pessoal e gostaria de conversar sobre um projeto.';
const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
</script>

<template>
  <a :href="waLink" target="_blank" rel="noopener noreferrer" class="whatsapp-btn" aria-label="Fale comigo no WhatsApp">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
    <span class="tooltip">Fale Comigo!</span>
  </a>
</template>

<style scoped>
.whatsapp-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: var(--whatsapp-color);
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
  z-index: 1000;
  transition: all var(--transition-normal);
  text-decoration: none;
}

.whatsapp-btn:hover {
  transform: scale(1.1) translateY(-5px);
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
}

.whatsapp-btn:active {
  transform: scale(0.95);
}

.tooltip {
  position: absolute;
  right: 75px;
  background-color: #fff;
  color: #333;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.9rem;
  font-weight: 600;
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-fast);
  white-space: nowrap;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  pointer-events: none;
}

.tooltip::after {
  content: '';
  position: absolute;
  right: -5px;
  top: 50%;
  transform: translateY(-50%);
  border-width: 6px 0 6px 6px;
  border-style: solid;
  border-color: transparent transparent transparent #fff;
}

.whatsapp-btn:hover .tooltip {
  opacity: 1;
  visibility: visible;
  right: 80px;
}

/* Pulse Animation */
.whatsapp-btn::before {
  content: '';
  position: absolute;
  top: -5%;
  left: -5%;
  width: 110%;
  height: 110%;
  border-radius: 50%;
  background-color: var(--whatsapp-color);
  opacity: 0.5;
  z-index: -1;
  animation: pulse 2s infinite ease-out;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }

  100% {
    transform: scale(1.4);
    opacity: 0;
  }
}

@media (max-width: 768px) {
  .whatsapp-btn {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 50px;
    height: 50px;
  }

  .whatsapp-btn svg {
    width: 26px;
    height: 26px;
  }

  .tooltip {
    display: none;
    /* Hide tooltip on mobile to prevent overflow issues */
  }
}
</style>

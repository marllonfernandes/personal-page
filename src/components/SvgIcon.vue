<!--
  SvgIcon.vue — Componente seguro para ícones SVG inline.

  Aceita APENAS strings de <svg> com atributos permitidos. Bloqueamos
  qualquer atributo de evento (on*), href com javascript:, e elementos
  script/style fora do escopo SVG, sem depender de DOMPurify para não
  adicionar dependência de runtime desnecessária.

  Uso:
    <SvgIcon :svg="item.icon" />

  Os dados de `svg` devem vir de constantes hardcoded no próprio .vue
  (nunca de APIs externas ou banco de dados sem sanitização extra).
-->
<script setup>
import { computed } from 'vue'

const props = defineProps({
  svg: {
    type: String,
    required: true,
  },
})

/**
 * Sanitização leve para SVG estático:
 * Remove qualquer atributo on* (onclick, onload, onerror…) e
 * hrefs com javascript: que poderiam existir se o dado vier de
 * fonte externa no futuro.
 *
 * Para dados 100% hardcoded (caso atual), isso é uma camada extra
 * de defesa em profundidade — não um filtro primário.
 */
const safeSvg = computed(() => {
  return props.svg
    // Remove atributos de evento: on[qualquer-coisa]="..."
    .replace(/\s+on\w+\s*=\s*["'][^"']*["']/gi, '')
    // Remove href/xlink:href com javascript:
    .replace(/(?:xlink:)?href\s*=\s*["']javascript:[^"']*["']/gi, '')
})
</script>

<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <span class="svg-icon" v-html="safeSvg" aria-hidden="true" />
</template>

<style scoped>
.svg-icon {
  display: contents; /* Não adiciona nenhum layout extra ao redor do SVG */
}
</style>

<script setup>
defineProps({
  faq: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section class="section faq" id="faq">
    <div class="section-heading compact">
      <p class="eyebrow">{{ faq.eyebrow }}</p>
      <h2>{{ faq.title }}</h2>
    </div>
    <div class="faq-grid">
      <details v-for="item in faq.items" :key="item.question">
        <summary>{{ item.question }}</summary>
        <p>{{ item.answer }}</p>
      </details>
    </div>
  </section>
</template>
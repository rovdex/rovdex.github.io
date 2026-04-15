<script setup>
defineProps({
  capabilities: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section class="section capabilities" id="capabilities">
    <div class="section-heading compact">
      <p class="eyebrow">{{ capabilities.eyebrow }}</p>
      <h2>{{ capabilities.title }}</h2>
    </div>
    <div class="capability-grid">
      <article v-for="item in capabilities.items" :key="item.index">
        <span class="module-index">{{ item.index }}</span>
        <h3>{{ item.title }}</h3>
        <p>{{ item.text }}</p>
      </article>
    </div>
  </section>
</template>
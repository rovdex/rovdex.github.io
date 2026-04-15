<script setup>
defineProps({
  proof: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section class="section proof" id="proof">
    <div class="section-heading compact">
      <p class="eyebrow">{{ proof.eyebrow }}</p>
      <h2>{{ proof.title }}</h2>
    </div>
    <div class="proof-grid">
      <article v-for="item in proof.items" :key="item.index">
        <strong>{{ item.index }}</strong>
        <h3>{{ item.title }}</h3>
        <p>{{ item.text }}</p>
      </article>
    </div>
  </section>
</template>
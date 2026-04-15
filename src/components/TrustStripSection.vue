<script setup>
defineProps({
  trust: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section class="trust-strip">
    <div class="trust-copy">
      <p class="eyebrow">{{ trust.eyebrow }}</p>
      <h2>{{ trust.title }}</h2>
    </div>
    <div class="trust-rail">
      <span v-for="role in trust.roles" :key="role">{{ role }}</span>
    </div>
    <div class="trust-stats">
      <article v-for="item in trust.stats" :key="item.title">
        <strong>{{ item.title }}</strong>
        <p>{{ item.text }}</p>
      </article>
    </div>
  </section>
</template>
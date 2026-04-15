<script setup>
defineProps({
  system: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section class="section system" id="system">
    <div class="section-heading">
      <p class="eyebrow">{{ system.eyebrow }}</p>
      <h2>{{ system.title }}</h2>
    </div>
    <div class="system-grid">
      <article class="system-intro">
        <h3>{{ system.intro.title }}</h3>
        <p>{{ system.intro.text }}</p>
      </article>
      <article class="system-list">
        <p v-for="point in system.points" :key="point">{{ point }}</p>
      </article>
      <article class="system-frame">
        <div v-for="layer in system.layers" :key="layer.title">
          <span>{{ layer.title }}</span>
          <p>{{ layer.text }}</p>
        </div>
      </article>
    </div>
  </section>
</template>
<script setup>
defineProps({
  quote: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section class="section quote">
    <p>{{ quote }}</p>
  </section>
</template>
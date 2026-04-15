<script setup>
defineProps({
  footer: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <footer class="footer" id="contact">
    <div>
      <p class="eyebrow">{{ footer.eyebrow }}</p>
      <h2>{{ footer.title }}</h2>
      <p class="footer-note">{{ footer.note }}</p>
    </div>
    <div class="footer-actions">
      <a
        v-for="action in footer.actions"
        :key="action.href"
        class="button"
        :class="action.variant"
        :href="action.href"
      >
        {{ action.label }}
      </a>
    </div>
  </footer>
</template>
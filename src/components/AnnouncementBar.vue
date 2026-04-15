<script setup>
defineProps({
  announcement: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="announcement-bar">
    <span class="announcement-pill">{{ announcement.label }}</span>
    <p>{{ announcement.text }}</p>
    <a :href="announcement.href">{{ announcement.action }}</a>
  </div>
</template>
<script setup>
defineProps({
  workflow: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section class="section workflow" id="workflow">
    <div class="workflow-shell">
      <div class="workflow-copy">
        <p class="eyebrow">{{ workflow.eyebrow }}</p>
        <h2>{{ workflow.title }}</h2>
      </div>
      <div class="workflow-list">
        <article v-for="item in workflow.items" :key="item.index">
          <span>{{ item.index }}</span>
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
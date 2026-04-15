<script setup>
defineProps({
  useCases: {
    type: Object,
    required: true,
  },
  playbook: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section class="section use-cases" id="use-cases">
    <div class="section-heading compact">
      <p class="eyebrow">{{ useCases.eyebrow }}</p>
      <h2>{{ useCases.title }}</h2>
    </div>
    <div class="use-case-grid">
      <article
        v-for="item in useCases.items"
        :key="item.index"
        class="use-case-card"
        :class="{ featured: item.featured }"
      >
        <span class="module-index">{{ item.index }}</span>
        <h3>{{ item.title }}</h3>
        <p>{{ item.text }}</p>
      </article>
      <aside class="playbook-card">
        <div class="panel-topline">
          <span>{{ playbook.topline[0] }}</span>
          <span>{{ playbook.topline[1] }}</span>
        </div>
        <div class="playbook-code">
          <div v-for="step in playbook.steps" :key="step.index">
            <span class="token prompt">{{ step.index }}</span>
            <span>{{ step.text }}</span>
          </div>
        </div>
        <p>{{ playbook.note }}</p>
      </aside>
    </div>
  </section>
</template>
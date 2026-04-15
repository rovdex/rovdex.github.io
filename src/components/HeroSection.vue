<script setup>
defineProps({
  hero: {
    type: Object,
    required: true,
  },
  heroPanel: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section class="hero">
    <div class="hero-copy">
      <p class="eyebrow">{{ hero.eyebrow }}</p>
      <h1>{{ hero.title }}</h1>
      <p class="lead">{{ hero.lead }}</p>
      <div class="hero-metrics">
        <div v-for="metric in hero.metrics" :key="metric.label">
          <strong>{{ metric.value }}</strong>
          <span>{{ metric.label }}</span>
        </div>
      </div>
      <div class="hero-actions">
        <a
          v-for="action in hero.actions"
          :key="action.href"
          class="button"
          :class="action.variant"
          :href="action.href"
        >
          {{ action.label }}
        </a>
      </div>
    </div>

    <div class="hero-stage">
      <div class="stage-orbit orbit-one"></div>
      <div class="stage-orbit orbit-two"></div>
      <div class="hero-panel">
        <div class="panel-topline">
          <span>{{ heroPanel.topline[0] }}</span>
          <span>{{ heroPanel.topline[1] }}</span>
        </div>
        <div class="hero-terminal">
          <div class="terminal-line" v-for="line in heroPanel.terminal" :key="line.key">
            <span><span class="token prompt">&gt;</span>{{ line.key }}</span>
            <strong>{{ line.value }}</strong>
          </div>
        </div>
        <div class="hero-board">
          <article
            v-for="card in heroPanel.cards"
            :key="card.label"
            class="board-card"
            :class="card.kind"
          >
            <span class="signal-label">{{ card.label }}</span>
            <template v-if="card.kind === 'mini'">
              <ul>
                <li v-for="item in card.items" :key="item">{{ item }}</li>
              </ul>
            </template>
            <template v-else-if="card.kind === 'pulse'">
              <div class="pulse-bars">
                <i v-for="bar in 6" :key="bar"></i>
              </div>
            </template>
            <template v-else>
              <strong>{{ card.title }}</strong>
              <p>{{ card.text }}</p>
            </template>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
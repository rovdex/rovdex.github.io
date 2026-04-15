<script setup>
defineProps({
  navLinks: {
    type: Array,
    required: true,
  },
  isMenuOpen: {
    type: Boolean,
    required: true,
  },
});

defineEmits(["toggle-menu", "close-menu"]);
</script>

<template>
  <header class="topbar">
    <a class="brand" href="#top" @click="$emit('close-menu')">
      <span class="brand-mark"></span>
      <span>Rovdex</span>
    </a>

    <button
      class="menu-toggle"
      type="button"
      :aria-expanded="String(isMenuOpen)"
      aria-controls="site-nav"
      aria-label="切换导航菜单"
      @click="$emit('toggle-menu')"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div id="site-nav" class="nav-shell" :class="{ open: isMenuOpen }">
      <nav class="nav">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          @click="$emit('close-menu')"
        >
          {{ link.label }}
        </a>
      </nav>
      <a class="button ghost nav-cta" href="#contact" @click="$emit('close-menu')">Request Access</a>
    </div>
  </header>
</template>
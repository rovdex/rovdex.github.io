<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import AnnouncementBar from "./components/AnnouncementBar.vue";
import SiteHeader from "./components/SiteHeader.vue";
import HeroSection from "./components/HeroSection.vue";
import TrustStripSection from "./components/TrustStripSection.vue";
import SystemSection from "./components/SystemSection.vue";
import CapabilitiesSection from "./components/CapabilitiesSection.vue";
import UseCasesSection from "./components/UseCasesSection.vue";
import ProofSection from "./components/ProofSection.vue";
import WorkflowSection from "./components/WorkflowSection.vue";
import FaqSection from "./components/FaqSection.vue";
import QuoteSection from "./components/QuoteSection.vue";
import SiteFooter from "./components/SiteFooter.vue";
import { siteContent } from "./data/siteContent";

const isMenuOpen = ref(false);
let observer = null;

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}

function handleResize() {
  if (window.innerWidth > 960) {
    closeMenu();
  }
}

function setupReveal() {
  if (observer) {
    observer.disconnect();
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer?.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  document
    .querySelectorAll(
      ".announcement-bar, .hero-copy, .hero-stage, .trust-strip, .section-heading, .system-grid > *, .capability-grid article, .use-case-grid > *, .proof-grid article, .workflow-shell, .workflow-list article, .faq-grid details, .quote, .footer"
    )
    .forEach((element) => {
      element.classList.add("reveal");
      observer?.observe(element);
    });
}

onMounted(async () => {
  window.addEventListener("resize", handleResize, { passive: true });
  handleResize();
  await nextTick();
  setupReveal();
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
  observer?.disconnect();
});
</script>

<template>
  <div class="page-shell" id="top">
    <AnnouncementBar :announcement="siteContent.announcement" />
    <SiteHeader
      :nav-links="siteContent.navLinks"
      :is-menu-open="isMenuOpen"
      @toggle-menu="toggleMenu"
      @close-menu="closeMenu"
    />

    <main>
      <HeroSection :hero="siteContent.hero" :hero-panel="siteContent.heroPanel" />
      <TrustStripSection :trust="siteContent.trust" />
      <SystemSection :system="siteContent.system" />
      <CapabilitiesSection :capabilities="siteContent.capabilities" />
      <UseCasesSection :use-cases="siteContent.useCases" :playbook="siteContent.playbook" />
      <ProofSection :proof="siteContent.proof" />
      <WorkflowSection :workflow="siteContent.workflow" />
      <FaqSection :faq="siteContent.faq" />
      <QuoteSection :quote="siteContent.quote" />
    </main>

    <SiteFooter :footer="siteContent.footer" />
  </div>
</template>
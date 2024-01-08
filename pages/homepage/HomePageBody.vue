<script setup lang="ts">
import HeroSection from './hero/Section.vue'
import PromoSection from './promo/Section.vue'
import TvPlusGallery from './tv-plus-gallery/Section.vue'

const bodyWrapper = 'relative pt-navbar mx-auto max-w-largeTV'
</script>
<template>
  <main class="main-body min-w-[320px]" :class="bodyWrapper">
    <HeroSection />
    <PromoSection />
    <TvPlusGallery />
  </main>
</template>

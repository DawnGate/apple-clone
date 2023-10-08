<script setup lang="ts">
import HeroSection from './hero/Section'
import PromoSection from './promo/Section'

const bodyWrapper = 'relative pt-navbar mx-auto max-w-largeTV'
</script>
<template>
  <main class="main-body" :class="bodyWrapper">
    <HeroSection />
    <PromoSection />
  </main>
</template>

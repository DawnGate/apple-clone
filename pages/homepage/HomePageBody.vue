<script setup lang="ts">
import IPhone15ProSection from './section/iPhone15Pro.vue'
import IPhone15Section from './section/iPhone15.vue'
import AppleWatchSeries9Section from './section/appleWatchSeries9.vue'

const bodyWrapper = 'relative pt-navbar mx-auto max-w-largeTV'
</script>
<template>
  <main class="main-body" :class="bodyWrapper">
    <IPhone15ProSection />
    <IPhone15Section />
    <AppleWatchSeries9Section />
  </main>
</template>

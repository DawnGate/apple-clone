<script setup lang="ts">
import iPadProSection from './iPadPro.vue'
import appleVisionPro from './appleVisionPro.vue'

const sectionWrapper =
  'grid grid-cols-2 gap-[12px] border-[12px] border-white border-t-0'
</script>
<template>
  <section class="promos" :class="sectionWrapper">
    <iPadProSection />
    <appleVisionPro />
    <div>Test</div>
    <div>Test</div>
    <div>Test</div>
  </section>
</template>

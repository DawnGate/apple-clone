<script setup lang="ts">
import iPadProSection from './iPadPro.vue'
import appleVisionPro from './appleVisionPro.vue'
import macbookAir15 from './macbookAir15.vue'
import airpodsPro from './airpodsPro.vue'
import iphoneTradein from './iphoneTradein.vue'
import appleCard from './appleCard.vue'

const sectionWrapper =
  'grid md:grid-cols-2 gap-[12px] md:border-[12px] border-white border-t-0'
</script>
<template>
  <section class="promos" :class="sectionWrapper">
    <iPadProSection />
    <appleVisionPro />
    <macbookAir15 />
    <airpodsPro />
    <iphoneTradein />
    <appleCard />
  </section>
</template>

<script setup>
import Banner from './banner/index.vue'
import Ribbon from './ribbon/index.vue'

import SectionWelcome from './section-welcome/index.vue'
import SectionGtkMac from './section-gtk-mac/index.vue'
</script>
<template>
  <Banner />
  <main>
    <Ribbon />
    <SectionWelcome />
    <SectionGtkMac />
  </main>
</template>

<style>
.section {
  padding-top: 150px;
  padding-bottom: 150px;
}

.no-padding-bottom {
  padding-bottom: 0px !important;
}
</style>

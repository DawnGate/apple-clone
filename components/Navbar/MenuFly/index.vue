<script setup lang="ts">
import { globalStore } from '~/store/global'

const handleCloseMenu = () => {
  globalStore.hideMenu()
}
</script>

<template>
  <div
    v-show="globalStore.isMenuOpen"
    class="menu-global fixed inset-0 h-screen w-screen"
  >
    <div class="menu-content" @onmouseleave="handleCloseMenu">Hello</div>
  </div>
</template>

<style lang="css">
:root {
  --globalnav-backdrop-filter: saturate(180%) blur(20px);
  --globalnav-background: rgba(250, 250, 252, 0.8);
}

.menu-global {
  z-index: 999;
  background-color: var(--globalnav-background);
  backdrop-filter: var(--globalnav-backdrop-filter);
  margin-top: var(--navbar-height);
}
</style>

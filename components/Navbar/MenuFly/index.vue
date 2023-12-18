<script setup lang="ts">
import { globalStore } from '~/store/global'

const handleCloseMenu = () => {
  console.log('call it')
  globalStore.hideMenu()
}
</script>

<template>
  <div id="menuGlobal" class="menu-global fixed inset-0 h-screen w-screen">
    <div class="menu-content" @mouseleave="handleCloseMenu">Hello</div>
  </div>
</template>

<style lang="css">
:root {
  --globalnav-backdrop-filter: blur(20px);
  --globalnav-background: rgba(232, 232, 237, 0.4);
  --globalnav-background-content: rgba(250, 250, 252, 0.92);
}

.menu-global {
  z-index: 999;
  backdrop-filter: var(--globalnav-backdrop-filter);
  background-color: var(--globalnav-background);
  transition:
    opacity 0.32s cubic-bezier(0.4, 0, 0.6, 1) 80ms,
    visibility 0.32s step-end 80ms;
  visibility: hidden;
  opacity: 0;
}

.menu-global.open {
  visibility: visible;
  opacity: 1;
  transition:
    opacity 0.32s cubic-bezier(0.4, 0, 0.6, 1) 80ms,
    visibility 0.32s step-start 80ms;
}

.menu-content {
  margin-top: var(--navbar-height);
  background-color: var(--globalnav-background-content);
  height: 500px;
}
</style>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'

import { globalStore } from '~/store/global'

const calculateScrollbarWidth = function () {
  // Create the parent element
  const outer = document.createElement('div')
  outer.style.visibility = 'hidden'
  outer.style.overflow = 'scroll'

  // Append it to `body`
  document.body.appendChild(outer)

  // Create the child element
  const inner = document.createElement('div')
  outer.appendChild(inner)

  // Calculate the difference between their widths
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth

  // Remove the parent element
  document.body.removeChild(outer)

  globalStore.updateScrollBarWidth(scrollbarWidth)
}

const handleResize = () => {
  globalStore.updateWindowHeight(window.innerHeight)
  globalStore.updateWindowWidth(window.innerWidth)
}

onMounted(() => {
  handleResize()
  calculateScrollbarWidth()
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template></template>

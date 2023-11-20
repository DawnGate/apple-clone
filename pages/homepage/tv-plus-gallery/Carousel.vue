<script setup lang="ts">
import { ref } from 'vue'

import GalleryItem from './GalleryItem.vue'

const activeIndex = ref(0)

const imageArr = [0, 1, 2, 3, 4, 5, 6, 7]
const totalImage = imageArr.length

const containerWidth = 1265

const containerWrapper = `carousel-images relative h-[705px] mx-auto`

function changeActiveIndex(newIndex: number) {
  activeIndex.value = newIndex
}

function findTranslatePositionImage(calIndex: number) {
  if (calIndex === totalImage - 1) {
    if (activeIndex.value <= Math.floor((totalImage - 1) / 2)) {
      return -1
    }
  }

  if (calIndex === 0) {
    if (activeIndex.value >= Math.floor((totalImage - 1) / 2)) {
      return totalImage
    }
  }

  return calIndex
}
</script>

<template>
  <div class="carousel overflow-hidden">
    <div
      :class="containerWrapper"
      :style="{
        transform: `translateX(${-activeIndex * containerWidth}px)`,
        width: `${containerWidth}px`,
      }"
    >
      <div
        class="absolute"
        v-for="(item, index) in imageArr"
        :style="{
          transform: `translateX(${
            findTranslatePositionImage(index) * containerWidth
          }px)`,
        }"
      >
        <GalleryItem />
      </div>
    </div>
    <div class="pagination flex justify-center">
      <div class="flex gap-4">
        <button
          type="button"
          class="h-2 w-2 rounded-full"
          v-for="(item, index) in imageArr"
          :class="index === activeIndex ? 'active' : 'not-active'"
          @click="changeActiveIndex(index)"
        />
      </div>
    </div>
  </div>
</template>

<style>
.pagination .not-active {
  background-color: rgba(0, 0, 0, 0.42);
}

.pagination .active {
  background-color: rgba(0, 0, 0, 0.8);
}

.carousel-images {
  transition: transform 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
}
</style>

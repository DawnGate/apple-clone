<script setup lang="ts">
import { ref } from 'vue'

import GalleryItem from './GalleryItem.vue'

const activeIndex = ref(0)

const imageArr = [
  'https://is1-ssl.mzstatic.com/image/thumb/9ewxNiQdC032DQcorTcsvA/1960x1102.jpg',
  'https://is1-ssl.mzstatic.com/image/thumb/44dJzkosAhD0-ugRepvsfw/1960x1102.jpg',
  'https://is1-ssl.mzstatic.com/image/thumb/QG1GFWPPcQm02EB4LXpZYg/1960x1102.jpg',
  'https://is1-ssl.mzstatic.com/image/thumb/R_l1v_QVLik6NRU2FL9yrw/1960x1102.jpg',
  'https://is1-ssl.mzstatic.com/image/thumb/WhpeVjuxJ9w-XfYxHAGe2g/1960x1102.jpg',
  'https://is1-ssl.mzstatic.com/image/thumb/ageP1PYyLi7UlNiWMva32Q/1960x1102.jpg',
  'https://is1-ssl.mzstatic.com/image/thumb/mZsXfk4apSIl3Q5QZqztiQ/1960x1102.jpg',
  'https://is1-ssl.mzstatic.com/image/thumb/q8QlFpnNct0G9kpRmyMyNw/1960x1102.jpg',
  'https://is1-ssl.mzstatic.com/image/thumb/q46xd9gSrEJ6ILu4eAHtRg/1960x1102.jpg',
  'https://is1-ssl.mzstatic.com/image/thumb/ce4iVY5l5cZ9hO8daBzpFA/1960x1102.jpg',
]
const totalImage = imageArr.length

const containerWidth = 1265

const containerWrapper = ` relative h-[705px]`

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
  <div class="carousel overflow-hidden" :class="containerWrapper">
    <div
      :style="{
        transform: `translateX(${-activeIndex * containerWidth}px)`,
        width: `${containerWidth}px`,
      }"
      class="carousel-images relative mx-auto"
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
        <GalleryItem :isShow="index === activeIndex" :imgUrl="item" />
      </div>
    </div>
    <div
      class="pagination absolute bottom-[14px] left-1/2 flex -translate-x-1/2 justify-center"
    >
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

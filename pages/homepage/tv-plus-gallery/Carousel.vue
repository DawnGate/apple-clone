<script setup lang="ts">
import { ref, watch } from 'vue'

import { globalStore } from '~/store/global'

import GalleryItem from './GalleryItem.vue'

import { screenBreakpoints } from '~/utils/screenBreakpoints'

const activeIndex = ref(0)
const containerWidth = ref(1265)

const imageResponsive = ref<'md' | 'lg' | 'xl'>('md')

const imageArr = [
  {
    md: 'https://is1-ssl.mzstatic.com/image/thumb/mZsXfk4apSIl3Q5QZqztiQ/1378x774.jpg',
    lg: 'https://is1-ssl.mzstatic.com/image/thumb/mZsXfk4apSIl3Q5QZqztiQ/1960x1102.jpg',
    xl: 'https://is1-ssl.mzstatic.com/image/thumb/mZsXfk4apSIl3Q5QZqztiQ/2500x1406.jpg',
  },
  {
    md: 'https://is1-ssl.mzstatic.com/image/thumb/44dJzkosAhD0-ugRepvsfw/1378x774.jpg',
    lg: 'https://is1-ssl.mzstatic.com/image/thumb/44dJzkosAhD0-ugRepvsfw/1960x1102.jpg',
    xl: 'https://is1-ssl.mzstatic.com/image/thumb/44dJzkosAhD0-ugRepvsfw/2500x1406.jpg',
  },
  {
    md: 'https://is1-ssl.mzstatic.com/image/thumb/-RJ9s2YmRAo0GqNUf3GNlg/1378x774.jpg',
    lg: 'https://is1-ssl.mzstatic.com/image/thumb/-RJ9s2YmRAo0GqNUf3GNlg/1960x1102.jpg',
    xl: 'https://is1-ssl.mzstatic.com/image/thumb/-RJ9s2YmRAo0GqNUf3GNlg/2500x1406.jpg',
  },
  {
    md: 'https://is1-ssl.mzstatic.com/image/thumb/FVXovQ_qyfe9iwKjx4dRxA/1378x774.jpg',
    lg: 'https://is1-ssl.mzstatic.com/image/thumb/FVXovQ_qyfe9iwKjx4dRxA/1960x1102.jpg',
    xl: 'https://is1-ssl.mzstatic.com/image/thumb/FVXovQ_qyfe9iwKjx4dRxA/2500x1406.jpg',
  },
  {
    md: 'https://is1-ssl.mzstatic.com/image/thumb/R_l1v_QVLik6NRU2FL9yrw/1378x774.jpg',
    lg: 'https://is1-ssl.mzstatic.com/image/thumb/R_l1v_QVLik6NRU2FL9yrw/1960x1102.jpg',
    xl: 'https://is1-ssl.mzstatic.com/image/thumb/R_l1v_QVLik6NRU2FL9yrw/2500x1406.jpg',
  },
  {
    md: 'https://is1-ssl.mzstatic.com/image/thumb/ageP1PYyLi7UlNiWMva32Q/1378x774.jpg',
    lg: 'https://is1-ssl.mzstatic.com/image/thumb/ageP1PYyLi7UlNiWMva32Q/1960x1102.jpg',
    xl: 'https://is1-ssl.mzstatic.com/image/thumb/ageP1PYyLi7UlNiWMva32Q/2500x1406.jpg',
  },
]
const totalImage = imageArr.length

const containerWrapper = ` relative h-[533px] md:h-[406px] xl:h-[561px] 2xl:h-[705px]`

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

watch(
  () => globalStore.windowWidth,
  (newWidth) => {
    if (newWidth >= screenBreakpoints['2xl']) {
      containerWidth.value = 1250 + 15
      imageResponsive.value = 'xl'
    } else if (newWidth >= screenBreakpoints.xl) {
      containerWidth.value = 980 + 15
      imageResponsive.value = 'xl'
    } else if (newWidth >= screenBreakpoints.lg) {
      containerWidth.value = 689 + 15
      imageResponsive.value = 'lg'
    } else {
      containerWidth.value = 274 + 15
      imageResponsive.value = 'md'
    }
  }
)
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
        <GalleryItem
          :isShow="index === activeIndex"
          :imgUrl="item[imageResponsive]"
        />
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

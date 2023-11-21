<script setup lang="ts">
import { onUnmounted, ref, watch, defineProps } from 'vue'
import { gsap } from 'gsap'

const props = defineProps(['isShow', 'imgUrl'])

const main = ref()
let ctx: any

watch(
  () => props.isShow,
  () => {
    ctx = gsap.context((self) => {
      if (self.selector) {
        const imageCover = self.selector('.image-cover')
        const infoBottom = self.selector('.info-bottom')

        if (props.isShow) {
          gsap.fromTo(
            infoBottom,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, delay: 1, duration: 2 }
          )

          gsap.fromTo(imageCover, { opacity: 0.3 }, { opacity: 1 })
        } else {
          gsap.fromTo(imageCover, { opacity: 1 }, { opacity: 0.3 })
        }
      }
    }, main.value)
  }
)

onMounted(() => {
  main.value.querySelector('.image-cover').style.opacity = props.isShow
    ? 1
    : 0.3
})

onUnmounted(() => {
  if (ctx) {
    ctx.revert()
  }
})
</script>
<template>
  <div class="h-[667px]" ref="main">
    <a
      class="image-cover background-center relative mx-[8px] inline-block h-full w-[1250px] bg-cover"
      :style="{
        backgroundImage: `url(${props.imgUrl})`,
        opacity: 0.3,
      }"
      href="/"
    >
      <div class="inner absolute top-0 h-full w-full">
        <div class="info-top"></div>
        <div
          class="info-bottom absolute bottom-[50px] left-[68px] right-[210px] flex items-center"
        >
          <button
            class="rounded-[980px] border border-white bg-white px-[21px] py-[11px] text-[14px] font-bold text-footer-title after:inline-block after:pl-[4px] after:content-['ᐅ'] hover:opacity-[0.9]"
          >
            Stream now
          </button>
          <p
            class="item-text ml-[40px] text-[20px] text-white"
            style="text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.6)"
          >
            <span class="font-bold">Documentary</span>&nbsp;
            <span class="font-bold">·</span>
            &nbsp;The icons tell their own stories
          </p>
        </div>
      </div>
    </a>
  </div>
</template>

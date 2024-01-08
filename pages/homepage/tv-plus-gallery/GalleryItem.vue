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
  <div class="h-[495px] md:h-[368px] xl:h-[523px] 2xl:h-[667px]" ref="main">
    <a
      class="image-cover relative mx-[8px] inline-block h-full w-[274px] bg-cover bg-center md:w-[689px] xl:w-[980px] 2xl:w-[1250px]"
      :style="{
        backgroundImage: `url(${props.imgUrl})`,
      }"
      href="/"
    >
      <div class="inner absolute top-0 h-full w-full">
        <div class="info-top"></div>
        <div
          class="info-bottom absolute bottom-[30px] left-0 right-0 flex flex-col items-center md:bottom-[21px] md:left-[42px] md:right-[128px] md:flex-row xl:bottom-[50px] xl:left-[68px] xl:right-[210px]"
        >
          <button
            class="order-2 rounded-[980px] border border-white bg-white px-[21px] py-[11px] text-[14px] font-bold text-footer-title after:inline-block after:pl-[4px] after:content-['ᐅ'] hover:opacity-[0.9] md:order-1"
          >
            Stream now
          </button>
          <p
            class="item-text order-1 mb-3 ml-0 flex-1 px-[15px] text-center text-[15px] leading-[1.33] text-white md:order-2 md:mb-0 md:ml-[30px] md:px-0 md:text-left md:text-[19px] md:leading-[1.21] xl:ml-[40px] xl:text-[20px] xl:leading-[1.1]"
            style="text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.6)"
          >
            <span class="block font-bold md:inline-block">Documentary</span>
            <span class="hidden font-bold md:inline-block">&nbsp;·&nbsp;</span>
            <span class="block md:inline-block"
              >The icons tell their own stories</span
            >
          </p>
        </div>
      </div>
    </a>
  </div>
</template>

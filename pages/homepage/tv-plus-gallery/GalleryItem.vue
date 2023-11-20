<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'

const main = ref()
let ctx: any

onMounted(() => {
  ctx = gsap.context((self) => {
    if (self.selector) {
      const itemText = self.selector('.item-text')
      gsap.fromTo(itemText, { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
    }
  }, main.value)
})

onUnmounted(() => {
  ctx.revert()
})

const imageBackground =
  'bg-[url("https://is1-ssl.mzstatic.com/image/thumb/e7lhfIFweEP0AEWANZymEQ/2500x1406.jpg")] background-center bg-cover'
</script>
<template>
  <div class="h-[667px]" ref="main">
    <a
      :class="imageBackground"
      class="relative mx-[8px] inline-block h-full w-[1250px]"
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

<script setup lang="ts">
const promoWrapper = 'h-[580px] w-full overflow-hidden'

const heroContentWrapper = 'h-full w-full relative'

const heroLinkWrapper = 'h-full w-full absolute z-20'

const heroDescriptionWrapper =
  'text-center relative z-30 pointer-events-none h-full flex flex-col justify-end pb-[54px]'

const linkWithIconAfter = `text-[17px] leading-none pointer-events-all text-link-light hover:underline after:content-['›'] after:pl-[6px] after:inline-block  [&:not(:first-child)]:ml-[35px]`

const heroFigureWrapper =
  "bg-[url('~/assets/images/promos/apple-vision-pro/promo_apple_vision_pro_large_2x.jpg')] bg-no-repeat bg-[length:1262px_580px] w-[1262px] h-[580px] absolute -translate-x-1/2 left-1/2"

const heroBackgroundImageWrapper = 'h-full w-full absolute top-0 z-10 '

const headlineWrapperWithImage =
  "bg-[url('~/assets/images/logos/apple-vision-pro/promo_logo_apple_vision_pro_large_2x.png')] bg-no-repeat bg-[length:196px_41px] h-[41px] bg-center"
</script>
<template>
  <div class="promo" :class="promoWrapper">
    <div data-id="apple-vision-pro" :class="heroContentWrapper">
      <a href="/apple-vision-pro" :class="heroLinkWrapper" />
      <div class="unit-copy-wrapper" :class="heroDescriptionWrapper">
        <h4
          class="headline pt-[53px] text-footer-title"
          :class="headlineWrapperWithImage"
        >
          <span class="hidden">Apple vision pro</span>
        </h4>
        <h5
          class="subhead mt-[2px] flex items-center justify-center text-footer-title"
        >
          Welcome to the era of spatial computing.
        </h5>
        <p class="mt-[12px] text-[17px] text-footer-text">
          Available early next year in the U.S.
        </p>

        <div class="relative z-20 mt-[14px]">
          <a :class="linkWithIconAfter" href="/apple-vision-pro">Learn more</a>
        </div>
      </div>
      <div class="unit-image-wrapper" :class="heroBackgroundImageWrapper">
        <figure :class="heroFigureWrapper" />
      </div>
    </div>
  </div>
</template>

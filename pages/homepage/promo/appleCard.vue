<script setup lang="ts">
const promoWrapper = 'h-[580px] w-full overflow-hidden'

const heroContentWrapper = 'h-full w-full relative'

const heroLinkWrapper = 'h-full w-full absolute z-20'

const heroDescriptionWrapper = 'text-center relative z-30 pointer-events-none'

const linkWithIconAfter =
  "text-[17px] leading-[20/17] pointer-events-all text-link-light hover:underline after:content-['›'] after:pl-[6px] after:inline-block  [&:not(:first-child)]:ml-[35px]"

const heroFigureWrapper =
  "bg-[url('~/assets/images/promos/apple-card/tile_large_2x.jpg')] bg-no-repeat bg-[length:1262px_580px] w-[1262px] h-[580px] absolute -translate-x-1/2 left-1/2"

const heroBackgroundImageWrapper = 'h-full w-full absolute top-0 z-10 '

const titleBackground =
  "bg-[url('~/assets/images/logos/apple-card/logo_large_2x.png')] bg-no-repeat bg-[length:108px_33px] w-[108px] h-[33px] background-center m-auto"
</script>
<template>
  <div class="promo" :class="promoWrapper">
    <div data-id="apple-card" :class="heroContentWrapper">
      <a href="/apple-card" :class="heroLinkWrapper" />
      <div class="unit-copy-wrapper pt-[45px]" :class="heroDescriptionWrapper">
        <h4 class="headline text-footer-title" :class="titleBackground">
          <span class="hidden">Apple Card</span>
        </h4>
        <h5
          class="subhead m-auto mt-[10px] flex max-w-[315px] items-center justify-center text-footer-title"
        >
          Get up to 3% Daily Cash back with every purchase.
        </h5>
        <div class="relative z-20 mt-[14px]">
          <a :class="linkWithIconAfter" href="/apple-card">Learn more</a>
          <a :class="linkWithIconAfter" href="/apple-card/apply">Apply now</a>
        </div>
      </div>
      <div class="unit-image-wrapper" :class="heroBackgroundImageWrapper">
        <figure :class="heroFigureWrapper" />
      </div>
    </div>
  </div>
</template>

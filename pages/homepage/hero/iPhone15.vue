<script setup lang="ts">
const heroWrapper = 'h-[704px] w-full overflow-hidden'

const heroContentWrapper = 'h-[692px] w-full relative'

const heroLinkWrapper = 'h-full w-full absolute z-20'

const heroDescriptionWrapper =
  'text-center relative z-30 pt-[47px] pointer-events-none'

const linkWithIconAfter =
  "text-[21px] pointer-events-all leading-none text-link-light hover:underline after:content-['›'] after:pl-[6px] after:inline-block  [&:not(:first-child)]:ml-[35px]"

const heroFigureWrapper =
  "bg-[url('~/assets/images/heros/iphone15/hero_iphone15_largetall_2x.jpg')] bg-no-repeat bg-[length:3080px_692px] w-[3080px] h-[692px] absolute -translate-x-1/2 left-1/2"

const heroBackgroundImageWrapper = 'h-full w-full absolute top-0 z-10'
</script>
<template>
  <div class="hero" :class="heroWrapper">
    <div data-id="iphone-15" :class="heroContentWrapper">
      <a href="/iphone-15" :class="heroLinkWrapper" />
      <div class="unit-copy-wrapper" :class="heroDescriptionWrapper">
        <h2 class="headline text-footer-title">iPhone 15</h2>
        <h3 class="subhead mt-[6px] text-footer-title">
          New camera. New design. Newphoria.
        </h3>
        <div class="relative z-20 mt-[14px]">
          <a :class="linkWithIconAfter" href="/iphone-15">Learn more</a>
          <a :class="linkWithIconAfter" href="/shop/goto/buy_iphone/iphone_15"
            >Buy</a
          >
        </div>
      </div>
      <div class="unit-image-wrapper" :class="heroBackgroundImageWrapper">
        <figure :class="heroFigureWrapper" />
      </div>
    </div>
  </div>
</template>

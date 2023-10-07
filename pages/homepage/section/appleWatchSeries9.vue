<script setup lang="ts">
const heroWrapper = 'h-[704px] w-full'

const heroContentWrapper = 'h-[692px] w-full relative'

const heroLinkWrapper = 'h-full w-full absolute z-20'

const heroDescriptionWrapper =
  'text-center relative z-30 pt-[47px] pointer-events-none'

const linkWithIconAfter =
  "text-[21px] pointer-events-all leading-none text-link-dark hover:underline after:content-['›'] after:pl-[6px] after:inline-block  [&:not(:first-child)]:ml-[35px]"

const heroFigureWrapper =
  "bg-[url('~/assets/images/heros/apple-watch-series-9/hero_apple_watch_series_9_largetall_2x.jpg')] bg-no-repeat bg-[length:3080px_692px] w-[3080px] h-[692px] absolute -translate-x-1/2 left-1/2"

const headlineWrapperWithImage =
  "bg-[url('~/assets/images/logos/apple-watch-series-9/hero_logo_apple_watch_series_9_largetall_2x.png')] bg-no-repeat bg-[length:180px_73px] h-[73px] bg-center"

const heroBackgroundImageWrapper = 'h-full w-full absolute top-0 z-10'
</script>
<template>
  <section class="hero" :class="heroWrapper">
    <div data-id="apple-watch-series-9" :class="heroContentWrapper">
      <a href="/apple-watch-series-9" :class="heroLinkWrapper" />
      <div class="unit-copy-wrapper" :class="heroDescriptionWrapper">
        <h2
          class="headline mt-[9px] text-footer-background"
          :class="headlineWrapperWithImage"
        >
          <span class="hidden">Apple Watch Series 9</span>
        </h2>
        <h3 class="subhead mt-[14px] text-footer-background">
          Smarter. Brighter. Mightier.
        </h3>
        <div class="relative z-20 mt-[14px]">
          <a :class="linkWithIconAfter" href="/apple-watch-series-9"
            >Learn more</a
          >
          <a
            :class="linkWithIconAfter"
            href="/shop/goto/buy_apple_watch/apple_watch_series_9"
            >Buy</a
          >
        </div>
      </div>
      <div class="unit-image-wrapper" :class="heroBackgroundImageWrapper">
        <figure :class="heroFigureWrapper" />
      </div>
    </div>
  </section>
</template>

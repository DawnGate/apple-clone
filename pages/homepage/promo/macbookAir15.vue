<script setup lang="ts">
const promoWrapper = 'h-[580px] w-full overflow-hidden'

const heroContentWrapper = 'h-full w-full relative'

const heroLinkWrapper = 'h-full w-full absolute z-20'

const heroDescriptionWrapper = 'text-center relative z-30 pointer-events-none'

const linkWithIconAfter =
  "text-[17px] leading-[20/17] pointer-events-all text-link-light hover:underline after:content-['›'] after:pl-[6px] after:inline-block  [&:not(:first-child)]:ml-[35px]"

const heroFigureWrapper =
  "bg-[url('~/assets/images/promos/macbook-air-15/promo_macbook_air_15_midnight_large_2x.jpg')] bg-no-repeat bg-[length:1262px_580px] w-[1262px] h-[580px] absolute -translate-x-1/2 left-1/2"

const heroBackgroundImageWrapper = 'h-full w-full absolute top-0 z-10 '
</script>
<template>
  <div class="promo" :class="promoWrapper">
    <div data-id="macbook-air-15" :class="heroContentWrapper">
      <a href="/macbook-air-15" :class="heroLinkWrapper" />
      <div class="unit-copy-wrapper" :class="heroDescriptionWrapper">
        <h2 class="headline pt-[53px] text-footer-title">MacBook Air 15”</h2>
        <h3
          class="subhead mt-[2px] flex items-center justify-center text-footer-title"
        >
          Impressively big. Impossibly thin.
        </h3>
        <div class="relative z-20 mt-[14px]">
          <a :class="linkWithIconAfter" href="/macbook-air-15">Learn more</a>
          <a :class="linkWithIconAfter" href="/shop/goto/buy_mac/macbook_air_15"
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

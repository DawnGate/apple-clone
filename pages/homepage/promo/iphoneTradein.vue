<script setup lang="ts">
const promoWrapper = 'h-[580px] w-full overflow-hidden'

const heroContentWrapper = 'h-full w-full relative'

const heroLinkWrapper = 'h-full w-full absolute z-20'

const heroDescriptionWrapper = 'text-center relative z-30 pointer-events-none'

const linkWithIconAfter =
  "text-[17px] leading-[20/17] pointer-events-all text-link-light hover:underline after:content-['›'] after:pl-[6px] after:inline-block  [&:not(:first-child)]:ml-[35px]"

const heroFigureWrapper =
  "bg-[url('~/assets/images/promos/iphone-tradein/promo_iphone_tradein_large_2x.jpg')] bg-no-repeat bg-[length:1262px_580px] w-[1262px] h-[580px] absolute -translate-x-1/2 left-1/2"

const heroBackgroundImageWrapper = 'h-full w-full absolute top-0 z-10 '

const titleBackground =
  "bg-[url('~/assets/images/logos/iphone-tradein/logo_tradein_large_2x.png')] bg-no-repeat bg-[length:155px_32px] w-[155px] h-[32px] background-center m-auto"
</script>
<template>
  <div class="promo" :class="promoWrapper">
    <div data-id="iphone-trade-in" :class="heroContentWrapper">
      <a href="/iphone-trade-in" :class="heroLinkWrapper" />
      <div class="unit-copy-wrapper pt-[45px]" :class="heroDescriptionWrapper">
        <h4 class="headline text-footer-title" :class="titleBackground">
          <span class="hidden">Iphone Trade in</span>
        </h4>
        <h5
          class="subhead m-auto mt-[10px] max-w-[315px] text-center text-footer-title"
        >
          Get $200-$650 in credit when you trade in iPhone11 or higher.
          <sup class="footnote align-baseline text-[12px] leading-[1.25]">
            <a href="#footnote-1">1</a>
          </sup>
        </h5>
        <div class="relative z-20 mt-[14px]">
          <a :class="linkWithIconAfter" href="/iphone-trade-in"
            >See what you device is worth</a
          >
        </div>
      </div>
      <div class="unit-image-wrapper" :class="heroBackgroundImageWrapper">
        <figure :class="heroFigureWrapper" />
      </div>
    </div>
  </div>
</template>

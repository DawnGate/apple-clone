<script setup lang="ts">
const promoWrapper = 'h-[580px] w-full overflow-hidden'

const heroContentWrapper = 'h-full w-full relative'

const heroLinkWrapper = 'h-full w-full absolute z-20'

const heroDescriptionWrapper = 'text-center relative z-30 pointer-events-none'

const linkWithIconAfter =
  "text-[17px] leading-[20/17] pointer-events-all text-link-dark hover:underline after:content-['›'] after:pl-[6px] after:inline-block  [&:not(:first-child)]:ml-[35px]"

const heroFigureWrapper =
  "bg-[url('~/assets/images/promos/ipad-pro/promo_ipadpro_large_2x.jpg')] bg-no-repeat bg-[length:1262px_580px] w-[1262px] h-[580px] absolute -translate-x-1/2 left-1/2"

const heroBackgroundImageWrapper = 'h-full w-full absolute top-0 z-10 '

const spanLogoImage =
  "bg-[url('~/assets/images/logos/ipad-pro/promo_m2_chip_large_2x.png')] bg-no-repeat bg-[length:37px_37px] w-[37px] h-[37px] bg-center block ml-[4px]"
</script>
<template>
  <div class="promo" :class="promoWrapper">
    <div data-id="ipad-pro" :class="heroContentWrapper">
      <a href="/ipad-pro" :class="heroLinkWrapper" />
      <div class="unit-copy-wrapper" :class="heroDescriptionWrapper">
        <h2 class="headline pt-[53px] text-footer-background">iPad Pro</h2>
        <h3
          class="subhead mt-[2px] flex items-center justify-center text-footer-background"
        >
          Supercharged by
          <span :class="spanLogoImage" />
        </h3>
        <div class="relative z-20 mt-[14px]">
          <a :class="linkWithIconAfter" href="/ipad-pro">Learn more</a>
          <a :class="linkWithIconAfter" href="/shop/goto/buy_ipad/ipad_pro"
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

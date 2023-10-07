<script setup lang="ts">
const heroWrapper = 'h-[704px] w-full'

const heroContentWrapper = 'h-[692px] w-full relative'

const heroLinkWrapper = 'h-full w-full absolute z-20'

const heroDescriptionWrapper =
  'text-center relative z-30 pt-[47px] pointer-events-none'

const linkWithIconAfter =
  "text-[21px] pointer-events-all leading-none text-link-dark hover:underline after:content-['›'] after:pl-[6px] after:inline-block  [&:not(:first-child)]:ml-[35px]"

const heroFigureWrapper =
  "bg-[url('~/assets/images/heros/hero_iphone15pro_large_2x.jpg')] bg-no-repeat bg-[length:3080px_692px] w-[3080px] h-[692px] absolute -translate-x-1/2 left-1/2"

const heroBackgroundImageWrapper = 'h-full w-full absolute top-0 z-10'
</script>
<template>
  <section class="hero" :class="heroWrapper">
    <div data-id="iphone-15-pro" :class="heroContentWrapper">
      <a href="/iphone-15-pro" :class="heroLinkWrapper" />
      <div class="unit-copy-wrapper" :class="heroDescriptionWrapper">
        <h2 class="headline text-white">iPhone 15 Pro</h2>
        <h3 class="subhead text-white">
          Titanium. So strong. So light. So Pro.
        </h3>
        <div class="relative z-20 mt-[14px]">
          <a :class="linkWithIconAfter" href="/iphone-15-pro">Learn more</a>
          <a
            :class="linkWithIconAfter"
            href="/shop/goto/buy_iphone/iphone_15_pro"
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

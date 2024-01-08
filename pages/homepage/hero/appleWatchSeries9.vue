<script setup lang="ts">
const heroWrapper = 'w-full overflow-hidden'

const heroContentWrapper = 'h-full w-full relative'

const heroLinkWrapper = 'h-full w-full absolute z-20'

const heroDescriptionWrapper =
  'text-center relative z-30 pt-[47px] pointer-events-none'

const linkWithIconAfter =
  "text-[17px] md:text-[19px] xl:text-[21px] pointer-events-all leading-none text-link-dark hover:underline after:content-['›'] after:pl-[6px] after:inline-block  [&:not(:first-child)]:ml-[35px]"

const heroFigureWrapper = 'bg-no-repeat absolute -translate-x-1/2 left-1/2'

const headlineWrapperWithImage =
  "bg-[url('~/assets/images/logos/apple-watch-series-9/hero_logo_apple_watch_series_9_largetall_2x.png')] bg-no-repeat bg-[length:180px_73px] h-[73px] bg-center"

const heroBackgroundImageWrapper = 'h-full w-full absolute top-0 z-10'
</script>
<template>
  <div class="hero" :class="heroWrapper">
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
        <figure class="hero-image" :class="heroFigureWrapper" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  --content-height: 500px;
}

.hero-image {
  background-image: url('~/assets/images/heros/apple-watch-series-9/hero_apple_watch_series_9_small_2x.jpg');
  width: 734px;
  height: 500px;
  background-size: 734px 548px;
}

@media screen and (min-width: 735px) and (max-width: 1068px) {
  .hero {
    --content-height: 569px;
  }

  .hero-image {
    background-image: url('~/assets/images/heros/apple-watch-series-9/hero_apple_watch_series_9_mediumtall_2x.jpg');
    width: 1068px;
    height: var(--content-height);
    background-size: 1068px 617px;
  }
}

@media screen and (min-width: 1069px) and (max-width: 1440px) {
  .hero {
    --content-height: 580px;
  }

  .hero-image {
    background-image: url('~/assets/images/heros/apple-watch-series-9/hero_apple_watch_series_9_largetall_2x.jpg');
    width: 3008px;
    height: var(--content-height);
    background-size: 3008px 624px;
  }
}

@media screen and (min-width: 1441px) {
  .hero {
    --content-height: 692px;
  }

  .hero-image {
    background-image: url('~/assets/images/heros/apple-watch-series-9/hero_apple_watch_series_9_largetall_2x.jpg');
    width: 3008px;
    height: var(--content-height);
    background-size: 3008px 736px;
  }
}

.hero {
  --section-height: calc(var(--content-height) + 12px);
  height: var(--section-height);
}

.hero-content {
  height: var(--content-height);
}
</style>

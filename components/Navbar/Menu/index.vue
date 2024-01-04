<script setup lang="ts">
import { globalStore } from '~/store/global'

import { menus } from '../data.ts'

const handleOpenMenu = (nameOfItem: string) => {
  const haveMenuItem = menus[nameOfItem]

  if (haveMenuItem) {
    globalStore.showMenu(nameOfItem, 200)
  } else [globalStore.showMenu(null)]
}

const handleMouseLeave = () => {
  if (globalStore.menuOpenNameDelay) {
    clearTimeout(globalStore.menuOpenNameDelay)
  }
}
</script>

<template>
  <div class="navbar-contents">
    <a
      class="navbar-link"
      @mouseenter="handleOpenMenu('store')"
      @mouseleave="handleMouseLeave"
      href="/store"
    >
      <span>
        <img
          class="icon-navbar"
          src="~/assets/icons/navbar/store.svg"
          alt="store"
        />
      </span>
    </a>
    <a
      class="navbar-link"
      @mouseenter="handleOpenMenu('mac')"
      @mouseleave="handleMouseLeave"
      href="/mac"
    >
      <span>
        <img
          class="icon-navbar"
          src="~/assets/icons/navbar/mac.svg"
          alt="mac"
        />
      </span>
    </a>
    <div
      class="navbar-link"
      @mouseenter="handleOpenMenu('ipad')"
      @mouseleave="handleMouseLeave"
    >
      <span>
        <img
          class="icon-navbar"
          src="~/assets/icons/navbar/ipad.svg"
          alt="ipad"
        />
      </span>
    </div>
    <div
      class="navbar-link"
      @mouseenter="handleOpenMenu('iphone')"
      @mouseleave="handleMouseLeave"
    >
      <span>
        <img
          class="icon-navbar"
          src="~/assets/icons/navbar/iphone.svg"
          alt="iphone"
        />
      </span>
    </div>
    <div
      class="navbar-link"
      @mouseenter="handleOpenMenu('watch')"
      @mouseleave="handleMouseLeave"
    >
      <span>
        <img
          class="icon-navbar"
          src="~/assets/icons/navbar/watch.svg"
          alt="watch"
        />
      </span>
    </div>
    <div
      class="navbar-link"
      @mouseenter="handleOpenMenu('vision')"
      @mouseleave="handleMouseLeave"
    >
      <span>
        <img
          class="icon-navbar"
          src="~/assets/icons/navbar/vision.svg"
          alt="vision"
        />
      </span>
    </div>
    <div
      class="navbar-link"
      @mouseenter="handleOpenMenu('airpods')"
      @mouseleave="handleMouseLeave"
    >
      <span>
        <img
          class="icon-navbar"
          src="~/assets/icons/navbar/airpods.svg"
          alt="airpods"
        />
      </span>
    </div>
    <div
      class="navbar-link"
      @mouseenter="handleOpenMenu('tv&home')"
      @mouseleave="handleMouseLeave"
    >
      <span>
        <img
          class="icon-navbar"
          src="~/assets/icons/navbar/tv&Home.svg"
          alt="tv&home"
        />
      </span>
    </div>
    <div
      class="navbar-link"
      @mouseenter="handleOpenMenu('entertainment')"
      @mouseleave="handleMouseLeave"
    >
      <span>
        <img
          class="icon-navbar"
          src="~/assets/icons/navbar/entertainment.svg"
          alt="entertainment"
        />
      </span>
    </div>
    <div
      class="navbar-link"
      @mouseenter="handleOpenMenu('accessories')"
      @mouseleave="handleMouseLeave"
    >
      <span>
        <img
          class="icon-navbar"
          src="~/assets/icons/navbar/accessories.svg"
          alt="accessories"
        />
      </span>
    </div>
    <div
      class="navbar-link"
      @mouseenter="handleOpenMenu('support')"
      @mouseleave="handleMouseLeave"
    >
      <span class="text-navbar-text">
        <img
          class="icon-navbar"
          src="~/assets/icons/navbar/support.svg"
          alt="support"
        />
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.icon-navbar {
  min-width: 23px;
}

.navbar-link {
  cursor: pointer;
  z-index: 1;
  position: relative;
}

.navbar-contents {
  visibility: hidden;
  position: absolute;
}

@media screen and (min-width: 834px) {
  .navbar-contents {
    display: contents;

    visibility: visible;
  }
}
</style>

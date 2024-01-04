<script setup lang="ts">
import NavbarMenu from './Menu/index.vue'
import NavbarMenuContent from './MenuContent/index.vue'

import { globalStore } from '~/store/global'

import { NAVBAR_HEIGHT, GLOBAL_FLYOUT_SPACING } from './constants'

const navbarHeightPixel = `${NAVBAR_HEIGHT}px`
const globalFlyoutSpacing = `${GLOBAL_FLYOUT_SPACING}px`

const handleCloseMenu = () => {
  globalStore.showMenu(null)
}
</script>

<template>
  <div
    id="menuGlobal"
    :class="{ open: Boolean(globalStore.menuOpenName) }"
    class="menu-global"
    :style="{
      '--r-navbar-height': navbarHeightPixel,
      '--r-global-flyout-spacing': globalFlyoutSpacing,
    }"
  >
    <nav
      class="fixed z-[9999] w-full bg-navbar-background"
      @mouseleave="handleCloseMenu"
    >
      <div class="nav-content mx-auto max-w-[1024px] lg:px-[22px]">
        <ul class="mx-0 flex justify-between lg:-mx-2">
          <li class="nav-item-logo">
            <a
              href="/"
              class="menu-nav-item align-center flex px-2"
              @mouseenter="handleCloseMenu"
            >
              <span>
                <img
                  src="~/assets/icons/apple-regular.svg"
                  alt="apple-icon"
                  class="hidden lg:block"
                />
                <img
                  src="~/assets/icons/apple-compact.svg"
                  alt="apple-icon"
                  class="block lg:hidden"
                />
              </span>
            </a>
          </li>
          <li class="contents"><NavbarMenu /></li>
          <li>
            <a
              href="/us/search"
              class="menu-nav-item align-center flex px-2"
              @mouseenter="handleCloseMenu"
            >
              <span>
                <img
                  src="~/assets/icons/search-regular.svg"
                  alt="search-icon"
                  class="hidden lg:block"
                />
                <img
                  src="~/assets/icons/search-compact.svg"
                  alt="search-icon"
                  class="block lg:hidden"
                />
              </span>
            </a>
          </li>
          <li>
            <a
              href="/us/shop/goto/bag"
              class="menu-nav-item align-center flex px-2"
              @mouseenter="handleCloseMenu"
            >
              <span>
                <img
                  src="~/assets/icons/bag-regular.svg"
                  alt="search-icon"
                  class="hidden lg:block"
                />
                <img
                  src="~/assets/icons/bag-compact.svg"
                  alt="search-icon"
                  class="block lg:hidden"
                />
              </span>
            </a>
          </li>
          <div class="globalnav-menutrigger block lg:hidden">
            <button class="globalnav-menutrigger-button">
              <svg width="18" height="18" viewBox="0 0 18 18">
                <polyline
                  id="globalnav-menutrigger-bread-bottom"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  points="2 12, 16 12"
                  class="globalnav-menutrigger-bread globalnav-menutrigger-bread-bottom"
                >
                  <animate
                    id="globalnav-anim-menutrigger-bread-bottom-open"
                    attributeName="points"
                    keyTimes="0;0.5;1"
                    dur="0.24s"
                    begin="indefinite"
                    fill="freeze"
                    calcMode="spline"
                    keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                    values=" 2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5"
                  ></animate>
                  <animate
                    id="globalnav-anim-menutrigger-bread-bottom-close"
                    attributeName="points"
                    keyTimes="0;0.5;1"
                    dur="0.24s"
                    begin="indefinite"
                    fill="freeze"
                    calcMode="spline"
                    keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                    values=" 3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12"
                  ></animate>
                </polyline>
                <polyline
                  id="globalnav-menutrigger-bread-top"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  points="2 5, 16 5"
                  class="globalnav-menutrigger-bread globalnav-menutrigger-bread-top"
                >
                  <animate
                    id="globalnav-anim-menutrigger-bread-top-open"
                    attributeName="points"
                    keyTimes="0;0.5;1"
                    dur="0.24s"
                    begin="indefinite"
                    fill="freeze"
                    calcMode="spline"
                    keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                    values=" 2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"
                  ></animate>
                  <animate
                    id="globalnav-anim-menutrigger-bread-top-close"
                    attributeName="points"
                    keyTimes="0;0.5;1"
                    dur="0.24s"
                    begin="indefinite"
                    fill="freeze"
                    calcMode="spline"
                    keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                    values=" 3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5"
                  ></animate>
                </polyline>
              </svg>
            </button>
          </div>
        </ul>
      </div>
      <NavbarMenuContent />
    </nav>
    <div class="menu-global-curtain fixed inset-0 h-screen w-screen"></div>
    <div class="menu-global-placeholder"></div>
  </div>
</template>

<style lang="css">
:root {
  --globalnav-backdrop-filter: blur(20px);
  --globalnav-background: rgba(232, 232, 237, 0.4);
  --globalnav-background-content: rgba(250, 250, 252);
  --r-globalnav-flyout-rate: 240ms;
  --reset-color: rgba(0, 0, 0, 0);
}

.nav-content ul {
  height: 100%;
}

.nav-content ul li {
  min-width: 48px;
}

.menu-nav-item {
  height: 48px;
}

.nav-item-logo {
  flex: 1;
}

.nav-item-logo .menu-nav-item {
  width: 48px;
}

.menu-nav-item {
  position: relative;
  z-index: 1;
  justify-content: center;
}

@media screen and (min-width: 834px) {
  .nav-content ul li {
    min-width: 44px;
    height: 44px;
  }

  .nav-item-logo {
    flex: 0;
  }
}

.menu-global-curtain {
  z-index: 9998;
  backdrop-filter: var(--globalnav-backdrop-filter);
  background-color: var(--globalnav-background);
  transition:
    opacity 0.32s cubic-bezier(0.4, 0, 0.6, 1) 80ms,
    visibility 0.32s step-end 80ms;
  visibility: hidden;
  opacity: 0;
}

.menu-global.open .menu-global-curtain {
  visibility: visible;
  opacity: 1;
  transition:
    opacity 0.32s cubic-bezier(0.4, 0, 0.6, 1) 80ms,
    visibility 0.32s step-start 80ms;
}

.menu-global-placeholder {
  height: var(--r-navbar-height);
}

.globalnav-menutrigger-button {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
}
</style>

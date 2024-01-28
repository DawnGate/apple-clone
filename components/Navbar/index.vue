<script setup lang="ts">
import { ref } from 'vue'
import NavbarMenu from './Menu/index.vue'
import NavbarMenuContent from './MenuContent/index.vue'

import { globalStore } from '~/store/global'

import { screenBreakpoints } from '~/utils/screenBreakpoints'
import {
  NAVBAR_HEIGHT,
  GLOBAL_FLYOUT_SPACING,
  NAVBAR_HEIGHT_MOBILE,
  FLYOUT_RATE,
  FLYOUT_RATE_MOBILE,
} from './constants'
import debounce from '~/utils/debounce'

const navbarHeight = ref(NAVBAR_HEIGHT)
const timeoutRef = ref()
const flyoutRate = ref(FLYOUT_RATE)
const currentScrollBarWidth = ref(0)

const showMobileMenu = ref(false)

const globalFlyoutSpacing = `${GLOBAL_FLYOUT_SPACING}px`

const handleCloseMenu = () => {
  globalStore.showMenu(null)
}

const handleMouseLeaveNav = () => {
  if (window.innerWidth > screenBreakpoints.lg) {
    handleCloseMenu()
  }
}

const handleClickToggleMenu = () => {
  const triggerBottomOpen = document.getElementById(
    'globalnav-anim-menutrigger-bread-bottom-open'
  ) as SVGAnimateElement | null
  const triggerBottomClose = document.getElementById(
    'globalnav-anim-menutrigger-bread-bottom-close'
  ) as SVGAnimateElement | null
  const triggerTopOpen = document.getElementById(
    'globalnav-anim-menutrigger-bread-top-open'
  ) as SVGAnimateElement | null
  const triggerTopClose = document.getElementById(
    'globalnav-anim-menutrigger-bread-top-close'
  ) as SVGAnimateElement | null

  if (triggerBottomOpen && triggerTopOpen && !showMobileMenu.value) {
    triggerBottomOpen.beginElement()
    triggerTopOpen.beginElement()
  }

  if (triggerBottomClose && triggerTopClose && showMobileMenu.value) {
    triggerBottomClose.beginElement()
    triggerTopClose.beginElement()
  }

  showMobileMenu.value = !showMobileMenu.value
  handleCloseMenu()
}

watch(
  () => globalStore.windowWidth,
  (newWidth) => {
    debounce(
      () => {
        if (newWidth > screenBreakpoints.lg) {
          navbarHeight.value = NAVBAR_HEIGHT
          flyoutRate.value = FLYOUT_RATE
          if (showMobileMenu.value) {
            showMobileMenu.value = false
          }
        } else {
          navbarHeight.value = NAVBAR_HEIGHT_MOBILE
          flyoutRate.value = FLYOUT_RATE_MOBILE
        }
      },
      100,
      timeoutRef
    )
  }
)

watch(showMobileMenu, (isShow) => {
  if (isShow) {
    document.getElementsByTagName('body')[0].style.overflow = 'hidden'
  } else {
    document.getElementsByTagName('body')[0].style.removeProperty('overflow')
  }
})

watch(
  () => globalStore.scrollBarWidth,
  (scrollbarWidth) => {
    currentScrollBarWidth.value = scrollbarWidth
  }
)
</script>

<template>
  <div
    id="menuGlobal"
    :class="{
      open: Boolean(globalStore.menuOpenName),
      openMobile: showMobileMenu,
    }"
    class="menu-global"
    :style="{
      '--r-navbar-height': `${navbarHeight}px`,
      '--r-global-flyout-spacing': globalFlyoutSpacing,
      '--r-globalnav-flyout-rate': `${flyoutRate}ms`,
      '--r-globalnav-scrollbar-width': `${currentScrollBarWidth}px`,
    }"
  >
    <nav
      class="fixed z-[9999] w-full bg-navbar-background"
      @mouseleave="handleMouseLeaveNav"
    >
      <div class="nav-content mx-auto max-w-[1024px] lg:px-[22px]">
        <ul class="mx-0 flex justify-between lg:-mx-2">
          <li class="nav-mobile-hidden nav-item-logo">
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
          <li class="navbar-menu block lg:contents"><NavbarMenu /></li>
          <li class="nav-mobile-hidden">
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
          <li class="nav-mobile-hidden">
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
          <div class="globalnav-menutrigger z-20 block lg:hidden">
            <button
              class="globalnav-menutrigger-button"
              @click="handleClickToggleMenu"
            >
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
          <div class="globalnav-back z-20 hidden">
            <button class="globalnav-back-button" @click="handleCloseMenu">
              <svg
                height="48"
                viewBox="0 0 9 48"
                width="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m1.5618 24.0621 6.5581-6.4238c.2368-.2319.2407-.6118.0088-.8486-.2324-.2373-.6123-.2407-.8486-.0088l-7 6.8569c-.1157.1138-.1807.2695-.1802.4316.001.1621.0674.3174.1846.4297l7 6.7241c.1162.1118.2661.1675.4155.1675.1577 0 .3149-.062.4326-.1846.2295-.2388.2222-.6187-.0171-.8481z"
                ></path>
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
  --reset-color: rgba(0, 0, 0, 0);
  --globalnav-mobile-backdrop-filter: saturate(180%) blur(20px);
}

.nav-content ul {
  height: 100%;
}

.nav-content ul li {
  min-width: 48px;
}

.nav-item-logo {
  flex: 1;
}

.nav-item-logo .menu-nav-item {
  width: 48px;
}

.menu-nav-item {
  height: 48px;
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

.menu-global.open .menu-global-curtain,
.menu-global.openMobile .menu-global-curtain {
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

.globalnav-back-button {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 833px) {
  .menu-global .navbar-menu {
    flex: 1;
  }

  .menu-global > nav {
    height: var(--r-navbar-height);
    background: transparent;
    transition:
      height var(--r-globalnav-flyout-rate) cubic-bezier(0.4, 0, 0.6, 1) 80ms,
      background var(--r-globalnav-flyout-rate) cubic-bezier(0.4, 0, 0.6, 1)
        80ms;
    backdrop-filter: var(--globalnav-mobile-backdrop-filter);
  }

  .menu-global.openMobile > nav {
    overflow: auto;
    height: 100dvh;
    background: var(--r-globalnav-background-opened);
  }

  .menu-global.openMobile .navbar-menu {
    z-index: 10;
    padding-top: var(--r-navbar-height);
  }

  .menu-global.openMobile .nav-content ul {
    padding-right: var(--r-globalnav-scrollbar-width);
  }

  .menu-global.openMobile .nav-mobile-hidden {
    display: none;
  }

  .menu-global.openMobile .globalnav-menutrigger {
    position: absolute;
    top: 0;
    right: 0;
  }

  .menu-global.open.openMobile .globalnav-back {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>

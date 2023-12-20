<script setup lang="ts">
import { ref, watch } from 'vue'

import NavbarMenu from './Menu/index.vue'
import MenuContent from './MenuContent/index.vue'

import { globalStore } from '~/store/global'

const navData: {
  [key: string]: {
    height: number
  }
} = {
  store: {
    height: 500,
  },
  mac: {
    height: 300,
  },
  ipad: {
    height: 400,
  },
  iphone: {
    height: 450,
  },
}

const menuContentHeight = ref('0')
const prevMenuContentHeight = ref('0')

const handleCloseMenu = () => {
  globalStore.hideMenu()
}

watch(
  () => globalStore.menuOpenName,
  (newValue) => {
    prevMenuContentHeight.value = menuContentHeight.value
    if (!newValue) {
      menuContentHeight.value = '0'
    } else {
      menuContentHeight.value = `${navData[newValue].height}px`
    }
  }
)
</script>

<template>
  <div
    id="menuGlobal"
    :class="{ open: Boolean(globalStore.menuOpenName) }"
    class="menu-global"
  >
    <nav
      class="fixed z-[9999] w-full bg-navbar-background backdrop-blur"
      @mouseleave="handleCloseMenu"
    >
      <div class="nav-content mx-auto max-w-[1024px] px-[22px]">
        <ul class="-mx-2 flex justify-between">
          <li>
            <a
              href="/"
              class="align-center flex px-2"
              @mouseenter="handleCloseMenu"
            >
              <span>
                <img src="~/assets/icons/apple-regular.svg" alt="apple-icon" />
              </span>
            </a>
          </li>
          <li class="contents"><NavbarMenu /></li>
          <li>
            <a
              href="/us/search"
              class="align-center flex px-2"
              @mouseenter="handleCloseMenu"
            >
              <span>
                <img
                  src="~/assets/icons/search-regular.svg"
                  alt="search-icon"
                />
              </span>
            </a>
          </li>
          <li>
            <a
              href="/us/shop/goto/bag"
              class="align-center flex px-2"
              @mouseenter="handleCloseMenu"
            >
              <span>
                <img src="~/assets/icons/bag-regular.svg" alt="search-icon" />
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div class="menu-content">
        <div class="menu-content-support"></div>
        <Transition>
          <div
            class="menu-content-links"
            v-show="Boolean(globalStore.menuOpenName)"
          >
            <MenuContent />
          </div>
        </Transition>
      </div>
    </nav>
    <div class="menu-global-curtain fixed inset-0 h-screen w-screen"></div>
  </div>
</template>

<style lang="css">
:root {
  --globalnav-backdrop-filter: blur(20px);
  --globalnav-background: rgba(232, 232, 237, 0.4);
  --globalnav-background-content: rgba(250, 250, 252);
  --r-globalnav-flyout-rate: 240ms;
  --reset-color: rgba(0, 0, 0, 0);
  --navbar-height: 44px;
  --r-globalnav-flyout-spacing: 88px;
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

.menu-content-links {
  height: v-bind(menuContentHeight);
  max-height: calc(
    100vh - var(--r-globalnav-flyout-spacing) - var(--navbar-height)
  );

  overflow: hidden;

  background: var(--reset-color);
}

.menu-content-links.v-enter-active {
  transition:
    height var(--r-globalnav-flyout-rate) cubic-bezier(0.4, 0, 0.6, 1) 0.12s,
    visibility var(--r-globalnav-flyout-rate) step-start 0.12s,
    background var(--r-globalnav-flyout-rate) cubic-bezier(0.4, 0, 0.6, 1) 0.12s;
}

.menu-content-links.v-leave-active {
  transition:
    height var(--r-globalnav-flyout-rate) cubic-bezier(0.4, 0, 0.6, 1) 0.12s,
    visibility var(--r-globalnav-flyout-rate) step-end 0.12s,
    background var(--r-globalnav-flyout-rate) cubic-bezier(0.4, 0, 0.6, 1) 0.12s;
}

.menu-content-links.v-enter-from {
  height: v-bind(prevMenuContentHeight);

  visibility: hidden;
  background: var(--reset-color);
}

.menu-content-links.v-enter-to {
  height: v-bind(menuContentHeight);
  background: var(--globalnav-background-content);

  visibility: visible;
}

.menu-content-links.v-leave-from {
  height: v-bind(prevMenuContentHeight);
  background: var(--globalnav-background-content);

  visibility: visible;
}

.menu-content-links.v-leave-to {
  height: v-bind(menuContentHeight);

  visibility: hidden;
  background: var(--reset-color);
}
</style>

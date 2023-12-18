<script setup lang="ts">
import NavbarMenu from './Menu/index.vue'
import MenuContent from './MenuContent/index.vue'

import { globalStore } from '~/store/global'

const handleCloseMenu = () => {
  globalStore.hideMenu()
}
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
        <ul class="flex justify-between">
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
        <div class="menu-content-links">
          <MenuContent />
        </div>
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
  height: 0;

  visibility: hidden;
  background: var(--reset-color);

  transition:
    height var(--r-globalnav-flyout-rate) cubic-bezier(0.4, 0, 0.6, 1),
    visibility var(--r-globalnav-flyout-rate) step-end,
    background var(--r-globalnav-flyout-rate) cubic-bezier(0.4, 0, 0.6, 1);
}

.menu-global.open .menu-content-links {
  background: var(--globalnav-background-content);
  height: 200px;
  visibility: visible;

  transition:
    height var(--r-globalnav-flyout-rate) cubic-bezier(0.4, 0, 0.6, 1),
    visibility var(--r-globalnav-flyout-rate) step-start,
    background var(--r-globalnav-flyout-rate) cubic-bezier(0.4, 0, 0.6, 1);
}
</style>

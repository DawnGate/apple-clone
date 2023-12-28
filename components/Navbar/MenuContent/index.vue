<script setup lang="ts">
import { ref, watch } from 'vue'

import { globalStore } from '~/store/global'
import { menus, MenuItem } from '../data.ts'

const currentMenuData = ref<MenuItem | null>(null)

const currentScrollBarWidth = ref(0)

const openMenu = ref(false)

const toggleMenu = () => {
  openMenu.value = !openMenu.value
}

watch(
  () => globalStore.menuOpenName,
  (menuName) => {
    if (menuName) {
      currentMenuData.value = menus[menuName]
    } else {
      currentMenuData.value = null
    }
  }
)

watch(
  () => globalStore.scrollBarWidth,
  (scrollbarWidth) => {
    currentScrollBarWidth.value = scrollbarWidth
  }
)
</script>

<template>
  <Transition name="menu-content">
    <div
      class="menu-content"
      v-if="openMenu"
      :style="{
        '--r-globalnav-scrollbar-width': `${currentScrollBarWidth}px`,
      }"
    >
      <div
        class="content-container px-22 mx-auto max-w-[1024px] px-[22px] pb-20 pt-10"
      >
        <p>Hello</p>
      </div>
    </div>
  </Transition>
  <button @click="toggleMenu" style="position: fixed; background-color: red">
    click
  </button>
  <!-- <div
    class="content-container px-22 mx-auto max-w-[1024px] px-[22px] pb-20 pt-10"
    :style="{
      '--r-globalnav-flyout-elevated-group-count': 1,
      '--r-globalnav-flyout-group-total': currentMenuData?.groups.length,
      '--r-globalnav-flyout-item-total':
        currentMenuData?.groupElevated.items.length,
    }"
  >
    <div class="flex flex-row">
      <div class="submenu-group group-elevated">
        <h2 class="header">{{ currentMenuData?.groupElevated.title }}</h2>
        <ul class="submenu-link-lists">
          <li
            v-for="(item, index) in currentMenuData?.groupElevated.items"
            :style="{ '--r-globalnav-flyout-item-number': index + 1 }"
            :class="{
              'group-elevated-small': item.isSmall,
              'group-elevated-normal': !item.isSmall,
            }"
          >
            <a
              :class="item.isSmall ? 'submenu-link-small' : 'submenu-link'"
              :href="item.url"
              >{{ item.title }}</a
            >
          </li>
        </ul>
      </div>
      <div
        v-for="subMenuGroup in currentMenuData?.groups"
        class="submenu-group"
      >
        <h2 class="header">{{ subMenuGroup.title }}</h2>
        <ul class="submenu-link-lists">
          <li v-for="item in subMenuGroup.items">
            <a class="submenu-link-small" :href="item.url">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div> -->
</template>

<style>
:root {
  --submenu-group-header-color: rgb(110, 100, 115);
  --submenu-link-color: #333336;
  --global-menu-group-delay: 80ms;
  --r-globalnav-flyout-group-delay: 40ms;
  --globalnav-background: rgb(250, 250, 252);
  --r-globalnav-background-opened: #fafafa;
  --r-globalnav-flyout-rate: 240ms;
}

.content-container {
  margin-top: var(--r-navbar-height);
}

.submenu-group {
  max-width: 25%;
  padding-right: 44px;
}

.submenu-group.group-elevated {
  max-width: 50%;
  padding-right: 88px;
}

.submenu-group .header {
  color: var(--submenu-group-header-color);
  font-size: 12px;
  line-height: 4/3;
  font-weight: 400;
  letter-spacing: -0.01em;

  opacity: 0;
  transform: translateY(-4px);

  transition-property: opacity, transform;
  transition-duration: 0.16s;
}

.menu-global.open .submenu-group .header {
  opacity: 1;
  transform: translateY(0px);

  transition-duration: 0.32s;
  transition-delay: calc(var(--global-menu-group-delay) + 80ms);
}

.submenu-group .submenu-link-lists {
  margin-top: 6px;
}

.submenu-group .submenu-link {
  color: var(--submenu-link-color);

  display: block;
  padding-top: 9px;
  padding-bottom: 7px;

  font-size: 24px;
  line-height: 1.1667;
  letter-spacing: 0.009em;
  font-weight: 600;
}

.submenu-group .submenu-link-small {
  color: var(--submenu-link-color);

  display: block;
  padding-top: 9px;
  padding-bottom: 7px;

  font-size: 12px;
  line-height: 4/3;
  font-weight: 600;
}

.menu-content {
  max-height: calc(100vh - var(--r-global-flyout-spacing));
  background-color: var(--r-globalnav-background-opened);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  width: auto;
  height: 500px;
  visibility: visible;
}

.menu-content-enter-active {
  transition: height var(--r-globalnav-flyout-rate) cubic-bezier(0.4, 0, 0.6, 1);
}

.menu-content-leave-active {
  transition:
    height var(--r-globalnav-flyout-rate) cubic-bezier(0.4, 0, 0.6, 1),
    visibility var(--r-globalnav-flyout-rate) step-end,
    background var(--r-globalnav-flyout-rate) cubic-bezier(0.4, 0, 0.6, 1);
}

.menu-content-enter-from,
.menu-content-leave-to {
  visibility: hidden;
  height: 44px;
  background: var(--globalnav-background);
}

.menu-content-enter-to,
.menu-content-leave-from {
  visibility: visible;
  height: 400px;
  background: var(--r-globalnav-background-opened);
}
</style>

<script setup lang="ts">
import { ref, watch } from 'vue'

import { globalStore } from '~/store/global'
import { menus, MenuItem } from '../data.ts'

const currentMenuData = ref<MenuItem | null>(null)

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
</script>

<template>
  <div
    class="content-container px-22 mx-auto max-w-[1024px] px-[22px] pb-20 pt-12"
  >
    <div class="flex flex-row">
      <div class="submenu-group group-elevated">
        <h2 class="header">{{ currentMenuData?.groupElevated.title }}</h2>
        <ul class="submenu-link-lists">
          <li v-for="item in currentMenuData?.groupElevated.items">
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
  </div>
</template>

<style>
:root {
  --submenu-group-header-color: rgb(110, 100, 115);
  --submenu-link-color: #333336;
  --global-menu-group-delay: 80ms;
  --r-globalnav-scrollbar-width: 16px;
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
</style>

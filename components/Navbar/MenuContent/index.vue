<script setup lang="ts">
import { ref, watch } from 'vue'

import { globalStore } from '~/store/global'
import { menus, MenuItem } from '../data.ts'

import { NAVBAR_HEIGHT, GLOBAL_FLYOUT_SPACING } from '../constants'

const currentMenuData = ref<MenuItem | null>(null)

const menuContentRef = ref<HTMLDivElement | null>(null)

const currentScrollBarWidth = ref(0)

function onBeforeEnter(el: Element) {
  el.classList.add('open')
}

function onAfterEnter(el: Element) {
  el.classList.add('opened')
}

function onLeave(el: Element, done: () => void) {
  el.classList.remove('open')
  el.classList.remove('opened')
}

const toggleShowOverflowContent = (el: Element) => {
  const maxContentHeight =
    window.innerHeight - NAVBAR_HEIGHT - GLOBAL_FLYOUT_SPACING
  const currentContentHeight = currentMenuData.value?.height ?? 0
  if (maxContentHeight < currentContentHeight) {
    el.classList.add('overflow-show')
  } else {
    el.classList.remove('overflow-show')
  }
}

function onEnter(el: Element, done: () => void) {
  toggleShowOverflowContent(el)
}

watch(
  () => globalStore.menuOpenName,
  (menuName) => {
    if (menuName) {
      currentMenuData.value = menus[menuName]
    } else {
      currentMenuData.value = null
    }

    if (menuContentRef.value) {
      toggleShowOverflowContent(menuContentRef.value)
    }
  }
)
</script>

<template>
  <Transition
    name="menu-content"
    @after-enter="onAfterEnter"
    @before-enter="onBeforeEnter"
    @leave="onLeave"
    @enter="onEnter"
  >
    <div
      class="menu-content"
      v-if="Boolean(globalStore.menuOpenName && currentMenuData)"
      :style="{
        '--r-content-height': `${currentMenuData?.height}px`,
      }"
      ref="menuContentRef"
    >
      <div
        class="content-container mx-auto max-w-[1024px] px-12 pb-0 pt-6 lg:px-[22px] lg:pb-20 lg:pt-12"
        :style="{
          '--r-globalnav-flyout-elevated-group-count': `${
            currentMenuData?.groupElevated ? 1 : 0
          }`,
        }"
      >
        <div class="flex flex-col flex-wrap md:flex-row lg:flex-nowrap">
          <div
            class="submenu-group group-elevated"
            :style="{
              '--r-globalnav-flyout-group-number': 0,
            }"
          >
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
            v-for="(subMenuGroup, gIndex) in currentMenuData?.groups"
            class="submenu-group"
            :style="{
              '--r-globalnav-flyout-group-number': gIndex + 1,
            }"
          >
            <h2 class="header">{{ subMenuGroup.title }}</h2>
            <ul class="submenu-link-lists">
              <li
                v-for="(item, index) in subMenuGroup.items"
                :style="{ '--r-globalnav-flyout-item-number': index + 1 }"
              >
                <a class="submenu-link-small" :href="item.url">{{
                  item.title
                }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
:root {
  --submenu-group-header-color: rgb(110, 100, 115);
  --submenu-link-color: #333336;
  --global-menu-group-delay: 80ms;
  --globalnav-background: rgb(250, 250, 252);
  --r-globalnav-background-opened: #fafafc;
  --r-globalnav-flyout-rate: 240ms;
}

.submenu-group {
  max-width: 25%;
  padding-right: 44px;

  --r-globalnav-flyout-group-delay: min(
    (var(--r-globalnav-flyout-elevated-group-count) * 80ms) +
      (
        (
            var(--r-globalnav-flyout-group-number) -
              var(--r-globalnav-flyout-elevated-group-count)
          ) * 40ms
      ),
    var(--r-globalnav-flyout-group-number) * 80ms
  );
}

.submenu-group.group-elevated {
  max-width: 50%;
  padding-right: 88px;
}

.submenu-group .header {
  color: var(--submenu-group-header-color);
  font-size: 12px;
  line-height: 1.3333;
  font-weight: 400;
  letter-spacing: -0.01em;

  opacity: 0;
  transform: translateY(-4px);

  transition-property: opacity, transform;
  transition-duration: 0.32s;
  transition-delay: calc(var(--r-globalnav-flyout-group-delay) + 80ms);
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
  line-height: 1.3333;
  font-weight: 600;
}

a.submenu-link,
a.submenu-link-small {
  opacity: 0;
  transform: translateY(-4px);

  transition-property: opacity, transform;
  transition-duration: 0.32s;
  transition-delay: calc(
    var(--r-globalnav-flyout-group-delay) +
      var(--r-globalnav-flyout-item-number) * 20ms + 80ms
  );
}

.menu-content {
  max-height: calc(
    100vh - var(--r-global-flyout-spacing) - var(--r-navbar-height)
  );
  background-color: var(--r-globalnav-background-opened);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: auto;
  height: 500px;
  visibility: visible;

  margin-top: var(--r-navbar-height);

  overflow: hidden;
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
  height: 0px;
  background: var(--globalnav-background);
}

.menu-content-enter-to,
.menu-content-leave-from {
  visibility: visible;
  height: var(--r-content-height);
  background: var(--r-globalnav-background-opened);
}

.overflow-show.menu-content.open {
  overflow-y: auto;
}
.overflow-show.menu-content.open .content-container {
  max-width: calc(1024px - var(--r-globalnav-scrollbar-width));
}

.menu-content-enter-to .submenu-group .header,
.menu-content.open.opened .submenu-group .header {
  opacity: 1;
  transform: translateY(0);
}

.menu-content-enter-to a.submenu-link,
.menu-content-enter-to a.submenu-link-small,
.menu-content.open.opened a.submenu-link,
.menu-content.open.opened a.submenu-link-small {
  opacity: 1;
  transform: translateY(0);
}

@media screen and (max-width: 833px) and (min-width: 641px) {
  .submenu-group {
    max-width: 50%;
  }

  .submenu-group.group-elevated {
    max-width: 75%;
    flex-basis: 75%;
    margin-right: 96px;
  }
}

@media screen and (max-width: 834px) {
  .menu-global.open.openMobile .menu-content {
    height: auto;
  }

  .menu-content {
    max-height: none;
    z-index: 10;
  }
  .submenu-group {
    padding-bottom: 92px;
  }

  .submenu-group.group-elevated {
    padding-bottom: 52px;
  }

  .submenu-group .submenu-link {
    font-size: 28px;
    line-height: 1.14;
  }

  .submenu-group .submenu-link-small {
    font-size: 17px;
    line-height: 1.47;
  }

  .submenu-group .header {
    font-size: 17px;
    line-height: 1.23;
  }
}

@media screen and (max-width: 640px) {
  .submenu-group,
  .submenu-group.group-elevated {
    margin: 0;
    max-width: 100%;
  }
}
</style>

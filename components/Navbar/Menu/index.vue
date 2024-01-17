<script setup lang="ts">
import { globalStore } from '~/store/global'

import { menus } from '../data.ts'

const handleOpenMenu = (nameOfItem: string) => {
  const haveMenuItem = menus[nameOfItem]

  if (haveMenuItem) {
    globalStore.showMenu(nameOfItem, 200)
  } else {
    globalStore.showMenu(null)
  }
}

const handleMouseLeave = () => {
  if (globalStore.menuOpenNameDelay) {
    clearTimeout(globalStore.menuOpenNameDelay)
  }
}

const links = [
  {
    link: 'store',
    title: 'Store',
  },
  {
    link: 'mac',
    title: 'Mac',
  },
  {
    link: 'ipad',
    title: 'Ipad',
  },
  {
    link: 'iphone',
    title: 'Iphone',
  },
  {
    link: 'watch',
    title: 'Watch',
  },
  {
    link: 'vision',
    title: 'Vision',
  },
  {
    link: 'airpods',
    title: 'Airpods',
  },
  {
    link: 'tv&home',
    title: 'TV & Home',
  },
  {
    link: 'entertainment',
    title: 'Entertainment',
  },
  {
    link: 'accessories',
    title: 'Accessories',
  },
  {
    link: 'support',
    title: 'Support',
  },
]
</script>

<template>
  <div class="navbar-contents">
    <div
      v-for="(item, index) in links"
      class="navbar-link-container"
      :style="{
        '--r-globalnav-flyout-item-number': index + 1,
      }"
    >
      <a
        class="navbar-link hidden md:block"
        @mouseenter="handleOpenMenu(item.link)"
        @mouseleave="handleMouseLeave"
        :href="'/' + item.link"
      >
        <span>
          <img
            class="icon-navbar"
            :src="'/icons/navbar/' + item.link + '.svg'"
            :alt="item.link"
          />
        </span>
      </a>
      <div class="navbar-link-mobile block md:hidden">
        <div class="title-navbar">
          <p>{{ item.title }}</p>
        </div>
      </div>
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

@media screen and (max-width: 833px) {
  .navbar-contents {
    width: 100%;
  }

  .menu-global.openMobile .navbar-contents {
    visibility: visible;
    padding-bottom: 84px;
  }

  .navbar-link-mobile {
    --r-globalnav-color-secondary: #333333;
    padding: 3px 48px;

    .title-navbar {
      padding: 7.5px 0;
      color: var(--r-globalnav-color-secondary);
      p {
        font-size: 28px;
        line-height: 1.14;
        font-weight: 600;
      }
    }
  }

  .navbar-link-container {
    opacity: 0;
    transform: translateY(-8px);
    transition-delay: calc(0.2s + var(--r-globalnav-flyout-item-number) * 20ms);
    transition-duration: 0.24s;
    transition-property: opacity, transform, visibility;
    transition-timing-function: cubic-bezier(0.4, 0, 0.6, 1),
      cubic-bezier(0.4, 0, 0.6, 1), step-start;
  }
  .menu-global.openMobile .navbar-link-container {
    opacity: 1;
    visibility: visible;
    transform: translate(0);
  }
}
</style>

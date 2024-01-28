<script setup lang="ts">
import { globalStore } from '~/store/global'

import { menus } from '../data.ts'

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

const handleClickMobileNav = (nameOfItem: string) => {
  globalStore.showMenu(nameOfItem, 0)
}
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
        class="navbar-link hidden lg:block"
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
      <div
        class="navbar-link-mobile relative block lg:hidden"
        @click="handleClickMobileNav(item.link)"
      >
        <div class="title-navbar">
          <p>{{ item.title }}</p>
          <span class="globalnav-link-chevron">
            <svg
              height="48"
              viewBox="0 0 9 48"
              width="9"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m8.1155 30.358a.6.6 0 1 1 -.831.8653l-7-6.7242a.6.6 0 0 1 -.0045-.8613l7-6.8569a.6.6 0 1 1 .84.8574l-6.5582 6.4238z"
              ></path>
            </svg>
          </span>
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
    visibility: hidden;
  }
  .menu-global.openMobile .navbar-link-container {
    opacity: 1;
    visibility: visible;
    transform: translate(0);

    cursor: pointer;

    transition-delay: calc(0.2s + var(--r-globalnav-flyout-item-number) * 20ms);
    transition-duration: 0.24s;
    transition-property: opacity, transform, visibility;
    transition-timing-function: cubic-bezier(0.4, 0, 0.6, 1),
      cubic-bezier(0.4, 0, 0.6, 1), step-start;
  }

  .globalnav-link-chevron {
    position: absolute;
    animation: globalnav-chevron-hover-off 0.24s cubic-bezier(0.4, 0, 0.6, 1)
      both;
    top: 50%;
    right: 0;
    transition: visibility 0.24s step-end;
    opacity: 0;
    visibility: hidden;
    padding-right: 8px;
    svg {
      transform: translate(-50%, -50%) scaleX(-1);
    }
  }

  .navbar-link-container:hover .globalnav-link-chevron {
    visibility: visible;
    opacity: 1;
    animation: globalnav-chevron-slide-in-hover 0.24s
      cubic-bezier(0.4, 0, 0.6, 1) both;
    transition: visibility 0.24s step-start;
  }

  @keyframes globalnav-chevron-slide-in-hover {
    0% {
      opacity: 0;
      transform: translate(-4px);
    }

    to {
      opacity: 1;
      transform: translate(0);
    }
  }

  @keyframes globalnav-chevron-hover-off {
    0% {
      opacity: 1;
      transform: scale(1);
    }

    to {
      opacity: 0;
      transform: scale(0.8);
    }
  }
}
</style>

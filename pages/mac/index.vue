<script setup lang="ts">
import { ref, onMounted } from 'vue'

const chapterNavItems = [
  {
    name: 'macbook-air',
    icon: '/icons/pages/mac/homepage/chapternav/macbookair_light_large.svg',
    title: 'Macbook Air',
    isNew: false,
    width: 79,
  },
  {
    name: 'macbook-pro',
    icon: '/icons/pages/mac/homepage/chapternav/macbook_pro_light_large.svg',
    title: 'Macbook Pro',
    isNew: true,
    width: 85,
  },
  {
    name: 'imac',
    icon: '/icons/pages/mac/homepage/chapternav/imac_light_large.svg',
    title: 'iMac',
    isNew: true,
    width: 43,
  },
  {
    name: 'mac-mini',
    icon: '/icons/pages/mac/homepage/chapternav/mac_mini_light_large.svg',
    title: 'Mac Mini',
    width: 28,
  },
  {
    name: 'mac-pro',
    icon: '/icons/pages/mac/homepage/chapternav/mac_pro_light_large.svg',
    title: 'Mac Pro',
    width: 35,
  },
  {
    name: 'mac-compare',
    icon: '/icons/pages/mac/homepage/chapternav/mac_compare_light_large.svg',
    title: 'Compare',
    width: 45,
  },
  {
    name: 'mac-accessories',
    icon: '/icons/pages/mac/homepage/chapternav/mac_accessories_light_large.svg',
    title: 'Accessories',
    width: 34,
  },
  {
    name: 'mac-os',
    icon: '/icons/pages/mac/homepage/chapternav/mac_os_light_large.svg',
    title: 'Sonoma',
    width: 35,
  },
  {
    name: 'shop-mac',
    icon: '/icons/pages/mac/homepage/chapternav/displays_light_large.svg',
    title: 'Shop Mac',
    width: 103,
  },
  {
    name: 'Displays',
    icon: '/icons/pages/mac/homepage/chapternav/displays_light_large.svg',
    title: 'Displays',
    width: 72,
  },
]

const scrollItemsRef = ref<HTMLDivElement>()

const shouldShowLeft = ref(false)
const shouldShowRight = ref(false)

const timeoutShowPaddles = ref(null)

const handleItemsScroll = (e: UIEvent) => {
  if (!scrollItemsRef.value) return
  const scrollWidth = scrollItemsRef.value.scrollWidth
  const currentWidth = scrollItemsRef.value.clientWidth
  const scrollLeft = scrollItemsRef.value.scrollLeft

  let updateShowPaddles = {
    left: false,
    right: true,
  }

  if (scrollLeft < 0.5) {
    updateShowPaddles = {
      left: false,
      right: true,
    }
  } else if (currentWidth + scrollLeft > scrollWidth - 0.5) {
    updateShowPaddles = {
      left: true,
      right: false,
    }
  } else {
    updateShowPaddles = {
      left: true,
      right: true,
    }
  }
  debounce(
    () => {
      shouldShowLeft.value = updateShowPaddles.left
      shouldShowRight.value = updateShowPaddles.right
    },
    100,
    timeoutShowPaddles
  )
}

const handleClickScrollButton = (isRight: boolean) => {
  if (!scrollItemsRef.value) return
  scrollItemsRef.value.scrollTo({
    left:
      (isRight ? -1 : 1) * scrollItemsRef.value.clientWidth +
      scrollItemsRef.value.scrollLeft,
    behavior: 'smooth',
  })
}

const updateShowRightPaddle = () => {
  if (scrollItemsRef.value) {
    const currentWidth = scrollItemsRef.value.clientWidth
    const scrollWidth = scrollItemsRef.value.scrollWidth
    if (currentWidth < scrollWidth) {
      shouldShowRight.value = true
    }
  }
}

onMounted(() => {
  updateShowRightPaddle()
  window.addEventListener('resize', () => {
    debounce(updateShowRightPaddle, 200, timeoutShowPaddles)
  })
})

onUnmounted(() => {
  if (timeoutShowPaddles.value) {
    clearTimeout(timeoutShowPaddles.value)
  }
})
</script>
<template>
  <nav id="chapternav" class="chapternav bg-[#fafafc] py-6">
    <div class="chapternav-wrapper relative">
      <ul
        class="chapternav-items mx-[34px] text-center"
        ref="scrollItemsRef"
        @scroll="handleItemsScroll"
      >
        <li
          class="chapternav-item"
          v-for="item in chapterNavItems"
          :class="'chapternav-item-' + item.name"
        >
          <a class="chapternav-link" :href="'/' + item.name">
            <figure
              :style="{
                'background-image': 'url(' + item.icon + ')',
                'background-size': item.width + 'px 54px',
                width: item.width + 'px',
              }"
              class="chapternav-icon"
            ></figure>
            <span class="chapternav-title">{{ item.title }}</span>
            <span v-if="item.isNew" class="chapternav-new">New</span>
          </a>
        </li>
      </ul>
      <div class="chapternav-paddles">
        <button
          class="chapternav-paddle chapternav-paddle-left"
          :class="{
            show: shouldShowLeft,
          }"
          @click="handleClickScrollButton(true)"
        >
          <span class="chapternav-paddle-left-icon">
            <svg
              width="7"
              height="13"
              viewBox="0 0 7 13"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentcolor"
                d="m2.252 6.5001s0-.0001 0-.0001l4.4336-4.877c.3438-.3789.3164-.9648-.0625-1.3086s-.9648-.3174-1.3086.0625l-5 5.5c-.3212.3535-.3212.8927 0 1.2462l5 5.5c.3438.3799.9297.4062 1.3086.0625s.4062-.9297.0625-1.3086z"
              ></path>
            </svg>
          </span>
        </button>
        <button
          class="chapternav-paddle chapternav-paddle-right"
          :class="{
            show: shouldShowRight,
          }"
          @click="handleClickScrollButton(false)"
        >
          <span class="chapternav-paddle-right-icon">
            <svg
              width="7"
              height="13"
              viewBox="0 0 7 13"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentcolor"
                d="m4.748 6.5001s0-.0001 0-.0001l-4.4336-4.877c-.3438-.3789-.3164-.9649.0625-1.3086s.9648-.3174 1.3086.0625l5 5.5c.3213.3535.3213.8927 0 1.2462l-5 5.5c-.3438.3799-.9297.4062-1.3086.0625s-.4062-.9297-.0625-1.3086l4.4336-4.877z"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
.chapternav {
  --chapter-link-color: rgba(0, 0, 0, 0.8);
  --chapternav-link-color-hover: rgb(0, 0, 0);
  --chapter-new-color: rgb(182, 68, 0);
  --scroll-container-border-color: rgb(210, 210, 215);
  --scroll-container-paddle-fade-duration: 150ms;
}

.chapternav-wrapper {
  white-space: nowrap;
}

.chapternav-items {
  overflow-y: hidden;
  overflow-x: auto;
}

.chapternav-item {
  padding: 0 20px;
  margin: 0;
  display: inline-block;
  vertical-align: top;
}

.chapternav-item:first-child {
  padding-left: 4px;
}

.chapternav-item:last-child {
  padding-right: 4px;
}

.chapternav-link {
  color: var(--chapter-link-color);
  &:hover {
    color: var(--chapter-link-color-hover);
  }
  display: block;
  text-align: center;

  .chapternav-icon {
    background-repeat: no-repeat;
    margin: 0 auto;
    margin-bottom: 4px;
    height: 52px;
  }

  .chapternav-title {
    font-size: 12px;
    line-height: 1.33;
    font-weight: 400;
    display: block;
  }

  .chapternav-new {
    font-size: 10px;
    line-height: 1.2;
    font-weight: 600;
    display: block;
    color: var(--chapter-new-color);
  }
}

.chapternav-paddles {
  .chapternav-paddle {
    position: absolute;
    top: 0;
    border: 0px solid var(--scroll-container-border-color);
    width: calc(34px - 1px);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    // condition
    opacity: 0;
    transition: opacity var(--scroll-container-paddle-fade-duration) ease-out;
  }

  .chapternav-paddle.show {
    opacity: 1;
  }

  .chapternav-paddle.chapternav-paddle-left {
    border-right-width: 1px;
    left: 0;
  }
  .chapternav-paddle.chapternav-paddle-right {
    border-left-width: 1px;
    right: 0;
  }
}
</style>

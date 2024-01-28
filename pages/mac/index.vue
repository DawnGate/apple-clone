<script setup lang="ts">
import { ref } from 'vue'

const chapterNavItems = [
  {
    name: 'macbook-air',
    icon: '/icons/pages/mac/homepage/chapternav/macbookair_light_large.svg',
    title: 'Macbook Air',
    isNew: false,
    width: 79,
  },
  {
    name: 'macbook-air',
    icon: '/icons/pages/mac/homepage/chapternav/macbookair_light_large.svg',
    title: 'Macbook Air',
    isNew: true,
    width: 79,
  },
  {
    name: 'macbook-air',
    icon: '/icons/pages/mac/homepage/chapternav/macbookair_light_large.svg',
    title: 'Macbook Air',
    isNew: true,
    width: 79,
  },
  {
    name: 'macbook-air',
    icon: '/icons/pages/mac/homepage/chapternav/macbookair_light_large.svg',
    title: 'Macbook Air',
    isNew: true,
    width: 79,
  },
  {
    name: 'macbook-air',
    icon: '/icons/pages/mac/homepage/chapternav/macbookair_light_large.svg',
    title: 'Macbook Air',
    isNew: true,
    width: 79,
  },
  {
    name: 'macbook-air',
    icon: '/icons/pages/mac/homepage/chapternav/macbookair_light_large.svg',
    title: 'Macbook Air',
    isNew: true,
    width: 79,
  },
  {
    name: 'macbook-air',
    icon: '/icons/pages/mac/homepage/chapternav/macbookair_light_large.svg',
    title: 'Macbook Air',
    isNew: true,
    width: 79,
  },
]

const scrollItemsRef = ref<HTMLDivElement>()

const shouldShowLeft = ref(false)
const shouldShowRight = ref(true)

const timeoutShowPaddles = ref(null)

const handleItemsScroll = (e: UIEvent) => {
  if (!scrollItemsRef.value) return
  const currentWidth = scrollItemsRef.value.clientWidth - 34 * 2
  const offsetLeft = scrollItemsRef.value.offsetLeft

  let updateShowPaddles = {
    left: false,
    right: true,
  }

  // TODO: debounce
  if (offsetLeft === 0) {
    updateShowPaddles = {
      left: false,
      right: true,
    }
  } else if (currentWidth === offsetLeft) {
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
</script>
<template>
  <nav id="chapternav" class="chapternav bg-[#fafafc] py-6">
    <div class="chapternav-wrapper relative">
      <ul
        class="chapternav-items mx-[34px]"
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
        <button class="chapternav-paddle chapternav-paddle-left">
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
        <button class="chapternav-paddle chapternav-paddle-right">
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

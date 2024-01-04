<script setup lang="ts">
import { ref, defineProps } from 'vue'

const props = defineProps<{
  title: string
  items: string[]
}>()

const navHeaderWrapper = 'mb-[10px] mr-[20px] leading-4'
const columnNavHeader = 'text-xs font-semibold text-footer-title'
const navItemWrapper = 'mb-[10px] leading-4 last:mb-[0px]'
const columnNameItem = 'text-xs text-footer-text hover:underline'

const refAnimationClose = ref<any | null>(null)
const refAnimationOpen = ref<any | null>(null)

const refShowMenu = ref(false)

const handleToggle = () => {
  refShowMenu.value = !refShowMenu.value
  if (refShowMenu.value) {
    refAnimationClose.value?.beginElement()
  } else {
    refAnimationOpen.value?.beginElement()
  }
}
</script>

<template>
  <div class="column-section overflow-hidden">
    <h3 :class="navHeaderWrapper" class="hidden lg:block">
      <a href="/" :class="columnNavHeader">{{ props.title }}</a>
    </h3>
    <button
      class="column-section-button relative z-10 block w-full py-2.5 text-left text-xs text-footer-title lg:hidden"
      @click="handleToggle"
    >
      <span>{{ props.title }}</span>
      <span class="float-right mt-1">
        <svg class="footer-icon-svg" width="11" height="6" viewBox="0 0 11 6">
          <polyline
            data-footer-icon-shape=""
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            fill-rule="evenodd"
            points="10.075 0.675 5.5 5.323 0.925 0.675"
          >
            <animate
              ref="refAnimationClose"
              data-footer-animate="expand"
              attributeName="points"
              values="10.075 0.675 5.5 5.323 0.925 0.675;
					10.075 3 5.5 3 0.925 3;
					10.075 5.325 5.5 0.676 0.925 5.325"
              dur="320ms"
              begin="indefinite"
              fill="freeze"
              keyTimes="0;
					0.5;
					1"
              calcMode="spline"
              keySplines="0.12, 0, 0.38, 0;
						0.2, 1, 0.68, 1"
            ></animate>
            <animate
              ref="refAnimationOpen"
              data-footer-animate="collapse"
              attributeName="points"
              values="10.075 5.325 5.5 0.676 0.925 5.325;
					10.075 3 5.5 3 0.925 3;
					10.075 0.675 5.5 5.323 0.925 0.675"
              dur="320ms"
              begin="indefinite"
              fill="freeze"
              keyTimes="0;
					0.5;
					1"
              calcMode="spline"
              keySplines="0.2, 0, 0.68, 0;
						0.2, 1, 0.68, 1"
            ></animate>
          </polyline>
        </svg>
      </span>
    </button>
    <ul
      class="column-section-content mr-[20px]"
      :class="{
        show: refShowMenu,
      }"
    >
      <li v-for="item in props.items" :class="navItemWrapper">
        <a :class="columnNameItem" href="/">{{ item }}</a>
      </li>
    </ul>
  </div>
</template>

<style>
:root {
  --footer-section-border-color: rgba(0, 0, 0, 0.16);
  --footer-background: rgb(245, 245, 247);
}
.column-section::after {
  content: '';
  height: 1px;
  display: block;
  background-color: var(--footer-section-border-color);
}

.column-section-button {
  background-color: var(--footer-background);
}

.column-section-content {
  position: absolute;
  visibility: hidden;
  transform: translateY(-100px);
  transition: transform 300ms ease;
}

.column-section-content.show {
  display: block;
  padding: 5px 14px 16px 14px;

  position: static;
  visibility: visible;
  transform: none;
}

@media screen and (min-width: 834px) {
  .column-section::after {
    display: none;
  }

  .column-section-content {
    position: static;
    visibility: visible;
    transform: none;
    transition: none;
  }
}
</style>

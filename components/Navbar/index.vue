<script setup lang="ts">
import NavbarMenu from './Menu/index.vue'
import MenuFly from './MenuFly/index.vue'
</script>

<template>
  <nav class="fixed z-[9999] w-full bg-navbar-background backdrop-blur">
    <div class="nav-content mx-auto max-w-[1024px] px-[22px]">
      <ul class="flex justify-between">
        <li>
          <a href="/" class="align-center flex px-2">
            <span>
              <img src="~/assets/icons/apple-regular.svg" alt="apple-icon" />
            </span>
          </a>
        </li>
        <li class="contents"><NavbarMenu /></li>
        <li>
          <a href="/us/search" class="align-center flex px-2">
            <span>
              <img src="~/assets/icons/search-regular.svg" alt="search-icon" />
            </span>
          </a>
        </li>
        <li>
          <a href="/us/shop/goto/bag" class="align-center flex px-2">
            <span>
              <img src="~/assets/icons/bag-regular.svg" alt="search-icon" />
            </span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <MenuFly />
</template>

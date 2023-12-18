import { callWithAsyncErrorHandling } from 'vue'; import {
callWithAsyncErrorHandling } from 'vue'; import { transformRef } from
'vue/compiler-sfc';
<script setup lang="ts"></script>

<template>
  <div class="px-22 mx-auto max-w-[1024px] pb-20 pt-12">
    <div class="content-container">
      <div class="submenu-group">
        <h2 class="header">Explore Mac</h2>
        <ul class="submenu-link-lists">
          <li>
            <a class="submenu-link" href="/">Explore All Mac</a>
          </li>
          <li>
            <a class="submenu-link" href="/">Macbook Air</a>
          </li>
          <li>
            <a class="submenu-link" href="/">Macbook Pro</a>
          </li>
        </ul>
      </div>
      <div class="submenu-group"></div>
    </div>
  </div>
</template>

<style lang="css">
:root {
  --submenu-group-header-color: rgb(110, 100, 115);
  --submenu-link-color: #333336;
  --global-menu-group-delay: 80ms;
}

.submenu-group {
  max-width: 50%;
  padding-left: 88px;
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
</style>

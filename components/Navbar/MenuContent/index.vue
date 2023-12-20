<script setup lang="ts"></script>

<template>
  <div
    class="content-container px-22 mx-auto max-w-[1024px] px-[22px] pb-20 pt-12"
  >
    <div class="flex flex-row">
      <div class="submenu-group group-elevated">
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
          <li>
            <a class="submenu-link" href="/">iMac</a>
          </li>
          <li>
            <a class="submenu-link" href="/">Mac mini</a>
          </li>
          <li>
            <a class="submenu-link" href="/">Mac studio</a>
          </li>
          <li>
            <a class="submenu-link" href="/">Mac Pro</a>
          </li>
          <li>
            <a class="submenu-link" href="/">Displays</a>
          </li>
          <li>
            <a class="submenu-link-small" href="/">Compare Mac</a>
          </li>
          <li>
            <a class="submenu-link-small" href="/">Mac Does That</a>
          </li>
        </ul>
      </div>
      <div class="submenu-group">
        <h2 class="header">Shop Mac</h2>
        <ul class="submenu-link-lists">
          <li>
            <a class="submenu-link-small" href="/">Shop Mac</a>
          </li>
          <li>
            <a class="submenu-link-small" href="/">Mac Accessories</a>
          </li>
          <li>
            <a class="submenu-link-small" href="/">Apple Trade In</a>
          </li>
          <li>
            <a class="submenu-link-small" href="/">Financing</a>
          </li>
        </ul>
      </div>
      <div class="submenu-group">
        <h2 class="header">More from Mac</h2>
        <ul class="submenu-link-lists">
          <li>
            <a class="submenu-link-small" href="/">Mac Support</a>
          </li>
          <li>
            <a class="submenu-link-small" href="/">AppleCare+ for Mac</a>
          </li>
          <li>
            <a class="submenu-link-small" href="/">macOS Sonoma</a>
          </li>
          <li>
            <a class="submenu-link-small" href="/">Apps by Apple</a>
          </li>
          <li>
            <a class="submenu-link-small" href="/">Continuity</a>
          </li>
          <li>
            <a class="submenu-link-small" href="/">iCloud+</a>
          </li>
          <li>
            <a class="submenu-link-small" href="/">Mac for Business</a>
          </li>
          <li>
            <a class="submenu-link-small" href="/">Education</a>
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

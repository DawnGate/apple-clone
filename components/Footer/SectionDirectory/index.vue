<script setup lang="ts">
const navHeaderWrapper = 'mb-[10px] mr-[20px] leading-4'
const columnNavHeader = 'text-xs font-bold text-footer-title'
const navItemWrapper = 'mb-[10px] leading-4 last:mb-[0px]'
const columnNameItem = 'text-xs text-footer-text hover:underline'
</script>

<template>
  <nav
    class="column-section flex pt-[20px] [&_.column-section~.column-section]:pt-[24px]"
  >
    <div class="flex-1">
      <div class="column-section">
        <h3 :class="navHeaderWrapper">
          <a href="/" :class="columnNavHeader">Shop and Learn</a>
        </h3>
        <ul class="mr-[20px]">
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Store</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Mac</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">iPad</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">iPhone</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Watch</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Vision</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">AirPods</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">TV & Home</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">AirTag</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Accessories</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Gift Cards</a>
          </li>
        </ul>
      </div>
      <div class="column-section">
        <h3 :class="navHeaderWrapper">
          <a href="/" :class="columnNavHeader">Apple Wallet</a>
        </h3>
        <ul class="mr-[20px]">
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Wallet</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Apple Card</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Apple Pay</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Apple Cash</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex-1">Column</div>
    <div class="flex-1">Column</div>
    <div class="flex-1">Column</div>
    <div class="flex-1">Column</div>
  </nav>
</template>

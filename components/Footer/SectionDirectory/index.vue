<script setup lang="ts">
const navHeaderWrapper = 'mb-[10px] mr-[20px] leading-4'
const columnNavHeader = 'text-xs font-semibold text-footer-title'
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
    <div class="flex-1">
      <div class="column-section">
        <h3 :class="navHeaderWrapper">
          <a href="/" :class="columnNavHeader">Account</a>
        </h3>
        <ul class="mr-[20px]">
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Manage Your Apple ID</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Apple Store Account</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">iCloud.com</a>
          </li>
        </ul>
      </div>
      <div class="column-section">
        <h3 :class="navHeaderWrapper">
          <a href="/" :class="columnNavHeader">Entertainment</a>
        </h3>
        <ul class="mr-[20px]">
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Apple One</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Apple TV+</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Apple Music</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Apple Arcade</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Apple News+</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Apple Podcasts</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Apple Books</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Apple Store</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex-1">
      <div class="column-section">
        <h3 :class="navHeaderWrapper">
          <a href="/" :class="columnNavHeader">Apple Store</a>
        </h3>
        <ul class="mr-[20px]">
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Find a Store</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Genius Bar</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Today at Apple</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Apple Camp</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Apple Store App</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Certified Refurbished</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Apple Trade In</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Financing</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Carrier Deals at Apple</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Order Status</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Shopping Help</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex-1">
      <div class="column-section">
        <h3 :class="navHeaderWrapper">
          <a href="/" :class="columnNavHeader">For Business</a>
        </h3>
        <ul class="mr-[20px]">
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Apple and Business</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Shope for Business</a>
          </li>
        </ul>
      </div>
      <div class="column-section">
        <h3 :class="navHeaderWrapper">
          <a href="/" :class="columnNavHeader">For Education</a>
        </h3>
        <ul class="mr-[20px]">
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Apple and Education</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Apple for K-12</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Shop for College</a>
          </li>
        </ul>
      </div>
      <div class="column-section">
        <h3 :class="navHeaderWrapper">
          <a href="/" :class="columnNavHeader">For Healthcare</a>
        </h3>
        <ul class="mr-[20px]">
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Apple in Healthcare</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Health on Apple Watch</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Health Records on iPhone</a>
          </li>
        </ul>
      </div>
      <div class="column-section">
        <h3 :class="navHeaderWrapper">
          <a href="/" :class="columnNavHeader">For Government</a>
        </h3>
        <ul class="mr-[20px]">
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Shop for Government</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/"
              >Shop for Veterans and Military</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="flex-1">
      <div class="column-section">
        <h3 :class="navHeaderWrapper">
          <a href="/" :class="columnNavHeader">Apple Values </a>
        </h3>
        <ul class="mr-[20px]">
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Accessibility </a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Education</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Environment</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Inclusion and Diversity </a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Privacy</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Racial Equity and Justice</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Supplier Responsibility</a>
          </li>
        </ul>
      </div>
      <div class="column-section">
        <h3 :class="navHeaderWrapper">
          <a href="/" :class="columnNavHeader">About Apple</a>
        </h3>
        <ul class="mr-[20px]">
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Newsroom </a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Apple Leadership</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Career Opportunities </a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Investors</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Ethics & Compliance </a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Events</a>
          </li>
          <li :class="navItemWrapper">
            <a :class="columnNameItem" href="/">Contact Apple</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

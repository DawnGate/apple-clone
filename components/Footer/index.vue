<script setup lang="ts">
import SectionDirectory from './SectionDirectory/index.vue'
</script>

<template>
  <footer class="bg-footer-background">
    <div class="mx-auto max-w-[1024px] px-[22px]">
      <section class="border-b border-footer-border pb-[11px] pt-[17px]">
        <slot />
      </section>
      <SectionDirectory />
      <section class="pb-[21px] pt-[32px]">
        <div class="border-b border-footer-border pb-[8px]">
          <p class="text-xs text-footer-text">
            More ways to shop:
            <a class="footer-link" href="/">Find an Apple Store</a> or
            <a class="footer-link" href="/">other retailer</a> near you. Or call
            1-800-MY-APPLE.
          </p>
        </div>
        <div class="float-left mt-[8px] leading-4 lg:float-right">
          <a class="text-xs text-footer-text hover:underline" href="/">
            United States
          </a>
        </div>
        <div>
          <p class="mr-[30px] mt-[5px] inline-block text-xs text-footer-text">
            Copyright © 2023 Apple Inc. All rights reserved.
          </p>
          <ul class="mr-[30px] mt-[5px] inline-block">
            <li
              class="mr-[7px] mt-[5px] inline-block border-r border-footer-border pr-[10px] leading-4"
            >
              <a
                href="/"
                class="cursor-pointer text-xs text-footer-link hover:underline"
              >
                Privacy Policy
              </a>
            </li>
            <li
              class="mr-[7px] mt-[5px] inline-block border-r border-footer-border pr-[10px] leading-4"
            >
              <a
                href="/"
                class="cursor-pointer text-xs text-footer-link hover:underline"
                >Terms of Use</a
              >
            </li>
            <li
              class="mr-[7px] mt-[5px] inline-block border-r border-footer-border pr-[10px] leading-4"
            >
              <a
                href="/"
                class="cursor-pointer text-xs text-footer-link hover:underline"
                >Sales and Refunds</a
              >
            </li>
            <li
              class="mr-[7px] mt-[5px] inline-block border-r border-footer-border pr-[10px] leading-4"
            >
              <a
                href="/"
                class="cursor-pointer text-xs text-footer-link hover:underline"
                >Legal</a
              >
            </li>
            <li class="mt-[5px] inline-block leading-4">
              <a
                href="/"
                class="cursor-pointer text-xs text-footer-link hover:underline"
                >Site Map</a
              >
            </li>
          </ul>
        </div>
      </section>
    </div>
  </footer>
</template>

<script setup lang="ts">
import SectionDirectory from './SectionDirectory/index.vue'
</script>

<template>
  <footer>
    <div class="mx-auto max-w-[1024px] px-[22px]">
      <section class="border-footer-border border-b"></section>
      <SectionDirectory />
      <section class="pb-[21px] pt-[32px]">
        <div class="border-footer-border border-b pb-[8px]">
          <p class="text-footer-text text-xs">
            More ways to shop:
            <a class="footer-link" href="/">Find an Apple Store</a> or
            <a class="footer-link" href="/">other retailer</a> near you. Or call
            1-800-MY-APPLE.
          </p>
        </div>
        <div class="float-right mt-[8px] leading-4">
          <a class="text-footer-text text-xs hover:underline" href="/">
            United States
          </a>
        </div>
        <div class="float-left">
          <p class="text-footer-text mr-[30px] mt-[5px] inline-block text-xs">
            Copyright © 2023 Apple Inc. All rights reserved.
          </p>
          <ul class="mr-[30px] mt-[5px] inline-block">
            <li
              class="border-footer-border mr-[7px] mt-[5px] inline-block border-r pr-[10px] leading-4"
            >
              <a
                href="/"
                class="text-footer-link cursor-pointer text-xs hover:underline"
              >
                Privacy Policy
              </a>
            </li>
            <li
              class="border-footer-border mr-[7px] mt-[5px] inline-block border-r pr-[10px] leading-4"
            >
              <a
                href="/"
                class="text-footer-link cursor-pointer text-xs hover:underline"
                >Terms of Use</a
              >
            </li>
            <li
              class="border-footer-border mr-[7px] mt-[5px] inline-block border-r pr-[10px] leading-4"
            >
              <a
                href="/"
                class="text-footer-link cursor-pointer text-xs hover:underline"
                >Sales and Refunds</a
              >
            </li>
            <li
              class="border-footer-border mr-[7px] mt-[5px] inline-block border-r pr-[10px] leading-4"
            >
              <a
                href="/"
                class="text-footer-link cursor-pointer text-xs hover:underline"
                >Legal</a
              >
            </li>
            <li class="mt-[5px] inline-block leading-4">
              <a
                href="/"
                class="text-footer-link cursor-pointer text-xs hover:underline"
                >Site Map</a
              >
            </li>
          </ul>
        </div>
      </section>
    </div>
  </footer>
</template>

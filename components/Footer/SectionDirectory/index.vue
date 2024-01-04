<script setup lang="ts">
import ColumnSection from '../ColumnSection/index.vue'

const navHeaderWrapper = 'mb-[10px] mr-[20px] leading-4'
const columnNavHeader = 'text-xs font-semibold text-footer-title'
const navItemWrapper = 'mb-[10px] leading-4 last:mb-[0px]'
const columnNameItem = 'text-xs text-footer-text hover:underline'

const data: {
  [key: string]: {
    title: string
    items: string[]
  }
} = {
  shopAndLearn: {
    title: 'Shop and Learn',
    items: [
      'Store',
      'Mac',
      'iPad',
      'iPhone',
      'Watch',
      'Vision',
      'AirPods',
      'TV & Home',
      'AirTag',
      'Accessories',
      'Gift Cards',
    ],
  },
  appleWallet: {
    title: 'Apple Wallet',
    items: ['Wallet', 'Apple Card', 'Apple Pay', 'Apple Cash'],
  },
  account: {
    title: 'Account',
    items: ['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com'],
  },
  entertainment: {
    title: 'Entertainment',
    items: [
      'Apple One',
      'Apple TV+',
      'Apple Music',
      'Apple Arcade',
      'Apple News+',
      'Apple Podcasts',
      'Apple Books',
      'Apple Store',
    ],
  },
  appleStore: {
    title: 'Apple Store',
    items: [
      'Find a Store',
      'Genius Bar',
      'Today at Apple',
      'Apple Camp',
      'Apple Store App',
      'Certified Refurbished',
      'Apple Trade In',
      'Financing',
      'Carrier Deals at Apple',
      'Order Status',
      'Shopping Help',
    ],
  },
  forBusiness: {
    title: 'For Business',
    items: ['Apple and Business', 'Shop for Business'],
  },
  forEducation: {
    title: 'For Education',
    items: ['Apple and Education', 'Apple for K-12', 'Shop for College'],
  },
  forHealthcare: {
    title: 'For Healthcare',
    items: [
      'Apple in Healthcare',
      'Health on Apple Watch',
      'Health Records on iPhone',
    ],
  },
  forGovernment: {
    title: 'For Government',
    items: ['Shop for Government', 'Shop for Veterans and Military'],
  },
  appleValues: {
    title: 'Apple Values ',
    items: [
      'Accessibility',
      'Education',
      'Environment',
      'Inclusion and Diversity',
      'Privacy',
      'Racial Equity and Justice',
      'Supplier Responsibility',
    ],
  },
  aboutApple: {
    title: 'About Apple',
    items: [
      'Newsroom',
      'Apple Leadership',
      'Career Opportunities',
      'Investors',
      'Ethics & Compliance',
      'Events',
      'Contact Apple',
    ],
  },
}
</script>

<template>
  <nav
    class="column-section flex flex-col pt-[20px] lg:flex-row lg:[&_.column-section~.column-section]:pt-[24px]"
  >
    <div class="flex-1">
      <ColumnSection
        :title="data.shopAndLearn.title"
        :items="data.shopAndLearn.items"
      />

      <ColumnSection
        :title="data.appleWallet.title"
        :items="data.appleWallet.items"
      />
    </div>
    <div class="flex-1">
      <ColumnSection :title="data.account.title" :items="data.account.items" />
      <ColumnSection
        :title="data.entertainment.title"
        :items="data.entertainment.items"
      />
    </div>
    <div class="flex-1">
      <ColumnSection
        :title="data.appleStore.title"
        :items="data.appleStore.items"
      />
    </div>
    <div class="flex-1">
      <ColumnSection
        :title="data.forBusiness.title"
        :items="data.forBusiness.items"
      />
      <ColumnSection
        :title="data.forEducation.title"
        :items="data.forEducation.items"
      />
      <ColumnSection
        :title="data.forHealthcare.title"
        :items="data.forHealthcare.items"
      />
      <ColumnSection
        :title="data.forGovernment.title"
        :items="data.forGovernment.items"
      />
    </div>
    <div class="flex-1">
      <ColumnSection
        :title="data.appleValues.title"
        :items="data.appleValues.items"
      />
      <ColumnSection
        :title="data.aboutApple.title"
        :items="data.aboutApple.items"
      />
    </div>
  </nav>
</template>

<template>
  <Navbar />
  <slot />
  <ClientOnly>
    <HelperClient />
  </ClientOnly>
</template>

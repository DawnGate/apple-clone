<script setup lang="ts"></script>

<template>
  <section class="section section-gtk-mac">
    <div class="section-content section-content-responsive">
      <div class="section-title">
        <p>Get to know Mac.</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.section-content-responsive {
  width: 87.5vw;
  max-width: 1068px;
  margin: 0 auto;
}

section.section-gtk-mac {
  padding: 90px 0;

  .section-title {
    font-size: 28px;
    line-height: 1.14;
    font-weight: 600;
    letter-spacing: 0.007em;
  }

  @media screen and (min-width: 734px) {
    padding: 120px 0;

    .section-title {
      font-size: 48px;
      line-height: 1.08;
      letter-spacing: 0.003em;
    }
  }

  @media screen and (min-width: 1068px) {
    padding: 150px 0;

    .section-title {
      font-size: 56px;
      line-height: 1.07;
      letter-spacing: 0.005em;
    }
  }
}
</style>

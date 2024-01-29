<template>
  <div class="ribbon">
    <div class="ribbon-wrapper">
      <div class="ribbon-content">
        <p class="ribbon-text">
          Get 3% Daily Cash back with Apple Card. And pay for your new Mac over
          12 months, interest‑free when you choose to check out with Apple Card
          Monthly Installments.
          <a class="ribbon-link" href="/mac">Learn more</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ribbon {
  --ribbon-background-color: rgb(245, 245, 247);
  --ribbon-text-color: rgb(29, 29, 31);
  --ribbon-link-color: rgb(0, 102, 204);
  --ribbon-focus-color: #0071e3;
}

.ribbon-wrapper {
  padding: 9px 0;
  background-color: var(--ribbon-background-color);
}

.ribbon-content {
  margin: 0 auto;
  min-width: 320px;
  width: 83.3%;
}

@media screen and (min-width: 834px) {
  .ribbon-content {
    width: 66.67%;
  }
}

.ribbon-text {
  font-size: 12px;
  line-height: 1.33;
  font-weight: 400;
  text-align: center;
  color: var(--ribbon-text-color);
}

.ribbon-link {
  color: var(--ribbon-link-color);

  &:hover {
    color: var(--ribbon-focus-color);
    text-decoration: underline;
  }

  &::after {
    content: '›';
    padding-left: 3px;
    text-decoration: none;
    display: inline-block;
  }
}
</style>

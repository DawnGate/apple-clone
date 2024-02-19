<template>
  <div class="gtk-card">
    <div class="gtk-card-information">
      <div class="gtk-card-title">Getting Started</div>
      <div class="gtk-card-subtitle">Easy to use. Easy to love.</div>
    </div>
    <div class="gtk-card-button">
      <button class="gtk-modal-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          class="card-button-small-icon"
        >
          <path
            d="M17.25,8.51H11.5V2.75A1.5,1.5,0,0,0,10,1.25h0a1.5,1.5,0,0,0-1.5,1.5V8.5H2.75a1.5,1.5,0,0,0,0,3H8.5v5.75a1.5,1.5,0,0,0,1.5,1.5h0a1.5,1.5,0,0,0,1.5-1.5V11.5h5.75a1.5,1.5,0,0,0,0-3Z"
          ></path>
        </svg>
      </button>
    </div>
    <div class="gtk-card-background">
      <picture class="gtk-card-background-image">
        <source
          srcset="/icons/pages/mac/homepage/gtk-mac/mac_ease_large.jpg"
          media="(max-width: 1440px)"
        />
        <source
          srcset="/icons/pages/mac/homepage/gtk-mac/mac_ease_xlarge.jpg"
          media="(min-width: 0px)"
        />
        <img src="/icons/pages/mac/homepage/gtk-mac/mac_ease_xlarge.jpg" />
      </picture>
    </div>
  </div>
</template>

<style lang="scss">
.gtk-card {
  height: 740px;

  border-radius: 28px;

  overflow: hidden;
  position: relative;

  cursor: pointer;

  transition: transform 0.3s cubic-bezier(0, 0, 0.5, 1);

  &:hover {
    transform: scale(1.0161290323);
  }

  .gtk-card-information {
    width: 405px;
    padding: 32px;
    height: 100%;

    color: #f5f5f7;
    position: relative;
    z-index: 2;
  }

  @media screen and (max-width: 734px) {
    .gtk-card-information {
      width: 260px;
    }
  }

  @media screen and (max-width: 1068px) {
    .gtk-card-information {
      width: 344px;
    }
  }

  @media screen and (max-width: 1440px) {
    .gtk-card-information {
      width: 372px;
    }
  }

  .gtk-card-title {
    font-size: 17px;
    line-height: 1.235;
    font-weight: 600;
    letter-spacing: -0.022em;
  }

  .gtk-card-subtitle {
    margin-top: 8px;

    font-size: 28px;
    font-weight: 600;
    line-height: 1.142;
    letter-spacing: 0.007em;
  }

  .gtk-card-background-image {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .gtk-modal-button {
    border-radius: 50%;
    height: 36px;
    width: 36px;
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    z-index: 3;
    bottom: 20px;
    right: 20px;

    color: #d6d6d7;
    background: rgb(51, 51, 54);

    .card-button-small-icon {
      width: 18px;
      height: 18px;
      fill: currentColor;
    }
  }
}
</style>

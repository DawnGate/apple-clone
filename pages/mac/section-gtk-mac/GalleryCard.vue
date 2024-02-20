<script setup lang="ts">
import { ref } from 'vue'
import Card from './GCard.vue'

const cardArray = [0, 1, 2, 4, 5, 6, 7]

const currentIndex = ref(0)

const changeCurrentIndex = (add: boolean) => {
  currentIndex.value += add ? 1 : -1
}
</script>

<template>
  <div class="gallery-card-container">
    <div class="gallery-card-content">
      <div class="gallery-items-container">
        <ul>
          <li v-for="(card, index) in cardArray">
            <Card />
          </li>
        </ul>
      </div>
    </div>
    <div class="gallery-card-buttons paddlenav">
      <ul class="sticky-element">
        <li class="left-item">
          <button
            class="paddlenav-arrow paddle-nav-arrow-previous"
            :disabled="currentIndex === 0"
            @click="changeCurrentIndex(false)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
              <path
                d="M21.559,12.062 L15.618,17.984 L21.5221,23.944 C22.105,24.533 22.1021,25.482 21.5131,26.065 C21.2211,26.355 20.8391,26.4999987 20.4571,26.4999987 C20.0711,26.4999987 19.6851,26.352 19.3921,26.056 L12.4351,19.034 C11.8531,18.446 11.8551,17.4999987 12.4411,16.916 L19.4411,9.938 C20.0261,9.353 20.9781,9.354 21.5621,9.941 C22.1471,10.528 22.1451,11.478 21.5591,12.062 L21.559,12.062 Z"
              ></path>
            </svg>
          </button>
        </li>
        <li class="right-item">
          <button
            class="paddlenav-arrow paddle-nav-arrow-next"
            :disabled="currentIndex === cardArray.length - 1"
            @click="changeCurrentIndex(true)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
              <path
                d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z"
              ></path>
            </svg>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
:root {
  --global-viewport-content-responsive: 87.5vw;
}

.gallery-card-container {
  position: relative;
  padding-bottom: 83px;
  --gallery-side-padding: calc(
    50vw - min(1680px, var(--global-viewport-content-responsive)) / 2
  );

  ::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
    background: rgba(0, 0, 0, 0);
  }
}

.gallery-card-content {
  padding: 10px 0;

  overflow: scroll;
  scrollbar-width: none;
  scroll-padding: var(--gallery-side-padding);
  scroll-snap-type: x mandatory;

  .gallery-items-container {
    padding: 0px var(--gallery-side-padding);

    display: grid;
    grid-template-rows: repeat(1, auto);
    grid-template-columns: max-content;

    ul {
      display: grid;
      grid-auto-flow: column;
      gap: 20px;
    }
  }
}

.paddlenav {
  --paddlenav-arrow-height: 36px;
  --paddlenav-arrows-offset: 128px;
  --paddlenav-offset: 60px;
  --paddlenav-right-offset: calc(var(--paddlenav-arrow-height) * -0.5);
  --paddlenav-left-offset: calc(var(--paddlenav-arrow-height) * 0.5);

  --sk-paddlenav-background: rgba(210, 210, 215, 0.64);
  --sk-paddlenav-arrow-color: rgba(0, 0, 0, 0.56);
  --sk-link-disabled-opacity: 0.42;

  .paddlenav-arrow {
    width: var(--paddlenav-arrow-height);
    height: var(--paddlenav-arrow-height);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    background: var(--sk-paddlenav-background);
    color: var(--sk-paddlenav-arrow-color);
    border-radius: 50%;
    transition:
      background 100ms linear,
      color 100ms linear,
      opacity 100ms linear;

    &:disabled {
      opacity: var(--sk-link-disabled-opacity, 0.42);
    }

    svg {
      fill: currentColor;
    }
  }

  .left-item {
    position: absolute;
    right: calc(var(--paddlenav-arrows-offset) - var(--paddlenav-right-offset));
    top: calc(100% - var(--paddlenav-offset));
    margin-top: var(--paddlenav-left-offset);
  }

  .right-item {
    position: absolute;
    right: calc(
      var(--paddlenav-arrows-offset) - 3 * var(--paddlenav-left-offset)
    );
    top: calc(100% - var(--paddlenav-offset));
    margin-top: var(--paddlenav-left-offset);
  }
}
</style>

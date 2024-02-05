<script setup lang="ts">
import { ref } from 'vue'

const refVideo = ref<HTMLVideoElement | null>(null)
const refImage = ref(null)

const isPlayVideo = ref(false)
const shouldShowImage = ref(true)

const handleTogglePlay = () => {
  isPlayVideo.value = !isPlayVideo.value

  if (shouldShowImage.value) {
    shouldShowImage.value = false
  }

  if (refVideo.value) {
    if (isPlayVideo.value) {
      refVideo.value.play()
    } else {
      refVideo.value.pause()
    }
  }
}
</script>

<template>
  <section class="section section-welcome no-padding-bottom">
    <div class="section-content">
      <div class="section-title">
        <p>Hello</p>
      </div>
      <div class="section-subtitle">
        <p>
          If you can dream it, <br />
          Mac can do it
        </p>
      </div>
    </div>
    <div class="welcome-video">
      <div class="video-container">
        <div class="welcome-picture-video">
          <picture
            class="welcome-startframe hidden"
            :class="{
              played: !shouldShowImage,
            }"
          >
            <source
              srcset="/icons/pages/mac/homepage/welcome/startframe_small_2x.jpg"
              media="(max-width: 734px)"
            />
            <source
              srcset="
                /icons/pages/mac/homepage/welcome/startframe_medium_2x.jpg
              "
              media="(max-width: 1068px)"
            />
            <source
              srcset="/icons/pages/mac/homepage/welcome/startframe_large_2x.jpg"
              media="(max-width: 1440px)"
            />
            <source
              srcset="
                /icons/pages/mac/homepage/welcome/startframe_xlarge_2x.jpg
              "
              media="(min-width: 0px)"
            />
            <img
              alt=""
              src="/icons/pages/mac/homepage/welcome/startframe_large_2x.jpg"
            />
          </picture>
          <video
            ref="refVideo"
            class="welcome-video"
            muted
            loop
            preload="auto"
            playsinline
            src="/icons/pages/mac/homepage/welcome/medium_2x.mp4"
          ></video>
        </div>
        <div class="welcome-video-controls-container">
          <button class="welcome-video-control-btn" @click="handleTogglePlay()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              class="control-centered-small-icon"
            >
              <g
                class="control-icon-pause"
                :class="{
                  hidden: !isPlayVideo,
                }"
              >
                <rect width="4.5" height="14" x="3.75" y="3" rx="1.5"></rect>
                <rect width="4.5" height="14" x="11.75" y="3" rx="1.5"></rect>
              </g>
              <path
                class="control-icon-play"
                :class="{
                  hidden: isPlayVideo,
                }"
                d="M5 15.25V4.77a1.44 1.44 0 0 1 1.44-1.62 1.86 1.86 0 0 1 1.11.31l8.53 5c.76.44 1.17.8 1.17 1.51s-.41 1.07-1.17 1.51l-8.53 5a1.86 1.86 0 0 1-1.11.31A1.42 1.42 0 0 1 5 15.25Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
section.section-welcome {
  padding-top: 90px;

  .section-content {
    display: flex;
    flex-direction: column;
    padding-bottom: 58px;

    width: 87.5vw;
    max-width: 1680px;
    margin: 0 auto;

    .section-title {
      font-size: 48px;
      line-height: 1.083;
      font-weight: 600;
      letter-spacing: -0.003em;
    }

    .section-subtitle {
      font-size: 21px;
      line-height: 1.19;
      font-weight: 600;
      letter-spacing: 0.011em;

      margin-top: 8px;
    }
  }

  .video-container {
    margin: 0 auto;
    width: 87.5%;
    height: 80vh;
    max-height: 960px;
    min-height: 680px;
    position: relative;
  }

  .welcome-picture-video {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 28px;
    overflow: hidden;
  }

  .welcome-startframe {
    object-fit: contain;
    position: absolute;

    &.played {
      visibility: hidden;
    }
  }

  .welcome-video {
    display: block;
    position: absolute;
    object-fit: cover;

    width: 100%;
  }

  .welcome-video-controls-container {
    right: 28px;
    bottom: 28px;
    position: absolute;
    height: calc(100% - 28px);

    display: flex;
    align-items: flex-end;

    .welcome-video-control-btn {
      border-radius: 50%;
      position: sticky;
      bottom: 28px;
      height: 36px;
      width: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgb(232, 232, 237);
      transition:
        background-color 100ms linear,
        color 100ms linear;

      margin-top: 28px;

      color: rgba(0, 0, 0, 0.56);

      &:hover {
        background: #ececf0;
      }

      &:focus {
        box-shadow:
          0px 0px 0px 3px #fff,
          0px 0px 0px 5px #0071e3;
      }

      svg {
        width: 20px;
        height: 20px;

        fill: currentColor;
      }
    }
  }
}
</style>

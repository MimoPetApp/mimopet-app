<template>
  <div class="animation-step">
    <div class="animation-step__header">
      <h3 class="animation-step__header__title text-main-alternate">
        {{ title }}
      </h3>
      <p class="animation-step__header__description text-main-alternate">
        {{ description }}
      </p>
    </div>
    <div class="animation-step__carousel">
      <q-carousel
        swipeable
        animated
        v-model="currVideo"
        :autoplay="false"
        ref="carousel"
        class="animation-step__carousel"
      >
        <!-- Content -->
        <q-carousel-slide
          v-for="(video, index) in videos"
          :key="index"
          :name="index"
          class="animation-step__carousel-item"
        >
          <div class="row video-wrapper" style="flex-grow: 1">
            <div class="col-12 col-md-12 col-xs-12">
              <video controls class="video-content">
                <source :src="_getMediaUrl(video.item)" :type="video.mime" />
                Desculpa, o seu dipositivo não suporta vídeos incorporados, mas você pode
                <a :href="_getMediaUrl(video.item)">baixá-lo</a>
                e assistir pelo seu reprodutor de mídia favorito!
              </video>
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<script>
import utils from '../../helpers/utils'

export default {
  name: 'AnimationStep',
  components: {},
  props: {
    videos: {
      type: Array,
      default: null
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      currVideo: 0
    }
  },
  computed: {},
  methods: {
    ...utils
  }
}
</script>

<style lang="scss" scoped>
.animation-step {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;

  &__header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &__title {
      font-family: 'customfont700';
      font-weight: 700;
      line-height: 24px;
      font-size: var(--font-size-6);
      letter-spacing: -0.014em;
    }
    &__description {
      font-family: 'customfont620';
      font-weight: 500;
      font-size: var(--font-size-4);
      line-height: 17px;
      letter-spacing: -0.018em;
      margin-top: 16px;
      text-align: center;
      margin-bottom: 0;
    }
  }
  &__carousel {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__carousel-item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 0;
  }
}
.video-content {
  height: 333px;
  object-fit: cover;
  z-index: -100;
  border-radius: 12px;
}
.video-wrapper {
  padding-top: 0;
}
</style>

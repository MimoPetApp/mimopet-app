<template>
  <div class="instruction-step">
    <div class="instruction-step__img">
      <q-img
        :src="_getMediaUrl(thumbnail)"
        class="slide-step__image"
        fit="scale-down"
        height="100%"
      />
    </div>
    <div class="instruction-step__content">
      <h3 class="exercise-step__content__title text-main-alternate">
        {{ title }}
      </h3>
      <p class="instruction-step__content__description text-main-alternate">
        {{ instruction }}
      </p>
    </div>
  </div>
</template>

<script>
import utils from '../../helpers/utils'

export default {
  name: 'InstructionStep',
  props: {
    thumbnail: {
      type: Object,
      default: null
    },
    title: {
      type: String,
      default: ''
    },
    instruction: {
      type: String,
      default: ''
    }
  },
  methods: {
    ...utils
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/css/themes/viewports.scss';

.instruction-step {
  &__img {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 55px;

    @include xxs() {
      margin-top: 25px;
    }

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
      margin-top: 36px;
      text-align: center;
      @include xxs() {
        margin-top: 16px;
      }
    }
  }
}
</style>

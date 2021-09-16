<template>
  <div class="step-wrapper">
    <q-list>
      <q-item clickable v-ripple dense>
        <q-item-section avatar>
          <q-avatar
            :color="selectColorByType"
            text-color="white"
            icon="play_arrow"
            size="36.8px"
            font-size="22px"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>Demonstração de passo</q-item-label>
          <q-item-label caption>4 min - Slide</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export const StepTypes = ['slide', 'quizz', 'feedback', 'repetitions', 'video']

export default {
  name: 'Step',
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String
    },
    type: {
      type: String,
      default: 'slide',
      validate: val => StepTypes.indexOf(val) !== -1
    }
  },
  data() {
    return {}
  },
  computed: {
    selectColorByType() {
      switch (this.type) {
        case 'slide':
          return 'main-alternate'
        case 'quizz':
          return 'status-success'
        case 'feedback':
          return 'utilities-alternate'
        case 'repetitions':
          return 'main-secondary'
        default:
          // video
          return 'main-highlight'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home-card__item {
  min-height: 250px;
  border-radius: 25px !important;

  &--button {
    background: rgba(255, 255, 255, 0.2);
    z-index: 999;
  }

  &__footer {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 30%;
    width: 100%;
    border-radius: 0 0 25px 25px !important;
  }

  &__circle {
    position: absolute;
    bottom: 0;
    left: calc(50% - 60px);
  }
}

.home-card__item__badge {
  color: var(--colorWhite);
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 0 0 0 15px;
}

.home-card__item__badge--icon {
  font-size: 2.3em;
  color: #ff6160;
  background: var(--colorWhite);
  padding: 0;
  margin: 0;
  border-radius: 50%;
}
</style>

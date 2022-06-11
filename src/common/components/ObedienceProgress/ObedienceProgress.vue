<template>
  <div class="obedience-progress flex justify-center items-center">
    <q-rating v-model="progress" :color="color" icon="pets" :max="max" readonly no-dimming />
    <div>
      <q-avatar rounded class="obedience-progress__badge">
        <img :src="badgeIcon" />
      </q-avatar>
    </div>
  </div>
</template>

<script>
const badge = require('../../../assets/images/badge.png')

export default {
  name: 'ObedienceProgress',
  components: {},
  props: {
    color: {
      type: String,
      default: 'main-background'
    },
    max: {
      type: Number,
      default: 5
    },
    value: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      progress: this.value
    }
  },
  computed: {
    setSubtitleLabel() {
      return this.subtitle > 1 ? 'execuções' : 'execução'
    },
    badgeIcon() {
      return badge
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.obedience-progress {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.1);
  border-radius: 22px;
  height: 88.99px;
  ::v-deep .q-rating {
    &__icon {
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.25);
      border-radius: 100px;
      transform: rotate(15deg);
      font-size: var(--font-size-7);
      text-shadow: none;
      margin: 0 4px;
      &--active {
        background-color: var(--main-secondary);
      }
    }
    &__icon:first-child {
      margin-left: 0;
    }
  }
  &__badge {
    width: 48px;
    height: 48px;
  }
}
</style>

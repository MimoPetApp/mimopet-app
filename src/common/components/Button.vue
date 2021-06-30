<template>
  <QBtn v-bind="$attrs" :color="color" :outline="isOutline" :flat="isFlat" />
</template>

<script>
import { QBtn } from 'quasar'

export default {
  name: 'Button',
  components: { QBtn },
  props: {
    color: {
      type: String,
      default: 'primary-filled',
      validate: val => {
        const colors = ['primary-filled', 'primary-flat', 'secondary-outline', 'secondary-bordless']
        return colors.indexOf(val) !== -1
      }
    },
    rounded: {
      type: Boolean
    }
  },
  computed: {
    isOutline: function () {
      return this?.color?.includes('-outline')
    },
    isFlat: function () {
      return this?.color?.includes('-bordless')
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-primary-filled {
  color: var(--main-background) !important;
  background: var(--main-primary) !important;
  &:disabled {
    color: var(--utilities-alternate) !important;
    background: var(--utilities-border) !important;
  }
  &:active {
    background: var(--main-secondary) !important;
  }
}

.bg-primary-flat {
  color: var(--main-primary) !important;
  background: var(--main-background) !important;
  &:disabled {
    color: var(--utilities-alternate) !important;
    background: var(--utilities-disabled) !important;
  }
  &:active {
    color: var(--main-background) !important;
    background: var(--main-primary) !important;
  }
}

.text-secondary-outline {
  color: var(--main-primary) !important;
  &:disabled {
    color: var(--utilities-alternate) !important;
  }
  &:active {
    color: var(--main-primary) !important;
  }
}

.text-secondary-bordless {
  color: var(--main-primary) !important;
  &:disabled {
    color: var(--utilities-alternate) !important;
  }
  &:active {
    color: var(--main-primary) !important;
  }
}
</style>

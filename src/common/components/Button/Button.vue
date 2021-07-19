<template>
  <QBtn v-bind="$attrs" :color="color" :outline="isOutline" :flat="isFlat" />
</template>

<script>
import { QBtn } from 'quasar'
export const ButtonColors = [
  'primary-filled',
  'primary-flat',
  'secondary-outline',
  'secondary-bordless',
  'alternate-outline',
  'alternate-filled'
]
export default {
  name: 'Button',
  components: { QBtn },
  props: {
    color: {
      type: String,
      default: 'primary-filled',
      validate: val => ButtonColors.indexOf(val) !== -1
    },
    outline: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isOutline: function () {
      return this.outline || this?.color?.includes('-outline')
    },
    isFlat: function () {
      return this.flat || this?.color?.includes('-bordless')
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
    &:before {
      border: 1px solid var(--main-primary) !important;
    }
  }
  &:before {
    border: 1px solid var(--main-background) !important;
  }
}

.text-secondary-bordless {
  color: var(--main-primary) !important;
  &:disabled {
    color: var(--utilities-alternate) !important;
  }
  &:active {
    color: var(--main-secondary) !important;
  }
}

.bg-alternate-filled {
  color: var(--main-background) !important;
  background: var(--main-alternate) !important;
  &:disabled {
    color: var(--utilities-alternate) !important;
    background: var(--utilities-border) !important;
  }
  &:active {
    background: var(--main-highlight) !important;
  }
}

.text-alternate-outline {
  color: var(--main-alternate) !important;
  &:disabled {
    color: var(--utilities-disabled) !important;
  }
  &:active {
    color: var(--main-highlight) !important;
  }
}
</style>

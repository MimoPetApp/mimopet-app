<template>
  <QBtn
    v-bind="$attrs"
    :color="color"
    :outline="isOutline"
    :flat="isFlat"
    class="button-wrapper"
    unelevated
  >
    <slot name="icon"></slot>
  </QBtn>
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
  background: var(--utilities-disabled) !important;

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
.button-wrapper {
  height: 48px;
  width: 223px;
  font-size: var(--font-size-4);
  line-height: var(--font-size-6);
  letter-spacing: -0.014em;
  font-family: 'customFont650';
  font-weight: 600;
  text-align: center;
  border-radius: 6px;
}
</style>

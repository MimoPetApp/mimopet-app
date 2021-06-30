<template>
  <QBtn v-bind="$attrs" />
</template>

<script>
import { QBtn } from 'quasar'

export default {
  name: 'Button',
  components: { QBtn },
  inheritAttrs: true,
  props: {
    // color: {
    //   type: String,
    //   default: 'primary-filled',
    //   validate: val => ['primary-filled', 'primary-flat', 'outline'].indexOf(val) !== -1
    // },
    rounded: {
      type: Boolean
    }
  },
  computed: {
    // isOutline: () => {
    //   return this.$attrs.color.includes('-outline')
    // },
    // isFlat: () => {
    //   console.log()
    //   return this.$attrs.color.includes('-bordless')
    // }
  }
}
</script>

<style lang="scss">
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

.bg-secondary-bordless {
  color: var(--main-primary) !important;
  &:disabled {
    color: var(--utilities-alternate) !important;
  }
  &:active {
    color: var(--main-primary) !important;
  }
}
</style>

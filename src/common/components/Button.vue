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
    test: {
      type: String,
      default: '',
      validate: val => ['', 'secondary', 'outline'].indexOf(val) !== -1
    },
    rounded: {
      type: Boolean
    }
  }
}
</script>

<style scoped>
.bg-primary {
  color: var(--main-background) !important;
  background: var(--main-primary) !important;
}

.bg-secondary {
  color: var(--main-background) !important;
  background: var(--main-secondary) !important;
}

.bg-disabled {
  color: var(--utilities-alternate) !important;
  background: var(--utilities-border) !important;
}
</style>

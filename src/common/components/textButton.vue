<template>
  <q-btn
    :to="to"
    :type="type"
    :color="color"
    flat
    size="md"
    :icon="icon"
    no-caps
    :loading="loading"
    :disable="disable"
    @click="click"
  >
    <span :class="'login-text' + (icon && ' q-ml-xs')">{{ label }}</span>
  </q-btn>
</template>

<script>
export default {
  name: 'TextButton',
  props: {
    to: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'positive'
    },
    icon: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'button'
    },
    click: {
      type: Function,
      default: () => {}
    },
    loading: {
      type: Boolean,
      default: false
    },
    disable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
</style>

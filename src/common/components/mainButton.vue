<template>
  <q-btn
    :to="to"
    :type="type"
    color="main-primary"
    class="main-button no-shadow"
    :loading="loading"
    :disable="disable"
    @click="click"
  >
    <span class="mimo-text main-button__text mimo-text--white">{{ label }}</span>
  </q-btn>
</template>

<script>
export default {
  name: 'MainButton',
  props: {
    to: {
      type: String,
      default: ''
    },
    label: {
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

<style lang="scss"></style>

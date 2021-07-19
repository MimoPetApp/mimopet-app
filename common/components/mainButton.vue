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
    <span class="mimo-text main-button-text mimo-text--white">{{ label }}</span>
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

<style lang="scss">
$text-main-button-size: 1.16rem;

.main-button {
  width: clamp(200px, 55vw, 300px);
  padding: $text-main-button-size / 2;
  border-radius: $text-main-button-size / 1.5;
}
.main-button-text {
  font-size: $text-main-button-size;
  font-family: 'customfont600';
  text-transform: capitalize;
}
</style>

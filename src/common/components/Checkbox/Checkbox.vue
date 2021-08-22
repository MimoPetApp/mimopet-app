<template>
  <QCheckbox
    v-bind="$attrs"
    class="checkbox-wrapper"
    :class="[type === 'rounded' ? 'checkbox-wrapper--rounded' : 'checkbox-wrapper--squared']"
    :color="color"
  ></QCheckbox>
</template>

<script>
import { QCheckbox } from 'quasar'
export const CheckboxColors = ['main-primary', 'status-success']
export const CheckboxTypes = ['rounded', 'squared']

export default {
  name: 'Checkbox',
  components: {
    QCheckbox
  },
  inheritAttrs: true,
  props: {
    color: {
      type: String,
      default: 'main-primary',
      validate: val => CheckboxColors.indexOf(val) !== -1
    },
    type: {
      type: String,
      default: 'squared',
      validate: val => CheckboxTypes.indexOf(val) !== -1
    }
  }
}
</script>

<style lang="scss" scoped>
.checkbox-wrapper {
  ::v-deep(.q-checkbox__bg) {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ::v-deep(.q-checkbox__svg) {
    width: 15px !important;
    height: 10px !important;
    position: relative;
  }
  &--squared {
    ::v-deep(.q-checkbox__bg) {
      border-radius: 4px;
    }
  }
  &--rounded {
    ::v-deep(.q-checkbox__bg) {
      border-radius: 10px;
    }
  }
  &:hover {
    cursor: pointer;
  }
}
</style>

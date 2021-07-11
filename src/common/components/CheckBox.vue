<template>
  <div class="checkBox" v-bind="$attrs">
    <div
      class="checkBox__wrapper flex items-center justify-center"
      :class="[
        type === 'rounded' ? 'checkBox__wrapper--rounded' : 'checkBox__wrapper--squared',
        selected ? 'checkBox__wrapper--selected' : '',
        color ? `checkBox__wrapper--${color}` : ''
      ]"
    >
      <QIcon v-if="selected" name="check" size="15px" />
    </div>
    <QCheckbox></QCheckbox>
  </div>
</template>

<script>
import { QIcon, QCheckbox } from 'quasar'
export default {
  name: 'CheckBox',
  components: {
    QIcon,
    QCheckbox
  },
  inheritAttrs: true,
  props: {
    color: {
      type: String,
      default: 'main-primary',
      validate: val => ['main-primary'].indexOf(val) !== -1
    },
    type: {
      type: String,
      default: 'squared',
      validate: val => ['rounded', 'squared'].indexOf(val) !== -1
    },
    selected: {
      type: Boolean,
      default: false,
      validate: val => [true, false].indexOf(val) !== -1
    }
  }
}
</script>

<style lang="scss" scoped>
.checkBox {
  &__wrapper {
    width: 20px;
    height: 20px;
    background: transparent;
    border-width: 2px;
    border-style: solid;
    &--squared {
      border-radius: 5px;
    }
    &--selected {
      background: var(--main-primary);
      i {
        color: var(--main-background);
      }
    }
    &--rounded {
      border-radius: 10px;
    }
    &--main-primary {
      border-color: var(--main-primary);
    }
  }
  &:hover {
    cursor: pointer;
  }
}
</style>

<template>
  <div class="linesMark" v-bind="$attrs">
    <div class="row">
      <div class="col-xs-12 col-md-12 flex">
        <check-box
          v-if="mark === 'checkbox'"
          :color="color"
          :type="type"
          :selected="selected"
        ></check-box>
        <radio-button v-if="mark === 'radio'" :color="color" :selected="selected"></radio-button>
        <p class="ml-2">{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import CheckBox from './CheckBox.vue'
import RadioButton from './RadioButton.vue'

export default {
  name: 'LinesMark',
  components: {
    CheckBox,
    RadioButton
  },
  inheritAttrs: true,
  props: {
    mark: {
      type: String,
      default: 'none',
      validate: val => ['checkbox', 'radio', 'none'].indexOf(val) !== -1
    },
    type: {
      type: String,
      default: 'squared',
      validate: val => ['rounded', 'squared'].indexOf(val) !== -1
    },
    color: {
      type: String,
      default: 'main-primary',
      validate: val => ['main-primary'].indexOf(val) !== -1
    },
    selected: {
      type: Boolean,
      default: false,
      validate: val => [true, false].indexOf(val) !== -1
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.checkbox {
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

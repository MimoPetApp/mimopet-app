<template>
  <div class="radioButton" v-bind="$attrs">
    <div
      class="radioButton__wrapper flex items-center justify-center"
      :class="[selected ? `radioButton__wrapper--selected radioButton__wrapper--${color}` : '']"
    >
      <div
        :class="[
          selected ? `radioButton__wrapper__circle radioButton__wrapper__circle--${color}` : ''
        ]"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RadioButton',
  inheritAttrs: true,
  props: {
    color: {
      type: String,
      default: 'main-primary',
      validate: val => ['main-primary'].indexOf(val) !== -1
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
.radioButton {
  &__wrapper {
    width: 20px;
    height: 20px;
    background: transparent;
    border: 2px solid var(--utilities-border);
    border-radius: 10px;
    &--selected {
      border-style: solid;
      border-width: 2px;
    }
    &--main-primary {
      border-color: var(--main-primary);
    }
    &__circle {
      width: 10px;
      height: 10px;
      border-radius: 10px;
      &--main-primary {
        background: var(--main-primary);
      }
    }
  }
  &:hover {
    cursor: pointer;
  }
}
</style>

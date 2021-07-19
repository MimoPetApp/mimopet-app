<template>
  <div class="button-checkbox-group-wrapper">
    <div
      v-for="(option, index) in options"
      :key="index"
      class="button-checkbox-wrapper"
      :class="{ 'button-checkbox-wrapper--selected': option.selected }"
      @click="clicked(option, index)"
    >
      <div class="row" style="height: inherit">
        <div class="col-12 col-md-12 col-xs-12 flex justify-center items-center relative-position">
          <h6
            class="button-checkbox-wrapper__option-label"
            :class="{ 'button-checkbox-wrapper__option-label--selected': option.selected }"
          >
            {{ option.label }}
          </h6>
          <checkbox
            v-model="option.selected"
            type="rounded"
            color="status-success"
            class="checkbox-style"
          ></checkbox>
        </div>
        <div v-if="option.selected" class="flex justify-start items-center"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from './CheckBox.vue'
export const ButtonCheckboxGroupColors = ['main-primary']

export default {
  name: 'ButtonCheckboxGroup',
  components: {
    Checkbox
  },
  props: {
    color: {
      type: String,
      default: 'main-primary',
      validate: val => ButtonCheckboxGroupColors.indexOf(val) !== -1
    },
    options: {
      type: Array,
      default: null
    },
    answer: {
      type: String,
      default: ''
    }
  },
  computed: {},
  methods: {
    clicked(option, index) {
      return (option.selected = !option.selected)
    }
  }
}
</script>

<style lang="scss" scoped>
.button-checkbox-group-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 230px;
  padding: 0 16px;
  overflow: scroll;
}
.button-checkbox-wrapper {
  width: 228px;
  height: 48px;
  min-height: 48px;
  border-width: 1px;
  border-color: var(--utilities-disabled);
  border-style: solid;
  border-radius: 6px;
  margin-bottom: var(--font-size-6);
  &__option-label {
    font-size: var(--font-size-4);
    line-height: var(--font-size-6);
    letter-spacing: -0.014em;
    font-family: 'customFont650';
    text-align: center;
    color: var(--utilities-alternate);
    margin: 0;
    &--selected {
      color: var(--main-background);
    }
  }
  &--selected {
    background-color: var(--status-sucess);
    border-color: var(--status-sucess);
  }
}
.checkbox-style {
  position: absolute;
  right: 25px;
}
</style>

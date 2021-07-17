<template>
  <div class="button-checkbox-group-wrapper">
    <div
      v-for="(option, index) in options"
      :key="index"
      class="button-checkbox-wrapper"
      :class="{ 'button-checkbox-wrapper--selected': option.selected }"
      @click="clicked"
    >
      <div class="row">
        <div class="col-12 col-md-12 col-xs-12">
          <h6
            class="button-checkbox-wrapper__option-label"
            :class="{ 'button-checkbox-wrapper__option-label--selected': option.selected }"
          >
            {{ option.label }}
          </h6>
          <!--<checkbox></checkbox>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Checkbox from './CheckBox.vue'
export default {
  name: 'ButtonCheckboxGroup',
  components: {
    // Checkbox
  },
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
    },
    options: {
      type: Array,
      default: null
    },
    answer: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: 'Insert your label'
    }
  },
  computed: {},
  methods: {
    clicked() {
      return 'button-checkbox-wrapper--selected'
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
  height: 220px;
  padding: 0 16px;
  overflow: scroll;
}
.button-checkbox-wrapper {
  //min-height: calc(100vh - 115px);
  width: 228px;
  height: 48px;
  border-width: 1px;
  border-color: var(--utilities-disabled);
  border-style: solid;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: var(--font-size-6);
  &__option-label {
    font-size: var(--font-size-4);
    line-height: var(--font-size-6);
    letter-spacing: -0.014em;
    font-family: 'customFont650';
    text-align: center;
    color: var(--utilities-alternate);
    &--selected {
      color: var(--main-background);
    }
  }
  &--selected {
    background-color: var(--status-sucess);
    border-color: var(--status-sucess);
  }
}
</style>

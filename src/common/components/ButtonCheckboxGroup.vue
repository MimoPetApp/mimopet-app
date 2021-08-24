<template>
  <div class="button-checkbox-group-wrapper">
    <div
      v-for="(option, index) in options"
      :key="index"
      class="button-checkbox-wrapper"
      :class="{
        'button-checkbox-wrapper--selected': option.selected,
        'button-checkbox-wrapper--error': option.error
      }"
      @click="clicked(option, index)"
    >
      <div class="row" style="height: inherit">
        <div class="col-12 col-md-12 col-xs-12 flex justify-center items-center relative-position">
          <h6
            class="button-checkbox-wrapper__option-label"
            :class="{
              'button-checkbox-wrapper__option-label--selected': option.selected
            }"
          >
            {{ option.label }}
          </h6>
          <checkbox
            v-if="!option.error && option.selected"
            v-model="option.selected"
            type="rounded"
            color="status-success"
            class="checkbox-style"
            disable
          ></checkbox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from './Checkbox/Checkbox.vue'
export const ButtonCheckboxColors = ['main-primary', 'status-danger', 'status-success']

export default {
  name: 'ButtonCheckboxGroup',
  data () {
    return {
      chosenAnswer: false,
      selectedOptions: [],
      selected: false
    }
  },
  components: {
    Checkbox
  },
  props: {
    options: {
      type: Array,
      default: null
    },
    answer: {
      type: String,
      default: ''
    },
    singleSelection: {
      type: Boolean,
      default: false
    }
  },
  computed: {},
  methods: {
    clicked (option, index) {
      if (this.singleSelection) {
        // single selection with no answer
        if (!this.selected) {
          this.selectedOptions.push(option)
          option.selected = !option.selected
          this.selected = true
        } else {
          this.toggleSelection(option)
        }
        this.$emit('selected', this.selectedOptions)
      } else if (!this.answer) {
        // feedback screen
        if (this.hasAlreadySelected(option)) {
          this.removeSelectedOption(option)
        } else {
          this.selectedOptions.push(option)
        }
        option.selected = !option.selected
        this.$emit('selected', this.selectedOptions)
      } else {
        // quiz screen
        if (!this.chosenAnswer) {
          option.selected = true
          this.selectedOptions.push(option)
          if (!this.isCorrect(option.label, this.answer, index)) {
            option.error = !this.isCorrect(option.label, this.answer, index)
            this.showCorrectAnswer()
          }
          this.chosenAnswer = true
          this.$emit('answered', this.selectedOptions)
        }
      }
    },
    toggleSelection (option) {
      if (this.selectedOptions.length > 0) {
        // remove selection
        this.selectedOptions[0].selected = false
        this.selectedOptions.shift()
        // add selection
        this.selectedOptions.push(option)
        option.selected = true
      }
    },
    // mapea-se 2 grandezas do mesmo tipo a serem comparadas se sao iguais
    isCorrect (option1, option2, index = 0) {
      return option1.toLowerCase() === option2.toLowerCase()
    },
    showCorrectAnswer () {
      this.options.forEach(option => {
        if (this.isCorrect(option.label, this.answer)) {
          option.selected = true
        }
      })
    },
    hasAlreadySelected (option) {
      let has = false
      if (this.selectedOptions.length > 0) {
        this.selectedOptions.forEach(selectedOption => {
          if (this.isCorrect(selectedOption.label, option.label)) {
            has = true
          }
        })
      }
      return has
    },
    removeSelectedOption (option) {
      for (let index = 0; index < this.selectedOptions.length; index++) {
        if (this.isCorrect(this.selectedOptions[index].label, option.label)) {
          this.selectedOptions.splice(index, 1)
        }
      }
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
  &--error {
    background-color: var(--status-danger);
    border-color: var(--status-danger);
  }
}
.checkbox-style {
  position: absolute;
  right: 5px;
}
</style>

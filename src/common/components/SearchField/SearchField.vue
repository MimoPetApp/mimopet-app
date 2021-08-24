<template>
  <QInput
    v-bind="$attrs"
    :class="textFieldClass"
    :input-class="textFieldInputClass"
    type="search"
    :filled="!outline"
    :outlined="outline"
    clearable
    no-error-icon
    standout="bg-utilities-border text-main-alternate"
    :label="showLabel ? label : ''"
    @focus="onFocus"
    @blur="onBlur"
  >
    <template v-slot:prepend>
      <q-icon name="search" color="main-alternate" />
    </template>
    <template v-slot:append>
      <Button
        v-for="(item, index) in filters"
        :key="`filter-${index}`"
        class="tag-button no-shadow"
        color="alternate-filled"
        :label="item"
        outline
        no-caps
        flat
      />
    </template>
  </QInput>
</template>

<script>
import { QInput } from 'quasar'
import Button from '../../../common/components/Button/Button'
export default {
  name: 'SearchField',
  components: { QInput, Button },
  props: {
    label: {
      type: String
    },
    align: {
      type: String,
      default: 'left',
      validate: val => ['left', 'right', 'center', 'bottom'].indexOf(val) !== -1
    },
    light: {
      type: Boolean,
      default: true
    },
    outline: {
      type: Boolean,
      default: false
    },
    filters: {
      type: Array
    }
  },
  computed: {
    textFieldClass: function () {
      const classes = ['text-field', `text-field--${this.align}`, 'search-field']
      if (this.light) classes.push('text-field--light')
      else classes.push('text-field--dark')
      return classes
    },
    textFieldInputClass: function () {
      return ['text-field__content', `text-field__content--${this.align}`]
    }
  },
  methods: {
    onBlur() {
      const value = this.$attrs.modelValue || ''
      this.showLabel = value.length === 0
    },
    onFocus() {
      this.showLabel = false
    }
  },
  data() {
    return {
      showLabel: true
    }
  }
}
</script>

<style lang="scss">
.search-field.q-field--filled .q-field__control,
.search-field.q-field--outlined .q-field__control {
  padding: 0 var(--spacing-2) 0 var(--spacing-4);
}
</style>

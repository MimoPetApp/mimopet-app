<template>
  <QInput
    v-bind="$attrs"
    :class="textFieldClass"
    :input-class="textFieldInputClass"
    type="search"
    filled
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
      <!-- -->
    </template>
  </QInput>
</template>

<script>
import { QInput } from 'quasar'
export default {
  name: 'TextField',
  components: { QInput },
  props: {
    label: {
      type: String
    },
    light: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    textFieldClass: function () {
      const classes = ['text-field']
      if (this.light) classes.push('text-field--light')
      else classes.push('text-field--dark')
      return classes
    },
    textFieldInputClass: function () {
      return ['text-field__content']
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

<style lang="scss"></style>

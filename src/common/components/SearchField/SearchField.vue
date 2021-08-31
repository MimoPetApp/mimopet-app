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
      const classes = ['search-field', `search-field--${this.align}`]
      if (this.light) classes.push('search-field--light')
      else classes.push('search-field--dark')
      return classes
    },
    textFieldInputClass: function () {
      return ['search-field__content', `search-field__content--${this.align}`]
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
.search-field {
  font-family: 'customfont600';
  color: var(--utilities-alternate);
  border-radius: var(--spacing-1);

  &__content {
    font-family: 'customfont700';
    font-weight: 500;
    color: var(--main-alternate);
    font-size: var(--font-size-4);
    margin-top: clamp(-15px, -10%, -1px);
  }

  &__content--center {
    text-align: center !important;
    padding-left: 0 !important;
  }

  &--center > .q-field__inner {
    text-align: center !important;
  }
}

.q-field {
  font-size: var(--font-size-3);

  &__marginal {
    color: var(--utilities-icon);
  }

  &__inner {
    text-align: left !important;
  }

  &__label {
    font-family: 'customfont600';
    font-size: var(--font-size-4) !important;
  }

  &__bottom {
    font-family: 'customfont600';
    font-size: var(--font-size-3) !important;
  }

  &--filled &__control {
    border-radius: var(--spacing-2);
    padding: 0 var(--spacing-2);
  }

  &--filled &__control:after {
    height: 0px !important;
  }

  &--filled &__control:before {
    border-bottom: 0px !important;
  }

  &--outlined &__control {
    border-radius: var(--spacing-1);
    border: 2px solid var(--utilities-disabled);
    padding: 0 var(--spacing-2);
  }

  &--error &__bottom {
    color: var(--status-danger) !important;
  }

  &--highlighted &__control:before {
    background: rgba(0, 0, 0, 0) !important;
  }
}

.text-negative {
  color: var(--status-danger) !important;
}

.text-field--light.q-field--filled .q-field__control {
  background: var(--main-background);
}

.text-field--dark.q-field--filled .q-field__control {
  background: var(--utilities-border);
}
</style>

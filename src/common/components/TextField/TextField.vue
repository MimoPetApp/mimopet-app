<template>
  <QInput
    v-bind="$attrs"
    :type="!showPassword ? 'password' : $attrs['type']"
    :class="textFieldClass"
    :input-class="textFieldInputClass"
    filled
    no-error-icon
    standout="bg-utilities-border text-main-alternate"
  >
    <template v-if="isPassword" v-slot:append>
      <q-icon
        :name="!showPassword ? 'visibility_off' : 'visibility'"
        class="cursor-pointer"
        @click="showPassword = !showPassword"
      />
    </template>
  </QInput>
</template>

<script>
import { QInput } from 'quasar'
export default {
  name: 'TextField',
  components: { QInput },
  props: {
    icon: {
      type: String
    },
    align: {
      type: String,
      default: 'left'
    },
    light: {
      type: Boolean,
      default: false
    },
    isPassword: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    textFieldClass: function () {
      const classes = ['text-field', `text-field--${this.align}`]
      if (this.light) classes.push('text-field--light')
      else classes.push('text-field--dark')
      return classes
    },
    textFieldInputClass: function () {
      return ['text-field__content', `text-field__content--${this.align}`]
    }
  },
  data() {
    return {
      showPassword: false
    }
  }
}
</script>

<style lang="scss">
.text-field {
  font-family: 'customfont600';
  color: var(--utilities-alternate);

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
    border-radius: 15px;
    padding: 0 var(--spacing-4);
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

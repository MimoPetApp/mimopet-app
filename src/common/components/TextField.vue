<template>
  <QInput
    v-bind="$attrs"
    :type="!showPassword ? 'password' : $attrs['type']"
    class="text-field"
    input-class="text-field__content"
    filled
    no-error-icon
    color="color"
    bg-color="utilities-border"
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
    color: {
      type: String,
      default: 'utilities-alternate',
      validate: val => {
        const colors = ['utilities-alternate']
        return colors.indexOf(val) !== -1
      }
    },
    icon: {
      type: String
    },
    isPassword: {
      type: Boolean,
      default: false
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
    background: var(--utilities-border);
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
</style>

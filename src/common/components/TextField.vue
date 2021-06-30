<template>
  <q-input
    v-model="content"
    :type="type"
    :label="showLabel ? label : ''"
    class="text-field"
    input-class="text-field__content"
    filled
    no-error-icon
    color="utilities-alternate"
    bg-color="utilities-border"
    standout="bg-utilities-border text-main-alternate"
    :loading="loading"
    :disable="disable"
    @focus="showLabel = false"
    @blur="showLabel = content.length == 0"
  >
    <template v-if="icon" v-slot:append>
      <q-icon :name="icon" class="cursor-pointer" />
    </template>
  </q-input>
</template>

<script>
export default {
  name: 'TextField',
  props: {
    label: {
      type: String,
      default: ''
    },
    dark: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    },
    loading: {
      type: Boolean,
      default: false
    },
    disable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showLabel: true,
      content: ''
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
    color: #d2d6dc; // TODO: Mapear essa cor
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

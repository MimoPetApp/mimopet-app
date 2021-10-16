<template>
  <QDialog v-bind="$attrs" :model-value="active" position="bottom" full-width>
    <q-card class="payment-dialog__card">
      <q-card-section class="">
        <h2 class="payment-dialog__text payment-dialog__title text-main-alternate mb-1">
          {{ title }}
        </h2>
        <h3 class="payment-dialog__text payment-dialog__subtitle text-utilities-alternate mb-1 p-0">
          {{ subtitle }}
        </h3>
        <h3 class="payment-dialog__text payment-dialog__description text-main-alternate m-0 p-0">
          {{ description }}
        </h3>
      </q-card-section>
      <q-card-section class="text-center">
        <Button
          class="payment-dialog__button main-button no-shadow mb-3"
          color="alternate-filled"
          height="52px"
          :label="buttonText"
          @click="action"
          no-caps
          flat
        >
          <template v-slot:icon>
            <q-icon right size="16px" name="filter_none" />
          </template>
        </Button>
        <Button
          v-if="subButtonText"
          class="main-button no-shadow text-weight-bold bg-utilities-disabled"
          color="secondary-bordless"
          :label="subButtonText"
          @click="subAction"
          outline
          no-caps
        />
      </q-card-section>
    </q-card>
  </QDialog>
</template>

<script>
import { QDialog } from 'quasar'
import Button from '../../Button/Button'
export default {
  name: 'PaymentModal',
  components: { QDialog, Button },
  props: {
    active: {
      type: Boolean,
      default: true
    },
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    description: {
      type: String
    },
    buttonText: {
      type: String
    },
    subButtonText: {
      type: String
    },
    action: {
      type: Function
    },
    subAction: {
      type: Function
    },
    icon: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.payment-dialog {
  &__card {
    height: 65vh;
    background: var(--main-background);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: var(--spacing-4);
  }

  &__text {
    padding: 0 32px;
  }

  &__title {
    font-family: 'customfont700';
    font-size: var(--font-size-6);
    line-height: calc(var(--font-size-6) + 0.25rem);
    letter-spacing: -0.014em;
    font-weight: bold;
  }

  &__subtitle {
    font-family: 'customfont650';
    font-size: var(--font-size-5);
    line-height: calc(var(--font-size-5) + 0.25rem);
    font-weight: 600;
    letter-spacing: -0.014em;
    margin-bottom: 9px;
  }

  &__description {
    font-family: 'customfont620';
    font-size: var(--font-size-4);
    line-height: calc(var(--font-size-4) + 0.25rem);
    font-weight: 500;
    letter-spacing: -0.014em;
  }

  &__button {
    color: var(--main-background);
    background: var(--main-primary);
    font-weight: 400;
    height: 52px;
  }
}
</style>

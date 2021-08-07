<template>
  <QDialog v-bind="$attrs" :model-value="active" position="bottom" persistent full-width>
    <q-card class="feedback-dialog__card text-center">
      <q-card-section class="mt-5">
        <q-img :src="`/assets/images/${icon}`" width="80px" />
        <h1 class="feedback-dialog__text feedback-dialog__title mb-1 mt-1">{{ title }}</h1>
        <h2 class="feedback-dialog__text feedback-dialog__subtitle">{{ subtitle }}</h2>
      </q-card-section>
      <q-card-section class="mb-3">
        <Button
          v-if="subButtonText"
          class="main-button no-shadow text-weight-bold mb-2"
          color="secondary-bordless"
          :label="subButtonText"
          @click="subAction"
          outline
          no-caps
        />
        <Button
          class="feedback-dialog__button main-button no-shadow"
          color="alternate-filled"
          :label="buttonText"
          @click="action"
          no-caps
          flat
        />
      </q-card-section>
    </q-card>
  </QDialog>
</template>

<script>
import { QDialog } from 'quasar'
import Button from '../../../common/components/Button/Button'
export default {
  name: 'Feedback',
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
      type: String,
      default: 'feedback/check.png'
    }
  }
}
</script>

<style lang="scss" scoped>
.feedback-dialog {
  &__card {
    height: 65vh;
    background: var(--main-background);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: var(--spacing-4);
  }

  &__text {
    max-width: 70%;
    margin: 0 auto;
  }

  &__title {
    color: var(--main-alternative);
    font-size: var(--font-size-8);
    line-height: var(--font-size-9);
    letter-spacing: -0.014em;
    font-weight: 400;
  }

  &__subtitle {
    color: var(--utilities-alternate);
    font-size: var(--font-size-5);
    line-height: var(--font-size-7);
    letter-spacing: -0.014em;
    font-weight: 100;
  }

  &__button {
    color: var(--main-background);
    background: var(--main-primary);
    font-weight: 400;
  }
}
</style>

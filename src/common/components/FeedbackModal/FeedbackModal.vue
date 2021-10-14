<template>
  <QDialog v-bind="$attrs" :model-value="active" position="bottom" persistent full-width>
    <q-card class="feedback-dialog__card text-center">
      <q-card-section class="">
        <q-avatar v-if="icon" size="80px">
          <img :src="icon" />
        </q-avatar>
        <h2 class="feedback-dialog__text feedback-dialog__title text-main-alternate mb-2 mt-2">
          {{ title }}
        </h2>
        <h3
          class="feedback-dialog__text feedback-dialog__subtitle text-utilities-alternate m-0 p-0"
        >
          {{ subtitle }}
        </h3>
      </q-card-section>
      <q-card-section class="">
        <Button
          v-if="subButtonText"
          class="main-button no-shadow text-weight-bold mb-2"
          color="primary-flat"
          :label="subButtonText"
          @click="subAction"
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
  name: 'FeedbackModal',
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
      type: String
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
    justify-content: space-around;
    border-radius: var(--spacing-4);
  }

  &__text {
    max-width: 70%;
    margin-left: auto;
    margin-right: auto;
  }

  &__title {
    font-size: var(--font-size-8);
    line-height: calc(var(--font-size-8) + 0.25rem);
    letter-spacing: -0.014em;
    font-weight: 400;
  }

  &__subtitle {
    font-size: var(--font-size-5);
    line-height: calc(var(--font-size-5) + 0.25rem);
    font-weight: 100;
  }

  &__button {
    color: var(--main-background);
    background: var(--main-primary);
    font-weight: 400;
  }
}
</style>

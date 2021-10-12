<template>
  <QDialog
    v-bind="$attrs"
    :model-value="active"
    position="bottom"
    full-width
    class="support-dialog"
  >
    <q-card class="support-dialog__card">
      <q-card-section class="">
        <h2 class="support-dialog__text support-dialog__title text-main-alternate mt-3">
          Fale conosco 😉
        </h2>
        <h3 class="support-dialog__text support-dialog__subtitle text-utilities-alternate p-0">
          Deseja enviar email para o suporte?
        </h3>
        <h3 class="support-dialog__text support-dialog__description text-main-alternate p-0">
          Envie seus problemas, dúvidas e sugestões sobre o app para o e-mail
          <strong>suporte@mimopetapp.com</strong>
        </h3>
      </q-card-section>
      <q-card-section class="text-center">
        <Button
          class="main-button no-shadow text-weight-bold bg-utilities-disabled"
          color="secondary-bordless"
          :label="'Entendi'"
          @click="action"
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
  name: 'SupportModal',
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
    action: {
      type: Function
    }
  }
}
</script>

<style lang="scss" scoped>
.support-dialog {
  &__card {
    height: 49vh;
    background: var(--main-background);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: var(--spacing-4);
  }

  &__text {
    padding-left: 15px;
    padding-right: 12px;
  }

  &__title {
    font-family: 'customfont700';
    font-size: var(--font-size-6);
    line-height: calc(var(--font-size-6) + 0.25rem);
    letter-spacing: -0.014em;
    font-weight: bold;
    margin-bottom: 12px;
  }

  &__subtitle {
    font-family: 'customfont650';
    font-size: var(--font-size-5);
    line-height: calc(var(--font-size-5) + 0.25rem);
    font-weight: 600;
    letter-spacing: -0.014em;
    margin-bottom: 19px;
  }

  &__description {
    font-family: 'customfont620';
    font-size: var(--font-size-4);
    line-height: calc(var(--font-size-4) + 0.25rem);
    font-weight: 500;
    letter-spacing: -0.014em;
    margin-bottom: 15px;
  }

  &__button {
    color: var(--main-background);
    background: var(--main-primary);
    font-weight: 400;
    height: 48px;
  }
}
</style>

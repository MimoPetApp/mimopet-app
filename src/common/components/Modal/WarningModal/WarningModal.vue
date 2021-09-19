<template>
  <BaseModal :model-value="active" persistent @before-hide="onHide">
    <q-card-section align="center" class="m-0 mt-4 p-0">
      <h4 class="warning-modal__title text-main-alternate text-weight-bold m-0 p-0 pr-3 pl-3 pb-1">
        {{ title }}
      </h4>
    </q-card-section>

    <q-card-section class="m-0 p-0 text-center">
      <p class="warning-modal__message text-utilities-alternate m-0 p-3 pt-0">
        {{ message }}
      </p>
    </q-card-section>

    <q-separator class="bg-utilities-border" />
    <q-card-actions align="center" class="m-0 p-1">
      <Button
        :label="btnLabel"
        color="utilities-alternate"
        class="text-weight-thin"
        v-close-popup
        flat
        no-caps
      />
    </q-card-actions>
  </BaseModal>
</template>

<script>
import BaseModal from '../../Modal/BaseModal/BaseModal'
import Button from '../../Button/Button'
export default {
  name: 'WarningModal',
  components: {
    BaseModal,
    Button
  },
  props: {
    active: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Aviso'
    },
    message: {
      type: String,
      default: ''
    },
    btnLabel: {
      type: String,
      default: 'Ok'
    },
    onHide: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.warning-modal {
  &__message {
    font-size: var(--font-size-4);
    line-height: calc(var(--font-size-4) + 0.5rem);
  }

  &__title {
    line-height: calc(var(--font-size-6) + 0.25rem);
  }
}
</style>

<template>
  <BaseModal :model-value="content.model" persistent @before-hide="onHide">
    <q-card-section align="center" class="m-0 mt-4 p-0">
      <h4 class="action-modal__title text-main-alternate text-weight-bold m-0 p-0 pr-3 pl-3 pb-1">
        {{ content.data.title }}
      </h4>
    </q-card-section>

    <q-card-section class="m-0 p-0 text-center">
      <p class="action-modal__message text-utilities-alternate m-0 p-3 pt-0">
        {{ content.data.message }}
      </p>
    </q-card-section>

    <q-separator class="bg-utilities-border" />
    <q-card-actions align="around" class="action-modal__actions">
      <Button
        :label="content.data.backLabel"
        color="utilities-alternate"
        class="action-modal__button ml-1"
        flat
        no-caps
        v-close-popup
      />
      <q-separator class="bg-utilitiesb-border" vertical />
      <Button
        :label="content.data.btnLabel"
        color="utilities-alternate"
        class="action-modal__button mr-1"
        flat
        no-caps
        v-close-popup
      />
    </q-card-actions>
  </BaseModal>
</template>

<script>
import BaseModal from '../../Modal/BaseModal/BaseModal'
import Button from '../../Button/Button'
export default {
  name: 'ActionModal',
  components: {
    BaseModal,
    Button
  },
  props: {
    content: {
      type: Object,
      default() {
        return {
          model: false,
          data: {
            title: '',
            message: '',
            backLabel: '',
            btnLabel: ''
          }
        }
      }
    },
    onHide: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.action-modal {
  &__message {
    font-size: var(--font-size-4);
    line-height: calc(var(--font-size-4) + 0.5rem);
  }

  &__title {
    line-height: calc(var(--font-size-6) + 0.25rem);
  }

  &__button {
    width: 40% !important;
  }
}
</style>

<template>
  <BaseModal :model-value="content.model" persistent @before-hide="onHide">
    <q-card-section align="center" class="m-0 mt-4 p-0">
      <h4 class="warning-modal__title text-main-alternate text-weight-bold m-0 p-0 pr-3 pl-3 pb-1">
        {{ content.data.title }}
      </h4>
    </q-card-section>

    <q-card-section class="m-0 p-0 text-center">
      <q-rating
        v-model="ratingModel"
        size="3.5em"
        color="utilities-border"
        color-selected="status-warning"
        icon="star"
        icon-selected="star"
        no-dimming
        class="m-0 p-0 pb-4 pt-2"
      />
    </q-card-section>

    <q-separator class="bg-utilities-border" />
    <q-card-actions align="center" class="m-0 p-1">
      <Button
        :label="content.data.btnLabel"
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
  name: 'EvaluateTraining',
  data() {
    return {
      ratingModel: 0
    }
  },
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

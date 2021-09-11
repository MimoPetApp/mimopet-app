<template>
  <QDialog v-bind="$attrs" class="base-modal" full-width>
    <q-card class="base-modal__card">
      <slot></slot>
    </q-card>
  </QDialog>
</template>

<script>
import { QDialog } from 'quasar'
export default {
  name: 'BaseModal',
  components: { QDialog },
  props: {}
}
</script>

<style lang="scss" scoped>
.base-modal {
  &__card {
    background: var(--main-background);
    border-radius: var(--spacing-3) !important;
  }
}
</style>

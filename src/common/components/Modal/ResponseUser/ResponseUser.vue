<template>
  <WarningModal
    :active="modalResponseUser.modal"
    :title="modalResponseUser.data.title"
    :message="modalResponseUser.data.message"
    :btnLabel="modalResponseUser.data.btnLabel"
    :onHide="beforeHideModal"
  />
</template>

<script>
import { mapState, mapActions } from 'vuex'
import WarningModal from '../../Modal/WarningModal/WarningModal'
export default {
  name: 'ResponseUser',
  components: {
    WarningModal
  },
  data() {
    return {
      model: true
    }
  },
  computed: {
    ...mapState('auth', ['modalResponseUser'])
  },
  methods: {
    ...mapActions('auth', ['ActionModalResponseUser']),
    beforeHideModal() {
      this.ActionModalResponseUser({ modal: false, data: {} })
    }
  }
}
</script>

<style lang="scss" scoped></style>

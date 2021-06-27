<template>
  <q-dialog
    :value="modalResponseUser.modal"
    persistent
    @before-hide="beforeHideModal"
  >
    <q-card style="width: 400px">
      <q-card-section>
        <div class="text-h6">Aviso</div>
      </q-card-section>

      <q-card-section class="q-pt-none text-center text-h6">
        {{ modalResponseUser.data.msg }}
      </q-card-section>

      <q-card-actions align="center">
        <q-btn v-close-popup flat label="OK" color="primary" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "ModalNotLogged",
  computed: {
    ...mapState("auth", ["modalResponseUser"])
  },
  methods: {
    ...mapActions("auth", ["ActionModalResponseUser"]),
    beforeHideModal() {
      this.ActionModalResponseUser({ modal: false, data: {} });
    },
  },
};
</script>

<style></style>

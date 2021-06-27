<template>
  <q-dialog
    :value="modalNotLogged.modal"
    persistent
    @before-hide="beforeHideModal"
  >
    <q-card>
      <q-card-section>
        <div class="text-h6">Aviso</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Sessão Expirada Faça login novamente!
        <!-- {{ modalNotLogged.data }} -->
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          v-close-popup
          flat
          label="OK"
          to="/login/logout"
          color="primary"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "ModalNotLogged",
  computed: {
    ...mapState("auth", ["modalNotLogged"]),
  },
  methods: {
    ...mapActions("auth", ["ActionModalNotLogged"]),
    beforeHideModal() {
      this.ActionModalNotLogged({ modal: false, data: {} });
    },
  },
};
</script>

<style></style>

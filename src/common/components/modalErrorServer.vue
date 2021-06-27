<template>
  <q-dialog
    :value="modalErrorServer.modal"
    persistent
    @before-hide="beforeHideModal"
  >
    <q-card style="width: 400px">
      <q-card-section>
        <div class="text-h6">Aviso</div>
      </q-card-section>

      <q-card-section class="q-pt-none text-center text-h6">
        Erro no Servidor
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
  name: "ModalErrorServer",
  computed: {
    ...mapState("auth", ["modalErrorServer"]),
    // msg() {
    //   let msgs = {
    //     user_not_found: {
    //       msg: "Usuário não encontrado!"
    //     },
    //     password_or_username_do_not_match: {
    //       msg:
    //         "Senha ou Nome de Usuário não conferem, verifique e tente novamente!"
    //     }
    //   };

    //   return Object.keys(this.modalResponseUser.data).length
    //     ? msgs[this.modalResponseUser.data.error.msg].msg
    //     : "";
    // }
  },
  methods: {
    ...mapActions("auth", ["ActionModalErrorServer"]),
    beforeHideModal() {
      this.ActionModalErrorServer({ modal: false, data: {} });
    },
  },
};
</script>

<style></style>

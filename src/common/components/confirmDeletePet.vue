<template>
  <q-dialog v-model="modalDeletePet.modal" persistent @before-hide="hide">
    <q-card v-if="step == 1" class="mimo-modal mimo-modal__dialog">
      <div class="p-2 pt-4 pb-4">
        <q-card-section class="q-py-none">
          <h4 class="m-0 text-weight-bolder text-main-alternate">Deseja excluir o pet?</h4>
        </q-card-section>

        <q-card-section v-if="!loadingPets" class="q-py-none">
          <p class="text-utilities-alternate m-0">
            Você não terá mais informações do animal vinculados a sua conta
          </p>
        </q-card-section>
        <q-card-section v-else class="q-pt-none flex flex-center">
          <Loading />
        </q-card-section>
      </div>
      <q-separator />
      <q-card-actions v-if="!loadingPets" class="q-pa-none">
        <div
          class="row justify-between flex-center"
          :style="{ width: '70%', height: '70px', margin: '0 auto' }"
        >
          <q-btn v-close-popup flat no-caps class="">
            <p class="text-utilities-alternate text-weight-bold m-0">Voltar</p>
          </q-btn>
          <q-separator vertical :spaced="false" />
          <q-btn flat no-caps class="" @click="step += 1">
            <p class="text-utilities-alternate text-weight-bold m-0">Confirmar</p>
          </q-btn>
        </div>
      </q-card-actions>
    </q-card>
    <q-card v-else-if="step == 2" class="mimo-modal mimo-modal__dialog">
      <div class="p-2 pt-4 pb-3">
        <q-card-section class="q-py-none">
          <h4 class="m-0 text-weight-bolder text-main-alternate">Confirme exclusão do pet</h4>
        </q-card-section>

        <q-card-section class="q-py-none">
          <p class="text-utilities-alternate mb-4">
            Insira o nome do animal {{ modalDeletePet.data.name }} para excluir definitivamente os
            dados
          </p>
          <TextField
            ref="confirmPetName"
            v-model="confirmPetName"
            :label="'Insira o nome do animal'"
            :rules="[val => !!val || 'Confirme o nome antes de excluir']"
          />
        </q-card-section>
      </div>
      <q-separator />
      <q-card-actions class="q-pa-none">
        <div class="row justify-center q-py-md" style="width: 100%; margin: 0 auto">
          <Button
            flat
            color="red-7"
            class="text-weight-bold"
            size="md"
            icon="delete_outline"
            no-caps
            :label="$t('petProfile.button.delete')"
            :click="confirmDelete"
          />
        </div>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Loading from './loading'
import Button from './Button/Button'
import TextField from './TextField/TextField'

export default {
  name: 'ConfirmDeletePet',
  components: {
    Loading,
    TextField,
    Button
  },
  data() {
    return {
      step: 1,
      confirmPetName: ''
    }
  },
  computed: {
    ...mapState('pets', ['modalDeletePet', 'loadingPets'])
  },
  methods: {
    ...mapActions('pets', ['ActionmodalDeletePet', 'ActionDeletePet']),
    confirmDelete() {
      if (this.confirmPetName !== this.modalDeletePet.data.name) return
      this.ActionDeletePet(this.modalDeletePet.data.id)
    },
    hide() {
      this.ActionmodalDeletePet({ modal: false, data: {} })
    }
  }
}
</script>

<style></style>

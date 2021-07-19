<template>
  <q-dialog v-model="modalDeletePet.modal" persistent @before-hide="hide">
    <q-card v-if="step == 1" class="mimo-modal mimo-modal__dialog">
      <div class="q-py-xl q-px-lg">
        <q-card-section class="q-py-none">
          <h3 class="mimo-text mimo-text__h3" style="margin: 0">Deseja excluir o pet?</h3>
        </q-card-section>

        <q-card-section v-if="!loadingPets" class="q-py-none">
          <p class="mimo-text mimo-text--light">
            Você não terá mais informações do animal vinculados a sua conta
          </p>
        </q-card-section>
        <q-card-section v-else class="q-pt-none flex flex-center">
          <Loading />
        </q-card-section>
      </div>
      <q-separator />
      <q-card-actions v-if="!loadingPets" class="q-pa-none">
        <div class="row justify-between" style="width: 70%; margin: 0 auto">
          <q-btn v-close-popup flat no-caps class="q-py-md">
            <span class="text-weight-bold mimo-text mimo-text--light">Voltar</span>
          </q-btn>
          <q-separator vertical :spaced="false" />
          <q-btn flat no-caps class="q-py-md" @click="step += 1">
            <span class="text-weight-bold mimo-text mimo-text--light">Confirmar</span>
          </q-btn>
        </div>
      </q-card-actions>
    </q-card>
    <q-card v-else-if="step == 2" class="mimo-modal mimo-modal__dialog">
      <div class="q-py-xl q-px-md">
        <q-card-section class="q-py-none">
          <h3 class="mimo-text mimo-text__h3" style="margin: 0">Confirme exclusão do pet</h3>
        </q-card-section>

        <q-card-section class="q-py-none">
          <p class="mimo-text mimo-text--light">
            Insira o nome do animal {{ modalDeletePet.data.name }} para excluir definitivamente os
            dados
          </p>
        </q-card-section>

        <q-card-section>
          <q-input
            ref="confirmPetName"
            v-model="confirmPetName"
            :label="showConfirmPetNameLabel ? 'Insira o nome do animal' : ''"
            class="group-input q-mb-sm elevated"
            input-class="group-input-content-pattern"
            filled
            no-error-icon
            :rules="[val => !!val || 'Confirme o nome antes de excluir']"
            @focus="showConfirmPetNameLabel = false"
            @blur="showConfirmPetNameLabel = confirmPetName.length == 0"
          />
        </q-card-section>
      </div>
      <q-separator />
      <q-card-actions class="q-pa-none">
        <div class="row justify-center q-py-md" style="width: 100%; margin: 0 auto">
          <TextButton
            :label="$t('petProfile.button.delete')"
            icon="delete_outline"
            color="red-7"
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
import TextButton from './textButton'

export default {
  name: 'ConfirmDeletePet',
  components: {
    Loading,
    TextButton
  },
  data() {
    return {
      step: 1,
      confirmPetName: '',
      showConfirmPetNameLabel: true
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

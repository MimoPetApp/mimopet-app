<template>
  <q-dialog v-model="modalPetList.modal" position="bottom">
    <q-card style="width: 350px" class="border-pattern">
      <q-card-section>
        <q-list>
          <div v-for="(pet, index) in petsList" :key="index">
            <q-item v-ripple clickable :to="`/pet/${pet.id}`">
              <q-item-section>{{ pet.name }}</q-item-section>
              <q-item-section avatar>
                <q-avatar text-color="secondary" icon="s_keyboard_arrow_right" />
              </q-item-section>
            </q-item>
            <q-separator />
          </div>
          <q-item v-ripple clickable to="novo/pet">
            <q-item-section class="text-secondary text-weight-medium">
              Criar Novo Pet
            </q-item-section>
            <q-item-section avatar>
              <q-avatar text-color="secondary" icon="s_add" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'PetListModal',
  data() {
    return {
      dialog: true
    }
  },
  computed: {
    ...mapState('pets', ['petsList', 'modalPetList'])
  },
  methods: {
    ...mapActions('pets', ['ActionPetModalList', 'ActionSetLoadingPet']),
    hide() {
      this.ActionSetLoadingPet(true)
      this.ActionPetModalList({ modal: false, data: {} })
    }
  }
}
</script>

<style></style>

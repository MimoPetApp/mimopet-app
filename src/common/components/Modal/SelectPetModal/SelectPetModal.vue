<template>
  <q-dialog v-model="modalPetList.modal" position="bottom">
    <q-card class="select-pet-modal">
      <q-card-section class="select-pet-modal__section">
        <q-list>
          <q-item class="ml-3 mt-3 mb-1">
            <h4 class="select-pet-modal__title text-main-alternate">Meus pets</h4>
          </q-item>
          <q-separator class="bg-utilities-border" />
          <div v-for="(pet, index) in petsList" :key="index">
            <q-item class="ml-2" v-ripple clickable @click="onSelect(index)">
              <!--
              <q-item-section avatar>
                <q-avatar text-color="main-primary" icon="keyboard_arrow_right" />
              </q-item-section>
              -->
              <!--
              <q-item-section avatar>
                <q-avatar color="main-primary" text-color="white" size="52px">
                  <span v-if="pet.image.length == 0">{{ pet.name[0].toUpperCase() }}</span>
                  <img v-else :src="parseProfileThumbnail(pet.image[0])" />
                </q-avatar>
              </q-item-section>
              -->
              <q-item-section class="select-pet-modal__pet-name text-utilities-alternate">
                {{ pet.name }}
              </q-item-section>
            </q-item>
            <q-separator class="bg-utilities-border" />
          </div>
          <q-item class="ml-3 mt-2 mb-2" v-ripple clickable to="/novo/pet">
            <q-item-section class="select-pet-modal__action-button">
              <div class="row items-center">
                <q-icon
                  color="utilities-alternate"
                  name="add"
                  class="select-pet-modal__action-button__add-icon mr-1"
                />
                <p class="select-pet-modal__action-button__add-text">Adicionar pet</p>
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import parser from './../../../helpers/PetProfileParser'
export default {
  name: 'SelectPetModal',
  data() {
    return {
      dialog: true
    }
  },
  computed: {
    ...mapState('pets', ['petsList', 'modalPetList'])
  },
  methods: {
    ...parser,
    ...mapActions('pets', ['ActionPetModalList', 'ActionSetLoadingPet']),
    ...mapMutations('pets', ['SET_CURRPET']),
    onSelect(id) {
      this.SET_CURRPET(id)
      this.ActionPetModalList({ modal: false, data: {} })
    },
    hide() {
      this.ActionSetLoadingPet(true)
      this.ActionPetModalList({ modal: false, data: {} })
    }
  }
}
</script>

<style lang="scss">
.select-pet-modal {
  background: var(--main-background);
  border-radius: var(--spacing-4) var(--spacing-4) 0 0 !important;
  padding: 0;

  &__section {
    padding: 0;
  }

  &__title {
    padding: 0;
    margin: 0;
    font-weight: 800;
  }

  &__pet-name {
    font-weight: 400;
    font-size: var(--font-size-5);
    line-height: calc(var(--font-size-5) + 0.5rem);
  }

  &__action-button {
    &__add-text {
      padding: 0;
      margin: 0;
      color: var(--utilities-alternate);
      font-weight: 400;
      font-size: var(--font-size-4);
      line-height: calc(var(--font-size-4) + 0.5rem);
    }

    &__add-icon {
      font-size: var(--font-size-4);
    }
  }
}
</style>

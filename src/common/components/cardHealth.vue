<template>
  <div class="q-ma-sm q-animate--scale q-mt-xl">
    <div class="text-primary text-h3 text-weight-medium">Cartão de Saúde</div>
    <q-list class="q-mt-md">
      <q-item
        v-ripple
        clickable
        class="bg-blue-grey-1 q-pa-md border-pattern"
        :to="`/vacinas/${petProfile._id}/${petProfile.profilePet}`"
      >
        <q-item-section avatar class="q-mr-md">
          <q-avatar size="70px" rounded class="bg-white border-pattern">
            <img class="q-pa-sm" src="~assets/images/vacinas.svg" />
          </q-avatar>
        </q-item-section>
        <q-item-section class="text-primary text-h6 text-weight-medium">
          <q-item-label>Vacinas</q-item-label>
          <q-item-label caption lines="2">{{
            `Para ${typesAnimals[petProfile.profilePet]}`
          }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  name: 'CardHealth',
  props: {
    petProfile: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      typesAnimals: {
        1: 'Felinos',
        2: 'Cães',
        3: 'Répteis',
        4: 'Aves',
        5: 'Roedores',
        6: 'Peixes'
      }
    }
  }
}
</script>

<style></style>

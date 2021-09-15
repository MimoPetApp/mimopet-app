<template>
  <div>
    <div v-if="!loadingPets">
      <div v-if="petsList.length >= 1">
        <PetsList :pet="petsList[currPet]" />
      </div>
      <div v-else class="error-home">
        <q-card class="error-home__card q-animate--scale mt-8 p-4">
          <q-card-section class="text-center">
            <h3 class="text-main-background">Nenhum pet encontrado</h3>
          </q-card-section>
          <q-card-section class="text-center">
            <q-btn class="error-home__button no-shadow" to="/novo/pet" no-caps flat>
              <span class="text-main-background">Cadastrar Pet?</span>
            </q-btn>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div v-else class="flex flex-center q-mt-xl">
      <Loading />
    </div>
    <!-- <CardHealth/> -->
  </div>
</template>

<script src="./petsList.js"></script>
<style src="./petsList.scss" lang="scss"></style>

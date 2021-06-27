<template>
  <div>
    <div v-if="!loadingPets">
      <div v-if="petsList.length >= 1">
        <PetsList :pet="petsList[0]" />
      </div>
      <div v-else class="row">
        <q-card
          class="home-card q-animate--scale q-mt-xl"
          style="background: #7166f1; height: calc(100vh - 145px)"
        >
          <q-card-section class="text-center q-pa-xl">
            <h3
              class="mimo-text mimo-text__h3 mimo-text--white"
              style="line-height: 2rem"
            >
              Nenhum pet encontrado,
            </h3>
            <q-btn
              class="home-card__button no-shadow q-ml-md"
              to="novo/pet"
              no-caps
              flat
            >
              <span class="mimo-text mimo-text--white">Cadastrar Pet?</span>
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
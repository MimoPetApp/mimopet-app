<template>
  <div class="q-pa-xs pet-profile-container">
    <!-- Top nav menu -->
    <q-toolbar class="text-primary">
      <div class="pet-profile-row q-pt-md">
        <q-btn flat round color="white" size="lg" icon="arrow_back" to="/" />
        <div class="flex">
          <q-btn
            flat
            round
            color="white"
            size="lg"
            icon="health_and_safety"
            to="/"
          />
          <q-btn flat round color="white" size="lg" icon="settings" to="/" />
        </div>
      </div>
    </q-toolbar>
    <!-- Main content -->
    <div v-if="!loadingPets" class="row">
      <div class="col-12 flex flex-center">
        <div class="row">
          <PetProfile :data="petProfile" />
        </div>
      </div>
      <ConfirmDeletePet />
    </div>
    <!-- Loading content -->
    <div v-else class="flex flex-center q-mt-xl">
      <LoadingCircle />
    </div>
  </div>
</template>

<script src="./petProfile.js"></script>
<style src="./petProfile.scss" lang="scss"></style>
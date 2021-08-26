<template>
  <div class="q-pa-xs pet-profile-container">
    <!-- Top nav menu -->
    <q-toolbar class="text-primary">
      <div class="pet-profile-row q-pt-md">
        <q-btn flat round color="utilities-alternate" size="md" icon="arrow_back" to="/" />
        <div class="flex">
          <!--
          <q-btn flat round color="white" size="lg" icon="health_and_safety" to="/" />
          <q-btn flat round color="white" size="lg" icon="settings" to="/" />
          -->
          <q-btn flat round color="utilities-alternate" size="md" icon="edit" />
        </div>
      </div>
    </q-toolbar>
    <!-- Main content -->
    <div v-if="!loadingPets" class="row">
      <div class="col-12 flex flex-center">
        <div class="row">
          <profile-details :data="petProfile" />
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

<script src="./PetProfile.js"></script>
<style src="./PetProfile.scss" lang="scss"></style>

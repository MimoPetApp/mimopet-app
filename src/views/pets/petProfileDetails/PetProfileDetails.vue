<template>
  <div class="q-pa-xs pet-profile-container">
    <!-- Top nav menu -->
    <q-toolbar class="text-primary">
      <div class="pet-profile-row q-pt-md">
        <q-btn
          flat
          round
          color="utilities-alternate"
          size="md"
          icon="arrow_back"
          :to="`/pet/${petID}`"
        />
      </div>
    </q-toolbar>
    <!-- Main content -->
    <div v-if="!loading">
      <div class="col-12">
        <div class="row">
          <profile-details
            hasAvatar
            :petAvatar="petProfile.data.image"
            :info="petData"
            title="Informações do pet"
            subtitle="Perfil do animal"
            @selectedEdition="editHandler($event)"
          ></profile-details>
        </div>
      </div>
    </div>
    <!-- Loading content -->
    <div v-else class="flex flex-center q-mt-xl">
      <LoadingCircle color="status-waiting" size="6em" :thickness="5" />
    </div>
  </div>
</template>

<script src="./PetProfileDetails.js"></script>
<style src="./PetProfileDetails.scss" lang="scss" scoped></style>

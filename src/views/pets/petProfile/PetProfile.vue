<template>
  <div class="q-pa-xs pet-profile-container" v-if="!loading">
    <!-- Top nav menu -->
    <q-toolbar class="text-primary">
      <div class="pet-profile-row q-pt-md">
        <q-btn flat round color="utilities-alternate" size="md" icon="arrow_back" to="/" />
        <div class="flex">
          <!--
          <q-btn flat round color="white" size="lg" icon="health_and_safety" to="/" />
          <q-btn flat round color="white" size="lg" icon="settings" to="/" />
          -->
          <q-btn
            flat
            round
            color="utilities-alternate"
            size="md"
            icon="edit"
            :to="`/pet/${petID}/detalhes`"
          />
        </div>
      </div>
    </q-toolbar>
    <!-- Main content -->
    <div v-if="!petProfile.loading" class="row">
      <div class="col-12 flex flex-center">
        <div class="row">
          <pet-profile-component :data="petProfile.data" />
          <ActionModal
            :content="deletePetModal"
            :onHide="hideDeletePetModal"
            :onSubmit="showConfirmDeleteModal"
          ></ActionModal>
          <ConfirmDeleteModal
            :active="confirmDeleteModal.status"
            :title="confirmDeleteModal.title"
            :subtitle="confirmDeleteModal.subtitle"
            :inputTextPlaceholder="confirmDeleteModal.inputTextPlaceholder"
            :buttonText="confirmDeleteModal.buttonText"
            :action="confirmDeleteModal.action"
            :toCompare="confirmDeleteModal.toCompare"
          ></ConfirmDeleteModal>
          <FeedbackModal
            :active="feedbackModal.status"
            :icon="feedbackModal.icon"
            :title="feedbackModal.title"
            :subtitle="feedbackModal.subtitle"
            :buttonText="feedbackModal.buttonText"
            :action="feedbackModal.action"
          ></FeedbackModal>
        </div>
      </div>
    </div>
    <!-- Loading content -->
    <div v-else class="flex flex-center q-mt-xl">
      <LoadingCircle color="status-waiting" size="6em" :thickness="5" />
    </div>
  </div>
</template>

<script src="./PetProfile.js"></script>
<style src="./PetProfile.scss" lang="scss" scoped></style>

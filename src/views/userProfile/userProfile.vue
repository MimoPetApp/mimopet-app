<template>
  <div class="q-pa-xs pet-profile-container">
    <!-- Main content -->
    <div v-if="true" class="row">
      <div class="col-12 flex flex-center">
        <div class="row">
          <q-card class="pet-profile__card pt-4">
            <q-card-section> </q-card-section>
            <q-separator />
            <q-card-section>
              <div class="col-12 mt-3 mb-3 column justify-center items-center">
                <Button
                  flat
                  color="red-7"
                  class="text-weight-bold"
                  size="md"
                  icon="delete_outline"
                  no-caps
                  :label="$t('petProfile.button.delete')"
                  @click="deletePet"
                />
                <ConfirmDeletePet />
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <ConfirmDeletePet />
    </div>
    <!-- Loading content -->
    <div v-if="false" class="flex flex-center q-mt-xl">
      <LoadingCircle />
    </div>
  </div>
</template>

<script src="./userProfile.js"></script>
<style src="./userProfile.scss" lang="scss"></style>

<template>
  <div class="q-pa-xs user-profile-details-wrapper">
    <!-- Main content -->
    <div class="row">
      <div class="col-12">
        <div class="user-profile-details-wrapper__content">
          <profile-details
            :info="userData"
            title="Informações pessoais"
            subtitle="Perfil do tutor"
          ></profile-details>
        </div>
      </div>
    </div>
    <!-- Loading content -->
    <div v-if="false" class="flex flex-center q-mt-xl">
      <LoadingCircle color="status-waiting" size="6em" :thickness="5" />
    </div>
  </div>
</template>

<script src="./UserProfileDetails.js"></script>
<style src="./UserProfileDetails.scss" lang="scss" scoped></style>

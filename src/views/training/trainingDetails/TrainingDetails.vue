<template>
  <div class="training-details-wrapper">
    <div v-if="true" class="training-details-wrapper__header">
      <h2 class="training-details-wrapper__header__title text-main-alternate">
        Preparação para primeiro passeio
      </h2>
      <span class="training-details-wrapper__header__subtitle text-utilities-alternate"
        >O que você vai aprender?</span
      >
      <module-card class="mt-2"></module-card>
      <!--
      <router-link
        :to="{ name: 'TrainingDetails', params: { id: train.id } }"
        class="router-link-style"
      >
      </router-link>-->
    </div>
    <div v-else class="flex flex-center q-mt-xl">
      <Loading />
    </div>
    <!-- <CardHealth/> -->
  </div>
</template>

<script src="./TrainingDetails.js"></script>
<style src="./TrainingDetails.scss" lang="scss" scoped></style>

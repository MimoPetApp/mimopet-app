<template>
  <div v-if="!loadingTrainings" class="training-details-wrapper">
    <q-header class="bg-main-background">
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="arrow_back"
          to="/treinamentos"
          text-color="utilities-alternate"
        />
      </q-toolbar>
    </q-header>
    <div class="training-details-wrapper__header">
      <h2 class="training-details-wrapper__header__title text-main-alternate">
        Preparação para primeiro passeio
      </h2>
      <span class="training-details-wrapper__header__subtitle text-utilities-alternate">
        O que você vai aprender?
      </span>
    </div>
    <div class="training-details-wrapper__content" v-for="module in modules" :key="module.id">
      <router-link
        :to="{ name: 'ModuleDetails', params: { idModulo: module.id } }"
        class="router-link-style"
      >
        <module-card :module="module" class="mt-2"></module-card>
      </router-link>
    </div>
    <div class="training-details-wrapper__footer flex flex-center">
      <span class="training-details-wrapper__footer__subtitle text-utilities-alternate">
        Inscrito em
      </span>
      <Button
        flat
        class="no-shadow training-details-wrapper__footer__btn"
        color="secondary-bordless"
        label="Cancelar inscrição"
        size="md"
        no-caps
        @click="unsubscribeTraining()"
      />
    </div>
  </div>
  <div v-else class="flex flex-center q-mt-xl">
    <LoadingCircle color="status-waiting" size="6em" :thickness="5" />
  </div>
</template>

<script src="./TrainingDetails.js"></script>
<style src="./TrainingDetails.scss" lang="scss" scoped></style>

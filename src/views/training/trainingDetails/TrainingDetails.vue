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
        {{ getTrainingTitle }}
      </h2>
      <span class="training-details-wrapper__header__subtitle text-utilities-alternate">
        {{ getTrainingDescription }}
      </span>
    </div>
    <div class="training-details-wrapper__content" v-for="module in modules" :key="module.id">
      <router-link
        :to="{ name: 'ModuleDetails', params: { idModulo: module.id } }"
        @click.capture="isClickable($event, module)"
        class="router-link-style"
      >
        <module-card :module="module" class="mt-2" :locked="module.locked"></module-card>
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
        @click="showUnsubscribeTrainingModal()"
      />
      <ActionModal
        :content="unsubscribeTrainingModal"
        :onHide="hideUnsubscribeTrainingModal"
        :onSubmit="unsubscribeTrainingModal.action"
      ></ActionModal>
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
  <div v-else class="flex flex-center q-mt-xl">
    <LoadingCircle color="status-waiting" size="6em" :thickness="5" />
  </div>
</template>

<script src="./TrainingDetails.js"></script>
<style src="./TrainingDetails.scss" lang="scss" scoped></style>

<template>
  <div class="training-details-wrapper">
    <div v-if="!loadingTrainings" class="training-details-wrapper__header">
      <h2 class="training-details-wrapper__header__title text-main-alternate">
        Preparação para primeiro passeio
      </h2>
      <span class="training-details-wrapper__header__subtitle text-utilities-alternate"
        >O que você vai aprender?</span
      >
      <router-link
        :to="{ name: 'TrainingDetails', params: { id: train.id } }"
        class="router-link-style"
      >
        <module-card
          v-for="module in modules"
          :key="module.id"
          :module="module"
          class="mt-2"
        ></module-card>
      </router-link>

      <q-list v-if="modules.length > 0" class="mt-4 mb-4">
        <q-item clickable v-ripple dense :to="`/treinamentos/${modules[0].id}/slide`">
          <q-item-section avatar>
            <q-avatar color="main-alternate" text-color="white" icon="play_arrow" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Demonstração de passo</q-item-label>
            <q-item-label caption>4 min - Slide</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <div v-else class="flex flex-center q-mt-xl">
      <LoadingCircle color="status-waiting" size="6em" :thickness="5" />
    </div>
    <!-- <CardHealth/> -->
  </div>
</template>

<script src="./TrainingDetails.js"></script>
<style src="./TrainingDetails.scss" lang="scss" scoped></style>

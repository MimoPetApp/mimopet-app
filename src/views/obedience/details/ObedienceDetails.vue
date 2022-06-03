<template>
  <q-card class="obedience-details q-animate--scale q-mt-xl" :style="`background: ${setBgColor}`">
    <q-card-section class="q-pa-xl obedience-details__header">
      <h3 class="obedience-details__title">{{ setDetailsTitle }}</h3>
      <q-badge
        color="main-background"
        text-color="main-alternate"
        class="obedience-details__badge flex justify-center items-center"
      >
        <span class="badge-label"> {{ repetitionAmount }} {{ setBadgeLabel }} </span>
      </q-badge>
      <p class="obedience-details__description mb-0">
        Acompanhe seu progresso, e continue praticando para consolidar o comando.
      </p>
    </q-card-section>
    <q-card
      class="obedience-details q-animate--scale q-pa-lg obedience-details__commands-list"
      style="background: #ffffff"
    >
      <q-card-section class="p-0">
        <div v-for="(method, index) in methodsList" :key="index">
          <ObedienceMethodCard
            :title="setMethodTitle(method.type)"
            :subtitle="method.repetitions"
            :class="{ 'card-gutter': index > 0 }"
            :buttons="method.items"
          ></ObedienceMethodCard>
        </div>
      </q-card-section>
    </q-card>
  </q-card>
</template>

<script src="./ObedienceDetails.js"></script>
<style src="./ObedienceDetails.scss" lang="scss" scoped></style>

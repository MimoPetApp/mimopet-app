<template>
  <q-card class="obedienceDetails q-animate--scale q-mt-xl" :style="`background: ${setBgColor}`">
    <q-card-section class="q-pa-xl card-section">
      <h3 class="obedienceDetails__text">Sentar</h3>
      <q-badge
        color="main-background"
        text-color="main-alternate"
        class="obedienceDetails__badge flex justify-center items-center"
      >
        <span class="repetition"> {{ repetitionAmount }} {{ setBadgeLabel }} </span>
      </q-badge>
      <p class="obedienceDetails__description mb-0">
        Acompanhe seu progresso, e continue praticando para consolidar o comando.
      </p>
    </q-card-section>
    <q-card
      class="obedienceDetails q-animate--scale q-pa-lg commands-list"
      style="background: #ffffff"
    >
    </q-card>
  </q-card>
</template>

<script src="./ObedienceDetails.js"></script>
<style src="./ObedienceDetails.scss" lang="scss" scoped></style>

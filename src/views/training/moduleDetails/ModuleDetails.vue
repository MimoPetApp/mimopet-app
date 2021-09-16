<template>
  <div class="module-details-wrapper">
    <div v-if="true" class="module-details-wrapper__header mb-4">
      <h2 class="module-details-wrapper__header__title text-main-alternate pl-3 pr-3">
        Equipamentos de passeio
      </h2>
      <q-separator class="mb-4" />
      <h3 class="module-details-wrapper__header__subtitle text-main-alternate pl-3 pr-3">
        10 Passos
      </h3>
      <h4 class="module-details-wrapper__header__caption text-utilities-alternate pl-3 pr-3">
        10-20 min cada
      </h4>
    </div>
    <div v-if="true" class="module-details-wrapper__content pl-3 pr-3">
      <div class="module-details-wrapper__content__card">
        <step type="slide"></step>
      </div>
      <div class="module-details-wrapper__content__card">
        <step type="quizz"></step>
      </div>
      <div class="module-details-wrapper__content__card">
        <step type="feedback"></step>
      </div>
      <div class="module-details-wrapper__content__card">
        <step type="repetitions"></step>
      </div>
      <div class="module-details-wrapper__content__card">
        <step type="video"></step>
      </div>
    </div>
    <div v-else class="flex flex-center q-mt-xl">
      <LoadingCircle color="status-waiting" size="6em" :thickness="5" />
    </div>
  </div>
</template>

<script src="./ModuleDetails.js"></script>
<style src="./ModuleDetails.scss" lang="scss"></style>

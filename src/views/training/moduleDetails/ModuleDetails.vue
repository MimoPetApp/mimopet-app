<template>
  <div v-if="true" class="module-details-wrapper">
    <div class="module-details-wrapper__header mb-4">
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
    <div class="module-details-wrapper__content pl-3 pr-3">
      <div class="mb-2">
        <step type="slide" :to="{ name: 'SlideStep', params: { idSessao: 1 } }"></step>
      </div>
      <div class="mb-2">
        <step type="quiz" :to="{ name: 'QuizStep', params: { idSessao: 2 } }"></step>
      </div>
      <div class="mb-2">
        <step type="feedback"></step>
      </div>
      <div class="mb-2">
        <step type="repetitions"></step>
      </div>
      <div class="mb-2">
        <step type="video"></step>
      </div>
    </div>
  </div>
  <div v-else class="flex flex-center q-mt-xl">
    <LoadingCircle color="status-waiting" size="6em" :thickness="5" />
  </div>
</template>

<script src="./ModuleDetails.js"></script>
<style src="./ModuleDetails.scss" lang="scss" scoped></style>

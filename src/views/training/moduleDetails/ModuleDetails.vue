<template>
  <div class="module-details-wrapper">
    <div v-if="true" class="module-details-wrapper__header">
      <h2 class="module-details-wrapper__header__title text-main-alternate pl-3 pr-3">
        Equipamentos de passeio
      </h2>
      <q-separator class="mb-4" />
      <h3 class="module-details-wrapper__header__subtitle text-main-alternate pl-3 pr-3">
        10 Passos
      </h3>
      <h4 class="module-details-wrapper__header__caption text-utilities-alternate pl-3 pr-3 mb-4">
        10-20 min cada
      </h4>
    </div>
    <div v-else class="flex flex-center q-mt-xl">
      <LoadingCircle color="status-waiting" size="6em" :thickness="5" />
    </div>
  </div>
</template>

<script src="./ModuleDetails.js"></script>
<style src="./ModuleDetails.scss" lang="scss"></style>

<template>
  <div v-if="!loadingTrainings" class="module-details-wrapper">
    <div class="module-details-wrapper__header mb-4">
      <h2 class="module-details-wrapper__header__title text-main-alternate pl-3 pr-3">
        {{ module.title }}
      </h2>
      <q-separator class="mb-4" />
      <h3 class="module-details-wrapper__header__subtitle text-main-alternate pl-3 pr-3">
        <span v-if="module.steps.length > 0">
          {{ module.steps.length }} {{ `Passo${module.steps.length > 1 ? 's' : ''}` }}
        </span>
        <span v-else>Sem passos</span>
      </h3>
      <h4 class="module-details-wrapper__header__caption text-utilities-alternate pl-3 pr-3">
        {{ module.min_duration }}-{{ module.max_duration }} min cada
      </h4>
    </div>
    <div class="module-details-wrapper__content pl-3 pr-3">
      <div v-for="step in module.steps" :key="step.id" class="mb-2">
        <step :step="step"></step>
      </div>
    </div>
  </div>
  <div v-else class="flex flex-center q-mt-xl">
    <LoadingCircle color="status-waiting" size="6em" :thickness="5" />
  </div>
</template>

<script src="./ModuleDetails.js"></script>
<style src="./ModuleDetails.scss" lang="scss" scoped></style>

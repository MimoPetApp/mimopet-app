<template>
  <q-card class="obedience q-animate--scale q-mt-xl" style="background: #7166f1">
    <q-card-section class="q-pa-xl obedience__header">
      <h3 class="obedience__title mb-2">Estimule seu cão com comandos de obediência</h3>
    </q-card-section>
    <q-card
      class="obedience q-animate--scale obedience__commands-list"
      :class="noContentAvailableClass"
      style="background: #ffffff"
    >
      <div v-if="!loading">
        <q-card-actions class="p-0" style="display: block" v-if="hasContentAvailable">
          <div v-for="(command, index) in getObedienceList" :key="index">
            <ObedienceCard
              :title="command.title"
              :subtitle="selectType(command.type)"
              :badges="command.executions"
              :class="[{ 'card-gutter': index > 0 }, { pointer: !isDisabled(command.type) }]"
              :disabled="isDisabled(command.type)"
              @click="clickHandler(command)"
            ></ObedienceCard>
          </div>
        </q-card-actions>
        <div v-else class="flex justify-center items-center">
          <p>{{ noContentAvailable }}</p>
        </div>
      </div>
    </q-card>
  </q-card>
</template>

<script src="./Obedience.js"></script>
<style src="./Obedience.scss" lang="scss" scoped></style>

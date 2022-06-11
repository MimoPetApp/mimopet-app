<template>
  <q-card class="obedience q-animate--scale q-mt-xl" style="background: #7166f1" v-if="!loading">
    <q-card-section class="obedience__header">
      <h3 class="obedience__title">Estimule seu cão com comandos de obediência</h3>
    </q-card-section>
    <q-card
      class="obedience q-animate--scale obedience__commands-list"
      :class="noContentAvailableClass"
      style="background: #ffffff"
    >
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
    </q-card>
  </q-card>
  <div v-else class="flex flex-center loading-screen">
    <Loading />
  </div>
</template>

<script src="./ObedienceList.js"></script>
<style src="./ObedienceList.scss" lang="scss" scoped></style>

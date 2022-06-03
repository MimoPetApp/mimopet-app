<template>
  <q-card class="obedience q-animate--scale q-mt-xl" style="background: #7166f1">
    <q-card-section class="q-pa-xl obedience__header">
      <h3 class="obedience__title mb-2">Estimule seu cão com comandos de obediência</h3>
    </q-card-section>
    <q-card class="obedience q-animate--scale obedience__commands-list" style="background: #ffffff">
      <q-card-actions class="p-0" style="display: block">
        <div v-for="(command, index) in commandsList" :key="index">
          <ObedienceCard
            :title="command.title"
            :subtitle="command.level"
            :badges="command.badges"
            :class="{ 'card-gutter': index > 0 }"
            :disabled="command.status"
            @click="clickHandler(command)"
          ></ObedienceCard>
        </div>
      </q-card-actions>
    </q-card>
  </q-card>
</template>

<script src="./Obedience.js"></script>
<style src="./Obedience.scss" lang="scss" scoped></style>

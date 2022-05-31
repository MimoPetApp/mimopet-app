<template>
  <q-card class="obedience q-animate--scale q-mt-xl" style="background: #7166f1">
    <q-card-section class="q-pa-xl card-section">
      <h3 class="obedience__text mb-2">Estimule seu cão com comandos de obediência</h3>
    </q-card-section>
    <q-card class="obedience q-animate--scale q-pa-lg commands-list" style="background: #ffffff">
      <div v-for="(command, index) in commandsList" :key="index">
        <ObedienceCard
          :title="command.title"
          :level="command.level"
          :badges="command.badges"
          :class="{ 'card-gutter': index > 0 }"
          :disabled="command.status"
          @click="clickHandler(command.id)"
        ></ObedienceCard>
      </div>
    </q-card>
  </q-card>
</template>

<script src="./Obedience.js"></script>
<style src="./Obedience.scss" lang="scss" scoped></style>

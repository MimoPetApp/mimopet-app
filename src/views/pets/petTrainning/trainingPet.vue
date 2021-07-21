<template>
  <div id="box">
     <q-layout view="lHh Lpr lFf">
    <q-toolbar class="text-primary text-main-primary">
        <q-btn
          flat
          round
          dense
          icon="arrow_back"
          @click="backStep()"
          text-color="utilities-alternate"
        />
    </q-toolbar>
      Explore comportamentos
    <q-card class="my-card bg-orange text-white">
      <q-card-section>
        <div class="text-h6">Busque por programas de treino para seu pet.</div>
      </q-card-section>

      <q-card-section>
        <q-input
          v-model="text"
          bottom-slots
          label="O que aprender ?"
          :dense="dense"
        >
          <template v-slot:append>
            <q-icon
              v-if="text !== ''"
              class="cursor-pointer"
              name="close"
              @click="clickIcon()"
            />
            <q-icon name="search" />
          </template>
        </q-input>
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn-toggle
          v-model="model"
          push
          glossy
          toggle-color="purple"
          :options="[
            { label: 'Com gatos', value: 'one', slot: 'one' },
            { label: 'Com Cães', value: 'two', slot: 'two' },
          ]"
          @click="clickIcon()"
        >
          <template v-slot:one>
            <q-tooltip>gatos</q-tooltip>
          </template>

          <template v-slot:two>
            <q-tooltip>caes</q-tooltip>
          </template>
        </q-btn-toggle>
      </q-card-actions>
    </q-card>

    <div style="width: 300px" v-if="showTraining">
      <p>
       <treinodo-pet
        v-for="(item,index) in filterfiels" :key="index"
          typed="Adulto"
          :step="item.id"
          number="4.6"
          :id="item.id"
          :title="item.title"
        />
     </p>
    </div>
     </q-layout>
  </div>
</template>

<script src="./trainingPet.js"></script>
<style src="./trainingPet.scss" lang="scss"></style>

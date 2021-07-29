<template>
  <div id="box" class="q-pa-md">
     <q-layout view="lHh Lpr lFf">
    <q-toolbar class="text-main-primary">
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
    <q-card class="q-pa-cd">
      <q-card-section>
        <div class="text-h6"><B>Busque por programas de treino para seu pet.</B></div>
      </q-card-section>

      <q-card-section >
          <div class="q-pa-nd" style="backgroud: white">
          <q-input
          outlined
          color="black"
          v-model="text"
          bottom-slots
          placeholder="O que aprender ?"
          :dense="dense">

         <q-btn class="q-pa-bt"
         label="Com cães"
         stack no-caps
          @click="clickIcon()"
         >

          <template  v-slot:append>
                <q-icon v-if="text !== ''"
                  class="cursor-p"
                   name="close"
                   @click="clickIcon()"
                />
            <q-icon class="cursor-s" name="search" />
          </template>

        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>Com gatos</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      </q-input>
      </div>
      </q-card-section>

      <q-separator dark />
    </q-card>

    <div v-if="showTraining">
      <p>
       <treinodo-pet class="q-pd-tda"
        v-for="(item,index) in filterfiels" :key="index"
          :typedp="item.category"
          :step="item.steps[index]._component"
          :number="item.rating"
          :id="item.id"
          :title="item.modules[0].name"
        />
     </p>
    </div>
     </q-layout>
  </div>
</template>

<script src="./trainingPet.js"></script>
<style src="./trainingPet.scss" lang="scss"></style>

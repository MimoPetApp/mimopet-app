<template>
  <div id="box" style="width: 300px">
    Treinamentos
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
          @click=clickIcon()
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

    <div v-if="showTraining===false">
      <q-card id="Adestra">
       <q-card-section> Fale com adestradores
         <div id="Agenda">
         Agende atendimento, personalizado com um profissional
         </div>
       </q-card-section>
      </q-card>

      <div id="Treino">
       <h6>Meus treinamentos</h6>
           <treinodo-pet
           typed="Adulto"
           step="10 passos"
           number="4.6"
           title="Parar com latidos noturno"
         />
         <treinodo-pet
           typed="Adulto"
           step="10 passos"
           number="4.6"
           title="Passear no parque"
         />
      </div>
    </div>
    <div style="width: 300px" v-if="showTraining">
      <p>
       <treinodo-pet
          v-for="(item,index) in filterfiels" :key="index"
          typed="Adulto"
          step="10 passos"
          number="4.6"
          :id="item.id"
          :title="item.title"
        />
     </p>
    </div>
  </div>
</template>

<script src="./trainingPet.js"></script>
<style src="./trainingPet.scss" lang="scss"></style>

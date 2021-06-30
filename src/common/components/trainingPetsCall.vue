<template>
  <div id="box" style="width: 300px">
    <h5>Explore comportamentos.</h5>
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
          @click="testclick()"
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

    <div id="treino" style="width: 300px background:white">
      <p v-if="showTraining">
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


<script>
import treinodoPet from "./trainingPet.vue";
import training from "../../Apis/Training";


export default {
  name: "App",
  components: { treinodoPet },

  data() {
    return {
      text: "",
      dense: false,
      model: "one",
      showTraining: false,
      info: [],
    };
  },

computed: {
    filterfiels() {
      let items = [];

       items = this.info.filter((item) =>{
        return (
          item.title.toLowerCase().indexOf(this.text.toLowerCase()) >-1
        ); 
      }); 
            return items;
    },
  },

  methods: {
    testclick() {
          this.showTraining = true;
          training.all()
        .then(Response =>(this.info = Response.data))

    },

    clickIcon() {
      this.showTraining = false;
      this.text = "";
    },
  
  },
};
</script>

<style scoped>
#busca {
  background: orange;
  color: white;
  font-family: "customfont600";
  font-weight: 600;
  font-size: 2.1vh;
   text-align: justify;
  margin: 2 1 2vh 0;
}

#box {
  font-family: "customfont600";
  font-weight: 600;
  font-size: 2.1vh;
  text-align: center;
  margin: 2 1 3vh 0;
}
</style>
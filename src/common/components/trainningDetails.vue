<template>
  <div style="width: 300px">
    <q-card>
      <q-card-section>
        <q-img src="icons/passearp.png" />
      </q-card-section>

      <q-separator dark />

      <q-card-section>
        <q-list bordered padding class="rounded-borders text-primary">
          <q-item v-ripple>
            <q-item-section side top>
              <q-badge color="purple" label="Adultos" />
              <q-item-label style="font-size: 1.8vh"
                >{{id}}</q-item-label
              >
              <q-item-label caption lines="4" style="font-size: 2.3vh">
                Liberdade para você e seu pet caminharem por locais abertos como
                parque e praças. Tenha seu cão de volta ao seu lado com o som
                de apito.
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>

    <q-card class="my-card" style="max-width: 300">
      <trainning-details-pet
        title="1. Sentar ao ser pedido"
        timep="4 min . vídeo"
      />
      <trainning-details-pet
        title="2. Esperar o dono (1 metro)"
        timep="4 min . vídeo"
      />
      <trainning-details-pet
        title="3. Patas e areia quente."
        timep="4 min . vídeo"
      />
      <q-card align="center">
        <q-btn
          color="deep-orange"
          align="center"
          glossy
          label="Inscrever-se"
          @click="$router.push({ name: 'inscricao' })"
        />
      </q-card>
    </q-card>
  </div>
</template>

<script>
import TrainningDetailsPet from "./detailsPet.vue";

export default {
  components: { TrainningDetailsPet },
  props: ["id"],

  data() {
    return {};
  },

  mounted() {
      this.ActionAllTrainning()
    },

};
</script>

<style scoped>
#q-pa-td {
  font-family: "customfont600";
  font-weight: 600;
  font-size: 2.1vh;
  text-align: center;
  margin: 2 1 3vh 0;
}
</style>
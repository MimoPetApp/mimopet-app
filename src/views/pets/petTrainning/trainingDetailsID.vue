<template>
  <div>
    <q-card>
      <q-card-section>
       <q-list bordered padding class="rounded-borders text-primary">
          <q-item v-ripple>
            <q-item-section side top>
              <q-badge color="purple" label="Adultos" />
              <q-item-label style="font-size: 3.8vh">
                    Comandos Básicos
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
        <q-list bordered dense>
          <Details
           timep="10min"
           title="Não perseguir outros animais"
           imageTraining=''
           pageName= 'trainingConditions'
           id='1'
           />
           <Details
           timep="15 min"
           title="Sentar ao ser pedido"
           imageTraining=''
           pageName="trainingConditions"
           id='2'
           />
        </q-list>
      </q-card-section>

      <q-separator dark />

        </q-card>

  </div>
</template>

<script>
import training from '../../../Apis/Training'
import Details from '../../../common/components/detailsPet.vue'

export default {
  components: {
    Details
  },

  data() {
    return {
      id: this.$route.params.id,
      treino: {}
    }
  },

  created() {
    training.show(this.id)
      .then(Response => (this.treino = Response.data))
  }

}

</script>

<style scoped>
</style>

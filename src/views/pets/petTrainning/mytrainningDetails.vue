<template>
  <div>
    <q-card>
      <q-card-section>
       <q-list bordered padding class="rounded-borders text-primary">
          <q-item v-ripple>
            <q-item-section side top>
              <q-badge color="purple" label="Adultos" />
              <q-item-label style="font-size: 3.8vh"
                >{{ treino.title }}</q-item-label
              >
            </q-item-section>
          </q-item>
        </q-list>
<q-list bordered dense>
          O que você vai aprender ?
          <Details
           timep=""
           title="Postura treinador"
           imageTraining='../assets/images/1.png'
           pageName= 'trainingDetailsId'
           id='3'
           />
           <Details
           timep=""
           title="Comandos básicos"
           imageTraining='../assets/images/2.png'
           pageName="trainingDetailsId"
           id="4"
           />
</q-list>
      </q-card-section>

      <q-separator dark />

      <q-card-section>
      </q-card-section>
    </q-card>

    <q-card align="center">
          <MainButton
              type="submit"
              label="Cancelar inscrição"
              loading="false"
              @click="$router.push({ name: 'trainingCancel'})"
            />
     </q-card>
  </div>
</template>

<script>
import training from '../../../Apis/Training'
import MainButton from '../../../common/components/mainButton.vue'
import Details from '../../../common/components/detailsPet.vue'

export default {
  components: {
    MainButton,
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

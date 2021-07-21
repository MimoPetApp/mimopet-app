<template>
  <div>
    <q-card>
      <q-card-section>
        <q-img src="~assets/images/dog.png"/>
      </q-card-section>

      <q-separator dark />

      <q-card-section>
        <q-list bordered padding class="rounded-borders text-primary">
          <q-item v-ripple>
            <q-item-section side top>
              <q-badge color="purple" label="Adultos" />
              <q-item-label style="font-size: 1.8vh">
                 <b> {{ treino.title }}</b>
              </q-item-label>
              <q-item-label caption lines="4" style="font-size: 2.3vh">
                  {{treino.body}}
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>

    <q-card align="center">
        <MainButton
          type="submit"
          label="Inscrever-se"
          @click="$router.push({ name: 'confirmSubscription', params: {id: id} })"
          loading="false"
        />
    </q-card>
  </div>
</template>

<script>
import MainButton from '../../../common/components/mainButton.vue'
import training from '../../../Apis/Training'

export default {
  components: {
    MainButton
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
/*   mounted() {
    this.ActionAllTrainning()
    this.ActionGetTrainningID(this.id)
  }
 */
}

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

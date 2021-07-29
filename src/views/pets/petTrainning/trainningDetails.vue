<template>
  <div>
    <q-card>
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
<!--       <div class="row justify-center">
      <q-avatar size="100px" class="mt-2">
        <img :src="parseProfileThumbnail(data.image[0])" />
      </q-avatar>
    </div> -->

          <q-separator dark />

      <q-card-section>
        <q-list bordered padding class="rounded-borders text-primary">
          <q-item v-ripple>
            <q-item-section side top>
              <q-badge color="purple" :label= trainingList.category />
              <q-item-label style="font-size: 4.0vh">
                 <b> {{ trainingList.title }}</b>
              </q-item-label>
              <q-item-label caption lines="4" style="font-size: 3.5vh">
                  {{trainingList.description}}
              </q-item-label>
              <br>
              <br>
               <q-separator dark inset />
              <q-item-label style="font-size: 2.0vh">
                  Por {{trainingList.author}}
              </q-item-label>
              <q-item-label style="font-size: 2.0vh">
                  Atualizado em {{trainingList.create_at}}
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
          @click="$router.push({ name: 'trainingConfirm', params: {id: id} })"
          loading="false"
        />
    </q-card>
  </div>
</template>

<script>
import MainButton from '../../../common/components/mainButton.vue'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    MainButton
  },

  data() {
    return {
      id: this.$route.params.id
    }
  },

  computed: {
    ...mapState('trainings', ['trainingList', 'loadingTraining'])
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    '$route.params.id': function (id) {
      this.ActionGetTrainingById(this.$route.params.id)
    }
  },
  mounted() {
    this.ActionGetTrainingById(this.$route.params.id)
  },
  methods: {
    ...mapActions('trainings', [
      'ActionGetTrainingById',
      'ActionCommitTraining',
      'ActionSetLoadingTraining'
    ]),

    backStep() {
      if (this.step > 1) {
        this.step--
      } else {
        // this.step = 1;
        this.$router.push({ name: 'home' })
      }
    }
  }
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

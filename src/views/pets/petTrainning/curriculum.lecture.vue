<template>
  <div>
    <q-card>
      <q-card-section>
       <q-list bordered padding class="rounded-borders text-primary">
          <q-item v-ripple>
            <q-item-section side top>
               <q-item-label style="font-size: 4.8vh">{{ trainingList.steps[item].title }}</q-item-label>
              </q-item-section>
          </q-item>
        </q-list>
<q-list bordered dense>
        <DetailsVideo
            v-for="(itens,index) in trainingList.steps[2].video" :key="index"
              :title="itens.name"
              :id="itens.id"
              :videoid="itens"
              :video="itens.url"
              pageName="trainingVideo"
        />
              <p/><p/>
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

import MainButton from '../../../common/components/mainButton.vue'
import DetailsVideo from '../../../common/components/detailsVideo.vue'

import { mapState, mapActions } from 'vuex'

export default {
  components: {
    MainButton,
    DetailsVideo
  },

  data() {
    return {
      id: this.$route.params.id,
      item: this.$route.params.item
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
  created() {
    this.ActionGetTrainingById(this.$route.params.id)
  },
  methods: {
    ...mapActions('trainings', [
      'ActionGetTrainingById',
      'ActionCommitTraining',
      'ActionSetLoadingTraining'
    ])
  }
}

</script>

<style scoped>
</style>

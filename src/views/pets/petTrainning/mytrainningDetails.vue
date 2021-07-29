<template>
  <div>
    <q-card>
      <q-card-section>
        <q-list bordered padding class="rounded-borders text-primary">
          <q-item v-ripple>
            <q-item-section side top>
              <q-badge color="purple" :label="trainingList.category" />
              <Title :text="$t('trainingList.title')" />
              <q-item-label style="font-size: 4.8vh">{{ trainingList.title }}</q-item-label>
              </q-item-section>
          </q-item>
        </q-list>
        <q-list bordered dense>
          O que você vai aprender?
          <br />
          <br />

          <Details
            v-for="(item, index) in trainingList.steps"
            :key="index"
            :title="item.title"
            :timep="item.description"
            :imageTraining="item.rating"
            :id="this.id"
            :videoId="index"
            :pageName="item.__component"
          />
          <p />
          <p />
        </q-list>
      </q-card-section>

      <q-separator dark />

      <q-card-section> </q-card-section>
    </q-card>

    <q-card align="center">
      <MainButton
        type="submit"
        label="Cancelar inscrição"
        loading="false"
        @click="$router.push({ name: 'trainingCancel' })"
      />
    </q-card>
  </div>
</template>

<script>
import MainButton from '../../../common/components/mainButton.vue'
import Details from '../../../common/components/detailsPet.vue'
import Title from '../../../common/components/title'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    MainButton,
    Details,
    Title
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
    ])
  }
}
</script>

<style scoped></style>

<template>
  <div id="box" class="my-video">
    {{ trainingList.steps.title }}
    <q-card class="my-card">
      <q-video src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />
      <q-video src ="/uploads/Gravacao_de_tela_de_28_06_2021_21_18_24_9247511194.webm"/>
    </q-card>
  </div>
</template>
<script>

import parser from '../../../common/helpers/petProfileParser'
import { mapState, mapActions } from 'vuex'

export default {

  data() {
    return {
      id: this.$route.params.id
    }
  },

  computed: {
    ...mapState('trainings', ['trainingList', 'loadingTraining']),
    ...mapState('trainings', ['moduleList', 'loadingTraining'])
  },

  watch: {
    // eslint-disable-next-line no-unused-vars
    '$route.params.id': function (id) {
      this.ActionGetTrainingById(this.$route.params.id)
    }
  },
  mounted() {
    this.ActionGetTrainingById(this.$route.params.id)
    this.ActionGetModuleById(this.$route.params.id)
  },
  methods: {
    ...parser,
    ...mapActions('trainings', [
      'ActionGetTrainingById',
      'ActionGetModuleById',
      'ActionCommitTraining',
      'ActionSetLoadingTraining'
    ]),

    backStep() {
      if (this.step > 1) {
        this.step--
      } else {
        // this.step = 1
        this.$router.push({ name: 'training', params: { petid: 1 } })
      }
    }
  }
}

</script>

<style lang="sass" scoped>
.my-card
  width: 100%

  #box
    font-family: "customfont600"
    font-weight: 600
    font-size: 2.1vh
    text-align: center
    margin: 2 1 3vh 0
</style>

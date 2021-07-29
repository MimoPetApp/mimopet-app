import treinodoPet from '../../../common/components/training.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'trainingPet',
  components: {
    treinodoPet
  },

  data() {
    return {
      text: '',
      dense: false,
      model: 'one',
      step: 1,
      showTraining: true
    }
  },

  computed: {
    ...mapState('trainings', ['trainingList', 'loadingTraining']),

    filterfiels() {
      let items = []

      items = this.trainingList.filter((item) => {
        return (
          item.title.toLowerCase().indexOf(this.text.toLowerCase()) > -1
        )
      })
      return items
    }
  },

  mounted() {
    this.ActionGetTraining()
  },

  beforeRouteLeave(to, from, next) {
    this.ActionSetLoadingTraining(true)
    next()
  },

  methods: {
    ...mapActions('trainings', ['ActionGetTraining', 'ActionCommitTraining', 'ActionSetLoadingTraining']),

    backStep() {
      if (this.step > 1) {
        this.step--
      } else {
        // this.step = 1;
        this.$router.push({ name: 'home' })
      }
    },

    clickIcon() {
      this.showTraining = true
      this.text = ''
      this.ActionGetTraining()
    }
  }
}

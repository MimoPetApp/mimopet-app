import { mapActions, mapState } from 'vuex'
import parser from './../../../common/helpers/trainingParser'
import Button from '../../../common/components/Button/Button'
import LoadingCircle from '../../../common/components/loadingCircle'
import Exercise from '../../../common/components/Exercise/Exercise'
import FeedbackModal from '../../../common/components/FeedbackModal/FeedbackModal'
import utils from '../../../common/helpers/utils'

const hitIcon = require('../../../assets/images/feedback/hit.svg')

export default {
  components: { LoadingCircle, Button, FeedbackModal, Exercise },
  data() {
    return {
      currExercise: null,
      loading: false,
      hasFeedback: false,
      player: 0
    }
  },
  computed: {
    ...mapState('training', ['exercise', 'loadingTrainings']),
    feedbackIcon() {
      return hitIcon
    }
  },
  methods: {
    ...utils,
    ...parser,
    ...mapActions('training', ['ActionGetExercise']),
    timeout(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },
    async onFinish() {
      this.loading = true
      await this.timeout(500)
      this.hasFeedback = true
      this.loading = false
    },
    trainingDetailsHandler() {
      this.$router.push({
        name: 'ModuleDetails',
        params: { id: this.$route.params.id, idModulo: this.$route.params.idModulo }
      })
    },
    play(exercise) {
      exercise.is_complete = true
      this.currExercise = exercise
      this.player += 1
    }
  },
  async mounted() {
    await this.ActionGetExercise(this.$route.params.idSessao)
    if (this.exercise.items.length > 0) {
      this.currExercise = this.exercise.items[0]
    }
  }
}
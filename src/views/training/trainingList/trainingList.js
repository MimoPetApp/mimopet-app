import { mapActions, mapState } from 'vuex'
import LoadingCircle from '../../../common/components/loadingCircle'
import TrainingCard from '../../../common/components/TrainingCard/TrainingCard'

export default {
  components: { LoadingCircle, TrainingCard },
  data() {
    return {}
  },
  computed: {
    ...mapState('training', ['myTrainings', 'loadingTrainings'])
  },
  methods: {
    ...mapActions('training', ['ActionGetMyTrainings']),
    timeout(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }
  },
  created() {
    this.ActionGetMyTrainings()
  }
}

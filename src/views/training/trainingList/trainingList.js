import { mapActions, mapState } from 'vuex'
import LoadingCircle from '../../../common/components/loadingCircle'
import Button from '../../../common/components/Button/Button'
import TrainingCard from '../../../common/components/TrainingCard/TrainingCard'

export default {
  components: { LoadingCircle, TrainingCard, Button },
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

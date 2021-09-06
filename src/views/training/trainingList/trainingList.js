import { mapActions, mapState } from 'vuex'
import LoadingCircle from '../../../common/components/loadingCircle'
import TrainingCard from '../../../common/components/TrainingCard/TrainingCard'

export default {
  components: { LoadingCircle, TrainingCard },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapState('training', ['myTrainings'])
  },
  methods: {
    ...mapActions('training', ['ActionGetMyTrainings']),
    timeout(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }
  },
  async created() {
    this.loading = true
    await this.timeout(500)
    await this.ActionGetMyTrainings()
    this.loading = false
  }
}

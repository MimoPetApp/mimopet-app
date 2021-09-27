import LoadingCircle from '../../../common/components/loadingCircle'
import Step from '../../../common/components/Step/Step'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ModuleDetails',
  components: {
    LoadingCircle,
    Step
  },
  computed: {
    ...mapState('training', ['loadingTrainings', 'module'])
  },
  methods: {
    ...mapActions('training', ['ActionGetModule'])
  },
  async created() {
    this.ActionGetModule(this.$route.params.idModulo)
  }
}

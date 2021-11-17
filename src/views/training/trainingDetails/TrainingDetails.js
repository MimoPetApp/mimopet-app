import LoadingCircle from '../../../common/components/loadingCircle'
import ModuleCard from '../../../common/components/ModuleCard/ModuleCard'

import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'TrainingDetails',
  components: {
    LoadingCircle,
    ModuleCard
  },
  computed: {
    ...mapState('training', ['modules', 'loadingTrainings'])
  },
  methods: {
    ...mapActions('training', ['ActionGetModules']),
    ...mapMutations('training', ['SET_HAS_HEADER'])
  },
  beforeRouteLeave(to, from, next) {
    this.SET_HAS_HEADER(true)
    next()
  },
  async mounted() {
    this.SET_HAS_HEADER(false)
  },
  async created() {
    this.ActionGetModules(this.$route.params.id)
  }
}

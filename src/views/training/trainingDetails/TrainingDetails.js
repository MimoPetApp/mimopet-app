import LoadingCircle from '../../../common/components/loadingCircle'
import ModuleCard from '../../../common/components/ModuleCard/ModuleCard'

import { mapState, mapActions } from 'vuex'

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
    ...mapActions('training', ['ActionGetModules'])
  },
  async created () {
    this.ActionGetModules()
  }
}

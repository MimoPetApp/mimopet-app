import Loading from '../../../common/components/loading'
import ModuleCard from '../../../common/components/ModuleCard/ModuleCard'

import { mapState, mapActions } from 'vuex'

export default {
  name: 'PageIndex',
  components: {
    Loading,
    ModuleCard
    // CardHealth
  },
  computed: {
    ...mapState('pets', ['petsList', 'loadingPets', 'currPet'])
  },
  mounted () {
    this.ActionGetPets()
  },
  beforeRouteLeave (to, from, next) {
    this.ActionSetLoadingPet(true)
    next()
  },
  methods: {
    ...mapActions('pets', ['ActionGetPets', 'ActionCommitPet', 'ActionSetLoadingPet'])
  }
}

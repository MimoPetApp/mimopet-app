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
    ...mapState('pets', ['petsList', 'loadingPets', 'currPet'])
  },
  methods: {
    ...mapActions('training', ['ActionGetModules'])
  },
  async created () {
    this.ActionGetModules()
  }
}

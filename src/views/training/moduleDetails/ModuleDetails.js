import LoadingCircle from '../../../common/components/loadingCircle'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ModuleDetails',
  components: {
    LoadingCircle
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

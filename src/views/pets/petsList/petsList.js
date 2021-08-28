import Loading from '../../../common/components/loading'
import PetsList from '../../../common/components/petsList'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'PageIndex',
  components: {
    PetsList,
    Loading
    // CardHealth
  },
  computed: {
    ...mapState('pets', ['petsList', 'loadingPets', 'currPet'])
  },
  mounted() {
    this.ActionGetPets()
  },
  beforeRouteLeave(to, from, next) {
    this.ActionSetLoadingPet(true)
    next()
  },
  methods: {
    ...mapActions('pets', ['ActionGetPets', 'ActionCommitPet', 'ActionSetLoadingPet'])
  }
}

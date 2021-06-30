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
    ...mapState('pets', ['petsList', 'loadingPets']),
    ...mapState('auth', ['user'])
  },
  mounted() {},
  beforeRouteLeave(to, from, next) {
    this.ActionSetLoadingPet(true)
    next()
  },
  methods: {
    ...mapActions('pets', ['ActionGetPets', 'ActionCommitPet', 'ActionSetLoadingPet'])
  }
}

import LoadingCircle from '../../common/components/loadingCircle'
import { mapState, mapActions } from 'vuex'
import ConfirmDeletePet from '../../common/components/confirmDeletePet'
import PetProfile from '../../common/components/petProfile'

export default {
  name: 'UserProfile',
  data () {
    return {}
  },
  components: {
    LoadingCircle,
    ConfirmDeletePet,
    PetProfile
  },
  computed: {
    ...mapState('pets', ['petProfile', 'loadingPets']),
    ...mapState('auth', ['user'])
  },
  watch: {},
  mounted () {},
  created () {},
  methods: {
    ...mapActions('pets', [
      'ActionGetPetById',
      'ActionCommitPet',
      'ActionSetLoadingPet',
      'ActionmodalDeletePet',
      'ActionSetHomeMenuVisibility'
    ])
  }
}

import LoadingCircle from '../../common/components/loadingCircle'
import { mapState, mapActions } from 'vuex'
import ConfirmDeletePet from '../../common/components/confirmDeletePet'
import PetProfileComponent from '../../common/components/PetProfile'

export default {
  name: 'UserProfile',
  data () {
    return {}
  },
  components: {
    LoadingCircle,
    ConfirmDeletePet,
    PetProfileComponent
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

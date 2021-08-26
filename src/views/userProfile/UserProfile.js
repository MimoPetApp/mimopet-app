import LoadingCircle from '../../common/components/loadingCircle'
import { mapState, mapActions } from 'vuex'
import ConfirmDeletePet from '../../common/components/confirmDeletePet'
import ProfileDetails from '../../common/components/ProfileDetails'

export default {
  name: 'UserProfile',
  data () {
    return {}
  },
  components: {
    LoadingCircle,
    ConfirmDeletePet,
    ProfileDetails
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

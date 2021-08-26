import LoadingCircle from '../../../common/components/loadingCircle'
import { mapState, mapActions } from 'vuex'
import ConfirmDeletePet from '../../../common/components/confirmDeletePet'
import ProfileDetails from '../../../common/components/ProfileDetails'

export default {
  name: 'PetProfile',
  components: {
    LoadingCircle,
    ConfirmDeletePet,
    ProfileDetails
  },
  computed: {
    ...mapState('pets', ['petProfile', 'loadingPets']),
    ...mapState('auth', ['user'])
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    '$route.params.id': function (id) {
      this.ActionGetPetById(this.$route.params.id)
    }
  },
  mounted () {
    this.ActionGetPetById(this.$route.params.id)
    this.ActionSetHomeMenuVisibility(false)
  },
  created () {},
  beforeRouteLeave (to, from, next) {
    this.ActionSetLoadingPet(true)
    this.ActionSetHomeMenuVisibility(true)
    next()
  },
  methods: {
    ...mapActions('pets', [
      'ActionGetPetById',
      'ActionCommitPet',
      'ActionSetLoadingPet',
      'ActionmodalDeletePet',
      'ActionSetHomeMenuVisibility'
    ]),
    deletePet () {
      this.ActionmodalDeletePet({
        modal: true,
        data: {
          id: this.$route.params.id
        }
      })
    }
  }
}

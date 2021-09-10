import LoadingCircle from '../../../common/components/loadingCircle'
import { mapState, mapActions } from 'vuex'
import ConfirmDeletePet from '../../../common/components/confirmDeletePet'
import PetProfileComponent from '../../../common/components/PetProfile'
import parser from './../../../common/helpers/PetProfileParser'

export default {
  name: 'PetProfile',
  components: {
    LoadingCircle,
    ConfirmDeletePet,
    PetProfileComponent
  },
  data () {
    return {
      petID: this.$route.params.id
    }
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
  async created () {
    await this.ActionGetPetById(this.$route.params.id)
    await this.ActionSetHomeMenuVisibility(false)
  },
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
    ...parser,
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

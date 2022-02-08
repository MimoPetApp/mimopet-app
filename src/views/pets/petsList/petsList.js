import Loading from '../../../common/components/loading'
import PetsList from '../../../common/components/petsList'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'PageIndex',
  data () {
    return {
      mainPetIndex: null
    }
  },
  components: {
    PetsList,
    Loading
    // CardHealth
  },
  computed: {
    ...mapState('pets', ['petsList', 'loadingPets', 'mainPet']),
    ...mapState('auth', ['user']),
    ...mapGetters('pets', ['getMainPetId'])
  },
  watch: {
    getMainPetId (newVal, oldVal) {
      if (newVal) {
        this.findMainPetIndex(newVal)
        this.ActionSetLoadingPet(false)
      }
    }
  },
  async created () {
    this.ActionSetLoadingPet(true)
    await this.ActionGetPets()
    this.findMainPetIndex()
    this.ActionSetLoadingPet(false)
  },
  beforeRouteLeave (to, from, next) {
    this.ActionSetLoadingPet(true)
    next()
  },
  methods: {
    ...mapActions('pets', ['ActionGetPets', 'ActionCommitPet', 'ActionSetLoadingPet']),
    findMainPetIndex (id = null) {
      let mainPetId
      if (!id) {
        // get main pet id by user
        mainPetId = this.user.current_pet
      } else {
        mainPetId = id
      }
      this.mainPetIndex = this.petsList.findIndex(pet => {
        return pet.id === mainPetId
      })
    }
  }
}

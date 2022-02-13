import Loading from '../../../common/components/loading'
import PetsList from '../../../common/components/petsList'
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'PageIndex',
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
  async created () {
    this.ActionSetLoadingPet(true)
    await this.ActionGetUser()
    await this.ActionGetPets()
    await this.setMainPet()
    this.ActionSetLoadingPet(false)
  },
  beforeRouteLeave (to, from, next) {
    this.ActionSetLoadingPet(true)
    next()
  },
  methods: {
    ...mapMutations('pets', { SET_MAINPET: 'PETS/SET_MAINPET' }),
    ...mapActions('pets', ['ActionGetPets', 'ActionCommitPet', 'ActionSetLoadingPet']),
    ...mapActions('auth', ['ActionGetUser']),
    hasPet () {
      return this.petsList.length >= 1
    },
    isEmptyObject (obj) {
      return obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype
    },
    findMainPet () {
      let mainPet = null
      if (this.hasPet()) {
        mainPet = this.petsList.find(pet => {
          return pet.id === this.user.current_pet
        })
      }
      return mainPet
    },
    setMainPet () {
      let pet = null
      if (!this.isEmptyObject(this.mainPet.data)) {
        // main pet from vuex
        pet = this.mainPet.data
      } else {
        // main pet from user
        pet = this.findMainPet()
      }
      if (pet) {
        this.SET_MAINPET(pet)
      }
    }
  }
}

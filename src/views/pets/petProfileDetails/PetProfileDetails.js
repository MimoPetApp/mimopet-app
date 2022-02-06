import LoadingCircle from '../../../common/components/loadingCircle'
import { mapState, mapActions } from 'vuex'
import ProfileDetails from '../../../common/components/ProfileDetails/ProfileDetails.vue'
import ConfirmDeletePet from '../../../common/components/confirmDeletePet'
import PetProfileComponent from '../../../common/components/PetProfile'
import parser from './../../../common/helpers/PetProfileParser'

export default {
  name: 'PetProfileDetails',
  components: {
    LoadingCircle,
    ConfirmDeletePet,
    PetProfileComponent,
    ProfileDetails
  },
  data () {
    return {
      petID: this.$route.params.id,
      petData: [],
      loading: false
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
    this.loading = true
    await this.ActionGetPetById(this.$route.params.id)
    await this.ActionSetHomeMenuVisibility(false)
    await this.structPetData()
    this.loading = false
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
    },
    formatUpperCaseFirstLetter (string) {
      let aux = string.toLowerCase()
      aux = aux.charAt(0).toUpperCase() + aux.slice(1)
      return aux
    },
    mapPetDetails () {
      const aux = []
      let noDetails = true
      if (this.petProfile.data) {
        if (this.petProfile.data.is_adopted) {
          aux.push('Adotado')
          noDetails = false
        }
        if (this.petProfile.data.is_deficiency) {
          aux.push('Com deficiência')
          noDetails = false
        }
        if (this.petProfile.data.is_neutered) {
          aux.push('Castrado')
          noDetails = false
        }
        if (this.petProfile.data.is_service) {
          aux.push('De serviço')
          noDetails = false
        }
        if (noDetails) {
          aux.push('Nenhum')
        }
      }
      return aux
    },
    async structPetData () {
      const aux = []
      if (this.petProfile.data) {
        aux.push(
          {
            label: 'Nome do pet',
            value: this.formatUpperCaseFirstLetter(this.petProfile.data.name)
          },
          {
            label: 'Detalhes',
            value: this.mapPetDetails().join(', ')
          },
          {
            label: 'Idade',
            value: this.formatUpperCaseFirstLetter(this.mapAge(this.petProfile.data.age))
          },
          {
            label: 'Raça',
            value: this.formatUpperCaseFirstLetter(this.petProfile.data.breed)
          }
        )
      }
      this.petData = aux
    },
    mapAge (age) {
      switch (age) {
        case 'SIX_MONTS':
          return 'Filhote até 6 meses'
        case 'EIGHTEEN_MONTS':
          return 'Filhote até 1,5 anos'
        case 'ADULT':
          return 'Adulto'
        default:
          return 'Sênior'
      }
    }
  }
}

import LoadingCircle from '../../common/components/loadingCircle'
import { mapState, mapActions } from 'vuex'
import ProfileDetails from '../../common/components/ProfileDetails/ProfileDetails.vue'

export default {
  name: 'UserProfileDetails',
  data () {
    return {
      userData: []
    }
  },
  components: {
    LoadingCircle,
    ProfileDetails
  },
  computed: {
    ...mapState('pets', ['petProfile', 'loadingPets']),
    ...mapState('auth', ['user'])
  },
  async mounted () {
    this.loading = true
    await this.ActionSetHomeMenuVisibility(false)
    await this.structUserData()
    this.loading = false
  },
  beforeRouteLeave (to, from, next) {
    this.ActionSetHomeMenuVisibility(true)
    next()
  },
  methods: {
    ...mapActions('pets', ['ActionSetHomeMenuVisibility']),
    formatUpperCaseFirstLetter (string) {
      let aux = string.toLowerCase()
      aux = aux.charAt(0).toUpperCase() + aux.slice(1)
      return aux
    },
    formatBirthday (number) {
      return number
    },
    getUserLabel (gender) {
      if (gender === 'MALE') {
        return 'Tutor de pet'
      } else {
        return 'Tutora de pet'
      }
    },
    async structUserData () {
      const aux = []
      if (this.user) {
        aux.push(
          {
            label: this.getUserLabel(this.user.gender),
            value: this.user.username
          },
          {
            label: 'Gênero',
            value: this.formatUpperCaseFirstLetter(this.user.gender)
          },
          {
            label: 'Nascimento',
            value: this.formatBirthday(this.user.birthday)
          },
          {
            label: 'E-mail',
            value: this.user.email
          }
        )
      }
      this.userData = aux
    },
    selectedHandler (index) {}
  }
}

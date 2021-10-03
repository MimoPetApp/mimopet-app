import LoadingCircle from '../../common/components/loadingCircle'
import { mapState, mapActions } from 'vuex'
import ProfileDetails from '../../common/components/ProfileDetails/ProfileDetails.vue'

export default {
  name: 'UserProfileDetails',
  data () {
    return {
      info: [
        { label: 'Informações pessoais', icon: 'switch_account', value: 'personal' },
        {
          label: 'Suporte',
          icon: 'policy',
          value: 'help'
        },
        {
          label: 'Termos de uso',
          icon: 'manage_search',
          value: 'terms'
        }
      ],
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
  async created () {
    this.loading = true
    // await this.ActionSetHomeMenuVisibility(false)
    await this.structUserData()
    this.loading = false
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
    async structUserData () {
      const aux = []
      if (this.user) {
        aux.push(
          {
            label: 'Tutor de pet',
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
    }
  }
}

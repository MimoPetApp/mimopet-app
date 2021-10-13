import LoadingCircle from '../../common/components/loadingCircle'
import { mapState, mapActions } from 'vuex'
import ProfileDetails from '../../common/components/ProfileDetails/ProfileDetails.vue'

export default {
  name: 'UserProfileDetails',
  data () {
    return {
      notificationsList: [
        {
          label: 'Vencimento da assinatura',
          color: 'status-danger',
          description: 'Em 21/04 às 18:00'
        },
        {
          label: 'Assinatura renovada',
          color: 'status-success',
          description: 'Em 21/04 às 18:00'
        },
        {
          label: 'Treino pendente',
          color: 'status-warning',
          description: 'Objetivo: Levar pet ao shopping'
        }
      ]
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

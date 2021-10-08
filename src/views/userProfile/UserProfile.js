import LoadingCircle from '../../common/components/loadingCircle'

import { mapState, mapActions } from 'vuex'
const premiumIcon = require('../../assets/images/premiumBg.svg')

export default {
  name: 'UserProfile',
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
      ]
    }
  },
  components: {
    LoadingCircle
  },
  computed: {
    ...mapState('pets', ['petProfile', 'loadingPets']),
    ...mapState('auth', ['user']),
    getCardStyle () {
      return {
        backgroundImage: `url(${premiumIcon})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover'
      }
    }
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
    ]),
    clickHandler (index) {
      if (this.info[index].value === 'personal') {
        this.$router.push({
          name: 'UserProfileDetails',
          params: { id: this.user.id }
        })
      }
    },
    logout () {
      // TODO: requisicao para sair do app
    }
  }
}

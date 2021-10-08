import LoadingCircle from '../../common/components/loadingCircle'
import ActionModal from '../../common/components/Modal/ActionModal/ActionModal'

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
      ],
      logoutModal: {
        model: false,
        data: {
          title: 'Deseja sair do app?',
          message: 'Você terá que realizar login para acessar o app novamente',
          btnLabel: 'Sair do app',
          backLabel: 'Voltar'
        }
      }
    }
  },
  components: {
    LoadingCircle,
    ActionModal
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
    },
    hideLogoutModal () {
      this.logoutModal.model = false
    },
    showLogoutModal () {
      this.logoutModal.model = true
    }
  }
}

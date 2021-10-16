import LoadingCircle from '../../common/components/loadingCircle'
import ActionModal from '../../common/components/Modal/ActionModal/ActionModal'
import SupportModal from '../../common/components/Modal/SupportModal/SupportModal'
import FeedbackModal from '../../common/components/FeedbackModal/FeedbackModal.vue'

import { mapState, mapActions } from 'vuex'
const premiumIcon = require('../../assets/images/premiumBg.svg')
const rocketIcon = require('../../assets/images/feedback/rocket.svg')

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
      },
      supportModalStatus: false,
      feedbackModalStatus: false,
      feedbackModalTitle: 'Assinatura confirmada',
      feedbackModalSubtitle:
        'Agora você é um tutor premium do Mimo Pet App. Aproveite os benefícios até a renovação de sua assinatura em 12/05/2020',
      feedbackModalButtonText: 'Entendi'
    }
  },
  components: {
    LoadingCircle,
    ActionModal,
    SupportModal,
    FeedbackModal
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
    },
    feedbackIcon () {
      return rocketIcon
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
      } else if (this.info[index].value === 'help') {
        this.showSupportModal()
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
    },
    hideSupportModal () {
      this.supportModalStatus = false
    },
    showSupportModal () {
      this.supportModalStatus = true
    },
    closeFeedbackModal () {
      this.feedbackModalStatus = false
    }
  }
}

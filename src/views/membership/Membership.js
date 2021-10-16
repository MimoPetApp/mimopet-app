import LoadingCircle from '../../common/components/loadingCircle'
import Button from '../../common/components/Button/Button.vue'
import PaymentModal from '../../common/components/Modal/PaymentModal/PaymentModal.vue'
import FeedbackModal from '../../common/components/FeedbackModal/FeedbackModal.vue'
import { Notify } from 'quasar'

import { mapState, mapActions } from 'vuex'

const aimIcon = require('../../assets/images/feedback/aim.svg')

export default {
  name: 'Membership',
  data () {
    return {
      paymentModalStatus: false,
      feedbackModalStatus: false,
      isMembership: false,
      title: '',
      subTitle: '',
      description: '',
      benefitsList: [
        {
          label: 'Cadastre ilimitados perfis pets'
        },
        {
          label: 'Inscrições ilimitados em treinamentos'
        },
        {
          label: 'Acesso exclusivo a novas funções'
        },
        {
          label: 'Descontos em locais pet friendly'
        }
      ],
      firstBtnLabel: '',
      secondBtnLabel: '',
      paymentModalTitle: 'Pague com PIX✌️',
      paymentModalSubtitle: 'Liberação da assinatura em minutos',
      paymentModalDescription:
        'Sua mensalidade é de 49,90 com benefícios em treinamentos e pets ilimitados.',
      paymentModalButtonText: 'Copiar PIX',
      paymentModalSubButtonText: 'Continuar',
      feedbackModalTitle: 'Aguardando recebimento',
      feedbackModalSubtitle: 'Assim que recebermos o valor sua assinatura será confirmada',
      feedbackModalButtonText: 'Entendi'
    }
  },
  components: {
    LoadingCircle,
    Button,
    PaymentModal,
    FeedbackModal
  },
  computed: {
    ...mapState('pets', ['petProfile', 'loadingPets']),
    ...mapState('auth', ['user']),
    getMembershipTitle () {
      if (this.isMembership) {
        this.title = 'Você é um tutor de pet premium!️'
      } else {
        this.title = 'Torne-se premium!'
      }
      return this.title
    },
    getMembershipSubTitle () {
      if (!this.isMembership) {
        this.subTitle = 'Seu pet merece um mimo 🐶️'
      }
      return this.subTitle
    },
    getMembershipDescription () {
      if (this.isMembership) {
        this.description = 'Sua mensalidade é de R$ 49,90. Renovação em 12/10/2021'
      } else {
        this.description = 'Assinatura de R$ 49,90, com renovação a cada 30 dias.'
      }
      return this.description
    },
    getMembershipFirstBtnLabel () {
      if (this.isMembership) {
        this.firstBtnLabel = 'Cancelar assinatura'
      } else {
        this.firstBtnLabel = 'Assinar depois'
      }
      return this.firstBtnLabel
    },
    getMembershipSecondBtnLabel () {
      if (this.isMembership) {
        this.secondBtnLabel = 'Voltar para início'
      } else {
        this.secondBtnLabel = 'Assinar por R$49,90'
      }
      return this.secondBtnLabel
    },
    feedbackIcon () {
      return aimIcon
    }
  },
  mounted () {
    this.ActionSetHomeMenuVisibility(false)
  },
  beforeRouteLeave (to, from, next) {
    this.ActionSetHomeMenuVisibility(true)
    next()
  },
  methods: {
    ...mapActions('pets', ['ActionSetHomeMenuVisibility']),
    goToUserProfile () {
      this.$router.push({
        name: 'UserProfile'
      })
    },
    copyPixCode () {
      Notify.create({
        message: 'Código PIX copiado com sucesso!',
        color: 'status-success',
        timeout: 300,
        position: 'top'
      })
    },
    confirmPayment () {
      this.hideHandler()
      this.feedbackModalStatus = true
    },
    hideHandler () {
      this.paymentModalStatus = false
    }
  }
}

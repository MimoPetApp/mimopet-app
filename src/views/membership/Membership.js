import LoadingCircle from '../../common/components/loadingCircle'
import Button from '../../common/components/Button/Button.vue'

import { mapState, mapActions } from 'vuex'

export default {
  name: 'Membership',
  data () {
    return {
      isMembership: false,
      title: '',
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
      secondBtnLabel: ''
    }
  },
  components: {
    LoadingCircle,
    Button
  },
  computed: {
    ...mapState('pets', ['petProfile', 'loadingPets']),
    ...mapState('auth', ['user']),
    getMembershipTitle () {
      if (this.isMembership) {
        this.title = 'Você é um tutor de pet premium!️'
      } else {
        this.title = 'Torne-se premium! Seu pet merece um mimo 🐶️'
      }
      return this.title
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
    }
  },
  created () {},
  methods: {
    ...mapActions('pets', [
      'ActionGetPetById',
      'ActionCommitPet',
      'ActionSetLoadingPet',
      'ActionmodalDeletePet',
      'ActionSetHomeMenuVisibility'
    ]),
    cancel () {},
    redirect () {}
  }
}

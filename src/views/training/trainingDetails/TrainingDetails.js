import LoadingCircle from '../../../common/components/loadingCircle'
import ModuleCard from '../../../common/components/ModuleCard/ModuleCard'
import Button from '../../../common/components/Button/Button'
import ActionModal from '../../../common/components/Modal/ActionModal/ActionModal'
import FeedbackModal from '../../../common/components/FeedbackModal/FeedbackModal'

import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'

const checkedIcon = require('../../../assets/images/feedback/checked.svg')

export default {
  name: 'TrainingDetails',
  components: {
    LoadingCircle,
    ModuleCard,
    Button,
    ActionModal,
    FeedbackModal
  },
  data () {
    return {
      unsubscribeTrainingModal: {
        model: false,
        data: {
          title: 'Deseja cancelar a inscrição do pet neste programa de treino?',
          message:
            'Você perderá seu histórico de progresso, mas poderá se inscrever novamente quando desejar.',
          btnLabel: 'Continuar',
          backLabel: 'Voltar'
        },
        action: () => {
          this.unsubscribeTraining()
        }
      },
      feedbackModal: {
        status: false,
        icon: checkedIcon,
        title: 'Inscrição cancelada',
        subtitle: 'Explore por novos treinamentos quando desejar.',
        buttonText: 'Voltar',
        action: () => {
          this.hideFeedbackModal()
          this.goToMyTrainings()
        }
      },
      trainingID: this.$route.params.id
    }
  },
  computed: {
    ...mapState('training', ['modules', 'loadingTrainings']),
    ...mapGetters('training', ['getTraining']),
    getTrainingTitle () {
      if (!this.isEmptyObject(this.getTraining)) {
        return this.getTraining.title
      }
    },
    getTrainingDescription () {
      if (!this.isEmptyObject(this.getTraining)) {
        return this.getTraining.description
      }
    }
  },
  methods: {
    ...mapActions('training', [
      'ActionGetModules',
      'ActionUnsubscribeTraining',
      'ActionGetTraining'
    ]),
    ...mapMutations('training', ['SET_HAS_HEADER']),
    async unsubscribeTraining () {
      const payload = {
        id: this.$route.params.id,
        body: {
          subscribe: false
        }
      }
      const res = await this.ActionUnsubscribeTraining(payload)
      if (res) {
        this.showFeedbackModal()
      }
    },
    showUnsubscribeTrainingModal () {
      this.unsubscribeTrainingModal.model = true
    },
    hideUnsubscribeTrainingModal () {
      this.unsubscribeTrainingModal.model = false
    },
    hideFeedbackModal () {
      this.feedbackModal.status = false
    },
    showFeedbackModal () {
      this.feedbackModal.status = true
    },
    goToMyTrainings () {
      this.$router.push({ name: 'TrainingList' })
    },
    isEmptyObject (obj) {
      return obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype
    },
    isClickable (event, module) {
      let isClickable = true
      if (module.locked) {
        isClickable = false
        event.preventDefault()
      }
      return isClickable
    }
  },
  beforeRouteLeave (to, from, next) {
    this.SET_HAS_HEADER(true)
    next()
  },

  async mounted () {
    this.SET_HAS_HEADER(false)
  },
  async created () {
    await this.ActionGetModules(this.trainingID)
    await this.ActionGetTraining(this.trainingID)
  }
}

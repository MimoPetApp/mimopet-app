import { mapActions, mapGetters, mapMutations } from 'vuex'
import ObedienceGuidelineCard from '../../../common/components/ObedienceGuidelineCard/ObedienceGuidelineCard.vue'
import ObedienceProgress from '../../../common/components/ObedienceProgress/ObedienceProgress.vue'
import Loading from '../../../common/components/loading'

export default {
  name: 'ObedienceDetails',
  components: {
    ObedienceGuidelineCard,
    ObedienceProgress,
    Loading
  },
  props: {
    obedienceID: {
      type: String
    }
  },
  data () {
    return {
      loading: false,
      commandsList: [
        {
          id: 1,
          title: 'Sentar',
          level: 'Básico',
          badges: 3,
          status: 'Habilitado'
        },
        {
          id: 2,
          title: 'Dar patinha',
          level: 'Intermediário',
          badges: 2,
          status: 'Habilitado'
        },
        {
          id: 3,
          title: 'Rolar',
          level: 'Avançado',
          badges: 1,
          status: 'Habilitado'
        },
        {
          id: 4,
          title: 'Auto controle',
          level: 'Em breve',
          status: 'Desabilitado'
        }
      ],
      methodsList: [
        {
          id: 1,
          type: 'guideline',
          repetitions: 11,
          items: [
            {
              title: 'Aprender',
              stepID: '1',
              typeStep: 'slideStep'
            }
          ]
        },
        {
          id: 2,
          type: 'generalization',
          repetitions: 4,
          items: [
            {
              title: 'Sentar no elevador',
              stepID: '2',
              typeStep: 'slideStep'
            },
            {
              title: 'Receber carinho',
              stepID: '3',
              typeStep: 'videoStep'
            }
          ]
        },
        {
          id: 3,
          type: 'challenge',
          repetitions: 1,
          items: [
            {
              title: '1 ',
              stepID: '4',
              typeStep: 'exerciseStep'
            },
            {
              title: '2 ',
              stepID: '5',
              typeStep: 'exerciseStep'
            }
          ]
        }
      ],
      repetitionAmount: 15
    }
  },
  computed: {
    ...mapGetters('obedience', ['getObedience']),
    setBgColor () {
      let bgColor = ''
      switch (this.getObedience.type) {
        case 'basic':
          bgColor = '#4ad5da'
          break

        case 'intermediary':
          bgColor = '#FFCD5C'
          break

        case 'advanced':
          bgColor = '#F2A16A'
          break

        default:
          bgColor = '#EEEEF0'
          break
      }
      return bgColor
    },
    setBadgeLabel () {
      return this.getObedience.executions > 1 ? 'execuções' : 'execução'
    },
    setDetailsTitle () {
      return this.getObedience.title
    },
    setDetailsDescription () {
      return this.getObedience.description
    },
    setObedienceProgress () {
      return this.getObedience.badge_progress
    }
  },
  async created () {
    this.loading = true
    await this.loadObedienceDetails()
    this.loading = false
  },
  mounted () {
    this.showInnerHeader()
  },
  beforeRouteLeave (to, from, next) {
    this.resetInnerHeader()
    next()
  },
  methods: {
    ...mapActions('obedience', ['ActionFindObedience']),
    ...mapMutations('pets', {
      SET_INNER_HEADER: 'PETS/SET_INNER_HEADER'
    }),
    setGuidelineTitle (guidelineType) {
      let title
      if (guidelineType.includes('instruction')) {
        title = 'Instrução'
      } else if (guidelineType.includes('generalization')) {
        title = 'Generalização'
      } else {
        title = 'Desafio'
      }
      return title
    },
    setGuidelineUrlTitle (guidelineType) {
      let title
      if (guidelineType.includes('instruction')) {
        title = 'instruction'
      } else if (guidelineType.includes('generalization')) {
        title = 'generalization'
      } else {
        title = 'challenge'
      }
      return title
    },
    async loadObedienceDetails () {
      await this.ActionFindObedience(this.obedienceID)
    },
    showInnerHeader () {
      const params = {
        status: true,
        title: 'Comando de obediência',
        modal: {}
      }
      this.SET_INNER_HEADER(params)
    },
    resetInnerHeader () {
      const params = {
        status: false,
        title: '',
        modal: {}
      }
      this.SET_INNER_HEADER(params)
    },
    actionHandler (item, guideline) {
      // teste
      const guidelineUrlTitle = this.setGuidelineUrlTitle(guideline.__component)
      this.$router.push({
        name: 'ObediencieExercise',
        params: { guia: guidelineUrlTitle, exercicioID: item.id, obedienceID: this.obedienceID }
      })
    }
  }
}

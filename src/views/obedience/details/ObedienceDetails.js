import { mapActions, mapGetters } from 'vuex'
import ObedienceGuidelineCard from '../../../common/components/ObedienceGuidelineCard/ObedienceGuidelineCard.vue'
import ObedienceProgress from '../../../common/components/ObedienceProgress/ObedienceProgress.vue'

export default {
  name: 'ObedienceDetails',
  components: {
    ObedienceGuidelineCard,
    ObedienceProgress
  },
  data () {
    return {
      obedienceID: null,
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
    this.obedienceID = this.$route.params.id
    await this.loadObedienceDetails()
    this.loading = false
  },
  methods: {
    ...mapActions('obedience', ['ActionFindObedience']),
    setMethodTitle (guidelineType) {
      let title
      if (guidelineType.includes('instruction')) {
        title = 'Instruções'
      } else if (guidelineType.includes('generalization')) {
        title = 'Generalização'
      } else {
        title = 'Desafio'
      }
      return title
    },
    async loadObedienceDetails () {
      await this.ActionFindObedience(this.obedienceID)
    }
  }
}

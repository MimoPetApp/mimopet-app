import ObedienceMethodCard from '../../../common/components/ObedienceMethodCard/ObedienceMethodCard.vue'

export default {
  name: 'ObedienceDetails',
  components: {
    ObedienceMethodCard
  },
  data () {
    return {
      commandID: null,
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
    setBgColor () {
      let bgColor = ''
      switch (this.commandsList[this.commandID - 1].level) {
        case 'Básico':
          bgColor = '#4ad5da'
          break

        case 'Intermediário':
          bgColor = '#FFCD5C'
          break

        case 'Avançado':
          bgColor = '#F2A16A'
          break

        default:
          bgColor = '#EEEEF0'
          break
      }
      return bgColor
    },
    setBadgeLabel () {
      return this.repetitionAmount > 1 ? 'execuções' : 'execução'
    },
    setDetailsTitle () {
      return this.commandsList[this.commandID - 1].title
    }
  },
  created () {
    this.commandID = this.$route.params.id
  },
  methods: {
    setMethodTitle (type) {
      let title
      switch (type) {
        case 'guideline':
          title = 'Instruções'
          break
        case 'generalization':
          title = 'Generalização'
          break
        default:
          title = 'Desafio'
          break
      }
      return title
    }
  }
}

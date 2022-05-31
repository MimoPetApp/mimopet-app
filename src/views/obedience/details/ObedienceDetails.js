import ObedienceCard from '../../../common/components/ObedienceCard/ObedienceCard.vue'

export default {
  name: 'ObedienceDetails',
  components: {
    ObedienceCard
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
    }
  },
  created () {
    this.commandID = this.$route.params.id
  },
  methods: {}
}

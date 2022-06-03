import ObedienceCard from '../../../common/components/ObedienceCard/ObedienceCard.vue'

export default {
  name: 'Obedience',
  components: {
    ObedienceCard
  },
  data () {
    return {
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
      ]
    }
  },
  computed: {},
  created () {},
  methods: {
    clickHandler (command) {
      if (command.level !== 'Em breve') {
        this.$router.push({ name: 'ObedienceDetails', params: { id: command.id } })
      }
    }
  }
}

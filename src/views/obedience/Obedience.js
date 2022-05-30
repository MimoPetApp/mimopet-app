import ObedienceCard from '../../common/components/ObedienceCard/ObedienceCard.vue'

export default {
  name: 'Obedience',
  components: {
    ObedienceCard
  },
  data () {
    return {
      commandsList: [
        {
          title: 'Sentar',
          level: 'Básico',
          badges: 3,
          status: 'Habilitado'
        },
        {
          title: 'Dar patinha',
          level: 'Intermediário',
          badges: 2,
          status: 'Habilitado'
        },
        {
          title: 'Rolar',
          level: 'Avançado',
          badges: 1,
          status: 'Habilitado'
        },
        {
          title: 'Auto controle',
          level: 'Em breve',
          status: 'Desabilitado'
        }
      ]
    }
  },
  computed: {},
  created () {},
  methods: {}
}

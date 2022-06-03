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
          disabled: false
        },
        {
          id: 2,
          title: 'Dar patinha',
          level: 'Intermediário',
          badges: 2,
          disabled: false
        },
        {
          id: 3,
          title: 'Rolar',
          level: 'Avançado',
          badges: 1,
          disabled: false
        },
        {
          id: 4,
          title: 'Auto controle',
          level: 'Em breve',
          disabled: true
        }
      ]
    }
  },
  computed: {},
  created () {},
  methods: {
    clickHandler (command) {
      if (!this.isDisabled(command.disabled)) {
        this.$router.push({ name: 'ObedienceDetails', params: { id: command.id } })
      }
    },
    isDisabled (disabled) {
      return disabled
    }
  }
}

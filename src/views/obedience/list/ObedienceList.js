import { mapActions, mapGetters } from 'vuex'
import ObedienceCard from '../../../common/components/ObedienceCard/ObedienceCard.vue'
import Loading from '../../../common/components/loading'

export default {
  name: 'Obedience',
  components: {
    ObedienceCard,
    Loading
  },
  data () {
    return {
      loading: false,
      clicked: false
    }
  },
  computed: {
    ...mapGetters('obedience', ['getObedienceList']),
    noContentAvailable () {
      return 'Sem conteúdo disponível'
    },
    hasContentAvailable () {
      return this.getObedienceList.length > 0
    },
    noContentAvailableClass () {
      if (!this.hasContentAvailable) {
        return 'flex justify-center items-center'
      }
    }
  },
  async created () {
    await this.loadObedienceContent()
  },
  methods: {
    ...mapActions('obedience', ['ActionListObediences']),
    clickHandler (command) {
      if (!this.isDisabled(command.type)) {
        this.clicked = true
        this.$router.push({ name: 'ObedienceDetails', params: { id: command.id } })
      }
    },
    isDisabled (type) {
      let disabled = false
      if (type === 'upcoming') {
        disabled = true
      }
      return disabled
    },
    selectType (type) {
      let string
      switch (type) {
        case 'basic':
          string = 'Básico'
          break
        case 'intermediary':
          string = 'Intermediário'
          break
        case 'advanced':
          string = 'Avançado'
          break

        default:
          string = 'Em breve'
          break
      }
      return string
    },
    async loadObedienceContent () {
      this.loading = true
      await this.ActionListObediences()
      this.loading = false
    }
  }
}

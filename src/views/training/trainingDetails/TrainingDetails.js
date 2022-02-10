import LoadingCircle from '../../../common/components/loadingCircle'
import ModuleCard from '../../../common/components/ModuleCard/ModuleCard'
import Button from '../../../common/components/Button/Button'

import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'TrainingDetails',
  components: {
    LoadingCircle,
    ModuleCard,
    Button
  },
  computed: {
    ...mapState('training', ['modules', 'loadingTrainings'])
  },
  methods: {
    ...mapActions('training', ['ActionGetModules', 'ActionUnsubscribeTraining']),
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
        this.goToMyTrainings()
      }
    }
  },
  beforeRouteLeave (to, from, next) {
    this.SET_HAS_HEADER(true)
    next()
  },
  goToMyTrainings () {
    this.$router.push({ name: 'TrainingList' })
  },
  async mounted () {
    this.SET_HAS_HEADER(false)
  },
  async created () {
    this.ActionGetModules(this.$route.params.id)
  }
}

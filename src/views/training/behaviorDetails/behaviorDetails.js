import { mapActions, mapState, mapMutations } from 'vuex'
import parser from './../../../common/helpers/trainingParser'
import Button from '../../../common/components/Button/Button'
import LoadingCircle from '../../../common/components/loadingCircle'
import Tag from '../../../common/components/Tag/Tag'
import FeedbackModal from '../../../common/components/FeedbackModal/FeedbackModal'
import utils from '../../../common/helpers/utils'

const hitIcon = require('../../../assets/images/feedback/hit.svg')

export default {
  components: { LoadingCircle, Button, Tag, FeedbackModal },
  data() {
    return {
      loadingSubscribe: false,
      hasFeedback: false
    }
  },
  computed: {
    ...mapState('training', ['behavior', 'loadingTrainings']),
    feedbackIcon() {
      return hitIcon
    }
  },
  methods: {
    ...utils,
    ...parser,
    ...mapActions('training', ['ActionGetTraining']),
    ...mapMutations('training', ['SET_HAS_HEADER']),
    timeout(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },
    async onSubscribe() {
      this.loadingSubscribe = true
      await this.timeout(500)
      this.hasFeedback = true
      this.loadingSubscribe = false
    },
    homeBehaviorList() {
      this.$router.push({ name: 'behaviorList' })
    },
    trainingDetailsHandler() {
      this.$router.push({ name: 'TrainingDetails', params: { id: this.behavior.id } })
    }
  },
  beforeRouteLeave(to, from, next) {
    this.SET_HAS_HEADER(true)
    next()
  },
  async created() {
    await this.ActionGetTraining(this.$route.params.id)
    this.SET_HAS_HEADER(false)
  }
}

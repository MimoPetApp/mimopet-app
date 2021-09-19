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
  data () {
    return {
      currSlide: 0,
      loading: false,
      hasFeedback: false
    }
  },
  computed: {
    ...mapState('training', ['train', 'slide', 'loadingTrainings']),
    feedbackIcon () {
      return hitIcon
    }
  },
  methods: {
    ...utils,
    ...parser,
    ...mapActions('training', ['ActionGetModule', 'ActionGetSlide']),
    ...mapMutations('training', ['SET_HAS_HEADER']),
    timeout (ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },
    async onFinish () {
      this.loading = true
      await this.timeout(500)
      this.hasFeedback = true
      this.loading = false
    },
    trainingDetailsHandler () {
      this.$router.push({ name: 'TrainingDetails', params: { id: this.train.id } })
    }
  },
  beforeRouteLeave (to, from, next) {
    this.SET_HAS_HEADER(true)
    next()
  },
  async mounted () {
    this.SET_HAS_HEADER(false)
    await this.ActionGetModule(this.$route.params.idModulo)
    await this.ActionGetSlide(this.train.steps[0].slides[0].id)
  }
}

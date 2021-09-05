import { mapActions, mapState, mapMutations } from 'vuex'
import parser from './../../../common/helpers/trainingParser'
import Button from '../../../common/components/Button/Button'
import LoadingCircle from '../../../common/components/loadingCircle'
import Tag from '../../../common/components/Tag/Tag'
import FeedbackModal from '../../../common/components/FeedbackModal/FeedbackModal'

const hitIcon = require('../../../assets/images/feedback/hit.svg')

export default {
  components: { LoadingCircle, Button, Tag, FeedbackModal },
  data() {
    return {
      loading: false,
      loadingSubscribe: false,
      hasFeedback: false
    }
  },
  computed: {
    ...mapState('training', ['behavior']),
    feedbackIcon() {
      return hitIcon
    }
  },
  methods: {
    ...parser,
    ...mapActions('training', ['ActionGetBehavior']),
    ...mapMutations('training', ['SET_HAS_HEADER']),
    timeout(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },
    async onSubscribe() {
      this.loadingSubscribe = true
      await this.timeout(3000)
      this.hasFeedback = true
      this.loadingSubscribe = false
    },
    homeBehaviorList() {
      this.$router.push({ name: 'behaviorList' })
    },
    homeHandler() {
      this.$router.push({ name: 'home' })
    }
  },
  beforeRouteLeave(to, from, next) {
    this.SET_HAS_HEADER(true)
    next()
  },
  async created() {
    this.loading = true
    await this.ActionGetBehavior(this.$route.params.id)
    this.SET_HAS_HEADER(false)
    this.loading = false
  }
}

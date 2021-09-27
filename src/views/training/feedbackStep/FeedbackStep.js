import LoadingCircle from '../../../common/components/loadingCircle'
import ButtonCheckboxGroup from '../../../common/components/ButtonCheckboxGroup'
import Ask from '../../../common/components/Ask/Ask.vue'
import Button from '../../../common/components/Button/Button.vue'
import FeedbackModal from '../../../common/components/FeedbackModal/FeedbackModal.vue'
import { mapState, mapActions } from 'vuex'

const petIcon = require('../../../assets/images/feedback/pet.svg')

export default {
  name: 'FeedbackStep',
  components: {
    LoadingCircle,
    ButtonCheckboxGroup,
    Ask,
    Button,
    FeedbackModal
  },
  data () {
    return {
      step: 0,
      selected: false,
      form: {}
    }
  },
  computed: {
    ...mapState('training', ['feedback']),
    feedbackIcon () {
      return petIcon
    }
  },
  methods: {
    ...mapActions('training', ['ActionGetFeedback']),
    selectedHandler (name, event) {
      this.form[name] = event
      this.selected = true
    },
    nextStep () {
      this.step += 1
    },
    isFeedback (item) {
      console.log('a', item)
      // eslint-disable-next-line no-prototype-builtins
      if (item.hasOwnProperty('index')) {
        return false
      } else {
        return true
      }
    },
    checkCondition (item) {
      /*
      switch (item.condition) {
        case 'equals':
          break
        case 'different':
          break
        case 'lessThanOrEqual':
          break
        case 'greaterThanOrEqual':
          break
        case 'lessThan':
          break
        default:
          break
      }
      */
    }
  },
  async created () {
    await this.ActionGetFeedback(this.$route.params.idSessao)
  }
}

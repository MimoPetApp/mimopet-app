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
      form: {},
      modalStatus: false,
      modalData: null
    }
  },
  computed: {
    ...mapState('training', ['feedback', 'loadingTrainings']),
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
      const type = item.__component
      // eslint-disable-next-line no-prototype-builtins
      if (type === 'utils.quiz-item') {
        return true
      } else {
        this.modalStatus = true
        this.modalData = item
        return false
      }
    },
    checkCondition (item, index) {
      const form = this.form
      switch (item.condition) {
        case 'equals':
          form[index].some(obj => {
            if (form[index].contains(obj)) {
              console.log('a')
            }
            return true
          })
          break
        case 'different':
          form[index].some(obj => {
            if (form[index].contains(obj)) {
              console.log('a')
            }
            return true
          })

          break
        case 'lessThanOrEqual':
          form[index].some(obj => {
            if (form[index].contains(obj)) {
              console.log('a')
            }
            return true
          })
          break
        case 'greaterThanOrEqual':
          form[index].some(obj => {
            if (form[index].contains(obj)) {
              console.log('a')
            }
            return true
          })

          break
        case 'lessThan':
          form[index].some(obj => {
            if (form[index].contains(obj)) {
              console.log('a')
            }
            return true
          })

          break
        default:
          break
      }
    }
  },
  async created () {
    await this.ActionGetFeedback(this.$route.params.idSessao)
  }
}

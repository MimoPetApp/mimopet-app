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
  data() {
    return {
      step: 0,
      selected: false,
      form: [],
      questions: [],
      warnings: [],
      dialog: {
        model: false,
        title: 'asdasd',
        subtitle: 'asdasdasd',
        action: () => {}
      },
      modalData: null
    }
  },
  computed: {
    ...mapState('training', ['feedback', 'loadingTrainings']),
    feedbackIcon() {
      return petIcon
    }
  },
  methods: {
    ...mapActions('training', ['ActionGetFeedback']),
    selectedHandler(index, event) {
      // TODO essa função ta incompleta
      console.log('selectedHandler', index, event)
      this.form.push({
        feedback: index,
        answer: event
      })
      this.selected = true
    },
    handleWarning(warning) {
      this.dialog.model = false
      this.step += 1
    },
    nextStep(currItem) {
      const answer = 1 // TODO: pegar resposta do user
      if (
        currItem.warning &&
        this.checkCondition(currItem.warning.condition, currItem.warning.index, answer)
      ) {
        this.dialog = {
          model: true,
          title: currItem.warning.title,
          subtitle: currItem.warning.description,
          action: () => {
            this.handleWarning(currItem.warning)
          }
        }
      } else {
        if (this.step + 1 < this.questions.length) {
          this.step += 1
        } else {
          // TODO go to last page
        }
      }
    },
    filterData() {
      this.feedback.items.map(item => {
        if (item.__component === 'utils.quiz-item') {
          this.questions.push(item)
        } else if (item.__component === 'utils.option-warning') {
          if (this.questions.length >= 1) {
            this.questions[this.questions.length - 1].warning = item
          }
        }
        return true
      })
    },
    checkCondition(condition, index, answer) {
      console.log('checkCondition', condition, index, answer)
      switch (condition) {
        case 'equals':
          return answer === index
        case 'different':
          return answer !== index
        case 'lessThanOrEqualTo':
          return answer <= index
        case 'greaterThanOrEqualTo':
          return answer >= index
        case 'lessThan':
          return answer < index
        case 'greaterThan':
          return answer > index
        default:
          return false
      }
    }
  },
  async created() {
    await this.ActionGetFeedback(this.$route.params.idSessao)
    this.filterData()
  }
}

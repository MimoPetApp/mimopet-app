import LoadingCircle from '../../../common/components/loadingCircle'
import ButtonCheckboxGroup from '../../../common/components/ButtonCheckboxGroup'
import Ask from '../../../common/components/Ask/Ask.vue'
import Button from '../../../common/components/Button/Button.vue'
import FeedbackModal from '../../../common/components/FeedbackModal/FeedbackModal.vue'
import { mapState, mapActions } from 'vuex'

const petIcon = require('../../../assets/images/feedback/pet.svg')
const checkedIcon = require('../../../assets/images/feedback/shine.svg')

export default {
  name: 'QuizStep',
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
      form: [],
      questions: [],
      warnings: [],
      dialog: {
        model: false,
        title: '',
        subtitle: '',
        loading: false,
        icon: '',
        btnText: '',
        action: () => {}
      },
      quizID: null
    }
  },
  computed: {
    ...mapState('training', ['quiz', 'loadingTrainings']),
    feedbackIcon () {
      return petIcon
    },
    checkedIcon () {
      return checkedIcon
    }
  },
  methods: {
    ...mapActions('training', ['ActionGetQuiz']),
    ...mapActions('quiz', ['ActionUpdateQuizStepCompleted']),
    selectedHandler (index, event) {
      this.form[index] = {
        quizID: this.quizID,
        itemIndex: index,
        answer: event,
        answered: true
      }
      if (event.length === 0) {
        // no elements selection
        this.form[index].answered = false
      }
    },
    handleWarning (warning) {
      this.dialog.model = false
      this.step += 1
    },
    async nextStep (currItem, index) {
      const answerIndexList = this.mapAnswerToIndexList(index)
      if (
        currItem.warning &&
        this.checkCondition(currItem.warning.condition, currItem.warning.index - 1, answerIndexList)
      ) {
        this.dialog = {
          model: true,
          title: currItem.warning.title,
          subtitle: currItem.warning.description,
          icon: currItem.warning.icon ? currItem.warning.icon : this.feedbackIcon,
          btnText: 'Continuar',
          action: () => {
            this.handleWarning(currItem.warning)
          }
        }
      } else {
        if (this.step + 1 < this.questions.length) {
          this.step += 1
        } else {
          // TODO save quiz data
          // this.saveQuiz()
          const res = await this.stepDone()
          if (res) {
            this.dialog = {
              model: true,
              title: 'Etapa concluída',
              subtitle: 'Parabéns, você adquiriu mais conhecimento para lidar com seu pet.',
              icon: this.checkedIcon,
              btnText: 'Voltar',
              action: () => {
                // go to last page
                this.goBack()
              }
            }
          }
        }
      }
    },
    timeout (ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },
    /*
    isStepDoing () {
      return this.stepStatus[0].status === 'doing'
    },
    */
    /*
    async setStepToDoing () {
      // if is first time to do
      if (this.stepStatus.length === 0) {
        await this.ActionCreateStepUser({
          step: this.quizID,
          type: 'quiz',
          status: 'doing'
        })
      }
    },
    */
    isEmptyObject (obj) {
      return obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype
    },
    isStepDone () {
      if (!this.isEmptyObject(this.quiz)) {
        return this.quiz.completed
      }
    },
    async stepDone () {
      if (!this.isStepDone()) {
        // Atualizar o status
        const res = await this.ActionUpdateQuizStepCompleted({
          id: this.quizID,
          body: {
            completed: true
          }
        })
        return res
      }
      /*
      if (this.isStepDoing()) {
        // Atualizar o status
        await this.ActionUpdateStepUser({
          id: this.stepsUsers[0].id,
          body: {
            step: this.quizID,
            type: 'quiz',
            status: 'done'
          }
        })
      }
      */
    },
    goBack () {
      this.$router.go(-1)
    },
    async saveQuiz () {
      // TODO: salvar os dados
      this.dialog.loading = true
      await this.timeout(500)
      this.dialog.loading = false
      /*
      this.$router.push({
        name: 'ModuleDetails',
        params: { id: this.$route.params.id, idModulo: this.$route.params.idModulo }
      })
      */
    },
    mapAnswerToIndexList (currIndex) {
      const indexList = this.form[currIndex].answer.map(answer => {
        const index = this.questions[currIndex].options.map((option, optionIndex) => {
          return option.label === answer.label ? optionIndex : ''
        })
        const number = index.filter(item => {
          return item !== ''
        })
        return number[0]
      })
      return indexList
    },
    filterData () {
      this.quiz.items.map(item => {
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
    checkCondition (condition, index, answers) {
      if (answers.length === 0) {
        return false
      }
      const answerIndexListAsc = answers
      answerIndexListAsc.sort()

      switch (condition) {
        case 'equals':
          return answerIndexListAsc.includes(index)
        case 'different':
          return !answerIndexListAsc.includes(index)
        case 'lessThanOrEqualTo':
          return answerIndexListAsc[answerIndexListAsc.length - 1] <= index
        case 'greaterThanOrEqualTo':
          return answerIndexListAsc[answerIndexListAsc.length - 1] >= index
        case 'lessThan':
          return answerIndexListAsc[answerIndexListAsc.length - 1] < index
        case 'greaterThan':
          return answerIndexListAsc[answerIndexListAsc.length - 1] > index
        default:
          return false
      }
    },
    formatForm () {
      this.questions.forEach(question => {
        this.form.push({
          quizID: null,
          itemIndex: null,
          answer: [],
          answered: false
        })
      })
    }
    /*
    async getStepStatus () {
      this.stepStatus = await this.ActionGetStepUser({
        step: this.quizID,
        type: 'quiz'
      })
    }
    */
  },
  async created () {
    await this.ActionGetQuiz(this.$route.params.idSessao)
    this.filterData()
    this.formatForm()
    this.quizID = this.quiz.id
    // await this.getStepStatus()
    // await this.setStepToDoing()
  }
}

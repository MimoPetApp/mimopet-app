import { mapActions, mapState, mapGetters, mapMutations } from 'vuex'
import Button from '../../../common/components/Button/Button'
import LoadingCircle from '../../../common/components/loadingCircle'
import Session from '../../../common/components/Session/Session'
import AnimationStep from '../../../common/components/AnimationStep/AnimationStep'
import InstructionStep from '../../../common/components/InstructionStep/InstructionStep'
import QuestionStep from '../questionStep/QuestionStep.vue'
import FeedbackModal from '../../../common/components/FeedbackModal/FeedbackModal'
import utils from '../../../common/helpers/utils'
import parser from './../../../common/helpers/trainingParser'
import stepParser from '../../../common/helpers/stepParser'

const hitIcon = require('../../../assets/images/feedback/hit.svg')
const shineIcon = require('../../../assets/images/feedback/shine.svg')

export default {
  name: 'ExerciseStep',
  components: {
    LoadingCircle,
    Button,
    FeedbackModal,
    Session,
    AnimationStep,
    InstructionStep,
    QuestionStep
  },
  props: {
    guia: {
      type: String
    },
    exercicioID: {
      type: String
    },
    obedienceID: {
      type: String
    }
  },
  data () {
    return {
      currExercise: 0,
      loading: false,
      hasFeedback: {
        status: false,
        type: ''
      },
      feedbackTitle: '',
      feedbackSubtitle: '',
      questionsAnswers: []
    }
  },
  computed: {
    ...mapState('training', ['exercise', 'loadingTrainings']),
    ...mapState('training', { trainingLayoutHeader: 'hasHeader' }),
    ...mapGetters('training', ['getExercise']),
    ...mapState('pets', { mainLayoutHeader: 'hasHeader' }),
    feedbackIcon () {
      if (this.hasFeedback.status) {
        if (this.hasFeedback.type === 'jump') {
          return shineIcon
        } else {
          return hitIcon
        }
      }
    },
    getExerciseSessions () {
      if (!this.isEmptyObject(this.getExercise)) {
        return this.getExercise.sessions
      }
    },
    showSentBtn () {
      // in the last session and not question
      return (
        this.currExercise === this.getExerciseSessions.length - 1 &&
        !this.getExerciseSessions[this.getExerciseSessions.length - 1].__component.includes(
          'question'
        )
      )
    },
    notLastSession () {
      return this.currExercise !== this.getExerciseSessions.length - 1
    },
    isQuestionStep () {
      return this.getExerciseSessions[this.currExercise].__component.includes('question')
    }
  },
  methods: {
    ...utils,
    ...parser,
    ...stepParser,
    ...mapActions('training', ['ActionGetExercise']),
    ...mapActions('exercise', ['ActionUpdateExerciseStepCompleted']),
    ...mapActions('pets', ['ActionSetHomeMenuVisibility']),
    ...mapMutations('training', { setTrainingLayoutMenuVisibility: 'SET_HAS_HEADER' }),
    timeout (ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },
    enableStep (data, stepType) {
      return data.__component.includes(stepType)
    },
    isEmptyObject (obj) {
      return obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype
    },
    async onFinish () {
      this.loading = true
      await this.timeout(500)
      this.hasFeedback = true
      this.loading = false
    },
    actionHandler () {
      /*
      this.$router.push({
        name: 'ModuleDetails',
        params: { id: this.$route.params.id, idModulo: this.$route.params.idModulo }
      })
      */
      if (this.hasFeedback.type === 'jump') {
        this.$router.go(-1)
      }
      this.hasFeedback = {
        status: false,
        type: ''
      }
    },
    play (exercise) {
      exercise.is_complete = true
      this.currExercise = exercise
      // TODO: salvar exercicio feito
      // this.player += 1
    },
    finishModal () {
      this.feedbackTitle = 'Etapa concluída'
      this.feedbackSubtitle = 'Parabéns, você adquiriu mais conhecimento para lidar com seu pet.'
      this.hasFeedback = {
        status: true,
        type: 'jump'
      }
    },
    guideModal () {
      this.feedbackTitle = 'Guia de treino'
      this.feedbackSubtitle = this.getExercise.guide
      this.hasFeedback = {
        status: true,
        type: 'guide'
      }
    },
    isStepDone () {
      if (!this.isEmptyObject(this.getExercise)) {
        return this.getExercise.completed
      }
    },
    hasQuestionAnswerId (id) {
      return this.questionsAnswers.find(question => question.id === id)
    },
    updateValueSameId (id, val) {
      const index = this.questionsAnswers.findIndex(question => question.id === id)
      this.questionsAnswers[index] = val
    },
    async onSent (val) {
      val = JSON.parse(JSON.stringify(val))
      if (val.length > 0) {
        // has answer
        const data = []
        val.forEach(question => {
          const title = question.title
          // return answer label
          const answers = question.answer.map(item => {
            return item.label
          })
          // format obj
          const obj = {
            name: title,
            answers
          }
          data.push(obj)
        })
        const id = this.getExerciseSessions[this.currExercise].question.id
        const params = {
          type: 'question',
          id,
          data
        }
        // check if has already questionAnswer Id
        if (!this.hasQuestionAnswerId(id)) {
          this.questionsAnswers.push(params)
        } else {
          this.updateValueSameId(id, params)
        }
      }
      if (this.currExercise === this.getExerciseSessions.length - 1) {
        await this.stepDone()
      } else {
        // not the last question
        this.currExercise += 1
      }
    },
    setExerciseCompletedParams () {
      let params
      const guidelineType = this.guia
      const idExercise = this.getExercise.id
      const idObedience = this.obedienceID
      if (this.isFromObedience()) {
        params = {
          url: `obedience-trainings/${idObedience}/guidelines/${guidelineType}/exercises/${idExercise}/complete`,
          body: []
        }
      } else {
        // general trainings
        params = {
          url: `exercises/${idExercise}/complete`,
          body: this.questionsAnswers
        }
      }
      return params
    },
    async exerciseCompleted () {
      const params = this.setExerciseCompletedParams()
      // Atualizar o status
      const res = await this.ActionUpdateExerciseStepCompleted(params)
      if (res) {
        // successs
        this.finishModal()
      }
    },
    async stepDone () {
      if (!this.isStepDone()) {
        await this.exerciseCompleted()
      } else {
        this.finishModal()
      }

      /*
      if (this.isStepDoing()) {
        // Atualizar o status
        await this.ActionUpdateStepUser({
          id: this.stepsUsers[0].id,
          body: {
            step: this.video.id,
            type: 'video',
            status: 'done'
          }
        })
      }
      */
    },
    isFromObedience () {
      return this.$route.meta.isFromObedience
    },
    setGetExerciseParams () {
      let params
      if (this.isFromObedience()) {
        params = this.exercicioID
      } else {
        params = this.$route.params.idSessao
      }
      return params
    },
    async loadExercise () {
      const params = this.setGetExerciseParams()
      const res = await this.ActionGetExercise(params)
      if (!res) {
        // throw error
      }
    },
    toggleMainLayoutNavigation () {
      this.ActionSetHomeMenuVisibility(!this.mainLayoutHeader)
    },
    toggleTrainingLayoutNavigation () {
      this.setTrainingLayoutMenuVisibility(!this.trainingLayoutHeader)
    },
    toggleNavigation () {
      if (this.isFromObedience()) {
        this.toggleMainLayoutNavigation()
      } else {
        this.toggleTrainingLayoutNavigation()
      }
    },
    isFirstLevelPath () {
      const path = this.$route.path
      return path.length - path.replaceAll('/', '').length === 1
    },
    back () {
      this.isFirstLevelPath() ? this.$router.push('/') : this.$router.go(-1)
    }
  },
  async created () {
    this.loading = true
    await this.loadExercise()
    // if (this.exercise.sessions.items.length > 0) {
    //   this.currExercise = this.exercise.sessions.items[0]
    // }
    this.loading = false
  },
  mounted () {
    this.toggleNavigation()
  },
  beforeRouteLeave (to, from, next) {
    this.toggleNavigation()
    next()
  }
}

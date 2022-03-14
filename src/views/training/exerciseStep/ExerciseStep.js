import { mapActions, mapState, mapGetters } from 'vuex'
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
      answers: []
    }
  },
  computed: {
    ...mapState('training', ['exercise', 'loadingTrainings']),
    ...mapGetters('training', ['getExercise']),
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
      // in the last slide and not question
      return (
        this.currExercise === this.getExerciseSessions.length - 1 &&
        !this.getExerciseSessions[this.getExerciseSessions.length - 1].__component.includes(
          'question'
        )
      )
    }
  },
  methods: {
    ...utils,
    ...parser,
    ...stepParser,
    ...mapActions('training', ['ActionGetExercise']),
    ...mapActions('exercise', ['ActionUpdateExerciseStepCompleted']),
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
    async onSent (val) {
      val = JSON.parse(JSON.stringify(val))
      if (val.length > 0) {
        //
      }
      if (this.currExercise === this.getExerciseSessions.length - 1) {
        // await this.stepDone()
      }
    },
    async stepDone () {
      if (!this.isStepDone()) {
        // Atualizar o status
        const res = await this.ActionUpdateExerciseStepCompleted({
          id: this.getExercise.id,
          body: {
            completed: true
          }
        })
        if (res) {
          // successs
          this.finishModal()
        }
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
    }
  },
  async created () {
    this.loading = true
    await this.ActionGetExercise(this.$route.params.idSessao)
    // if (this.exercise.sessions.items.length > 0) {
    //   this.currExercise = this.exercise.sessions.items[0]
    // }
    this.loading = false
  }
}

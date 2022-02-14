import { mapActions, mapState, mapMutations } from 'vuex'
import parser from './../../../common/helpers/trainingParser'
import Button from '../../../common/components/Button/Button'
import LoadingCircle from '../../../common/components/loadingCircle'
import Tag from '../../../common/components/Tag/Tag'
import FeedbackModal from '../../../common/components/FeedbackModal/FeedbackModal'
import utils from '../../../common/helpers/utils'

const hitIcon = require('../../../assets/images/feedback/shine.svg')

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
    ...mapState('training', ['behavior', 'module', 'slide', 'loadingTrainings']),
    feedbackIcon () {
      return hitIcon
    }
  },
  methods: {
    ...utils,
    ...parser,
    ...mapActions('training', ['ActionGetModule', 'ActionGetSlide', 'ActionGetTraining']),
    ...mapActions('slide', ['ActionUpdateSlideStepCompleted']),
    ...mapMutations('training', ['SET_HAS_HEADER']),
    timeout (ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },
    async onFinish () {
      this.loading = true
      await this.stepDone()
      this.loading = false
      /*
      // Consulta o status
      const stepsUsers = await this.ActionGetStepUser({
        step: this.slide.id,
        type: 'slide'
      })
      if (stepsUsers.length > 0) {
        // Atualizar o status
        await this.ActionUpdateStepUser({
          id: stepsUsers[0].id,
          body: {
            step: this.slide.id,
            type: 'slide',
            status: 'done'
          }
        })
      } else {
        // Criar quando não tem
        await this.ActionCreateStepUser({
          step: this.slide.id,
          type: 'slide',
          status: 'done'
        })
      }
      */
    },
    trainingDetailsHandler () {
      this.goBack()
      /*
      this.$router.push({
        name: 'ModuleDetails',
        params: { id: this.behavior.id, idModulo: this.module.id }
      })
      */
    },
    goBack () {
      this.$router.go(-1)
    },
    isEmptyObject (obj) {
      return obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype
    },
    isStepDone () {
      if (!this.isEmptyObject(this.video)) {
        return this.slide.completed
      }
    },
    showFeedbackModal () {
      this.hasFeedback = true
    },
    async stepDone () {
      if (!this.isStepDone()) {
        // Atualizar o status
        const res = await this.ActionUpdateSlideStepCompleted({
          id: this.slide.id,
          body: {
            completed: true
          }
        })
        if (res) {
          // successs
          this.showFeedbackModal()
        }
      } else {
        this.showFeedbackModal()
      }
    }
  },
  beforeRouteLeave (to, from, next) {
    this.SET_HAS_HEADER(true)
    next()
  },
  async created () {
    await this.ActionGetSlide(this.$route.params.idSessao)
  },
  async mounted () {
    this.SET_HAS_HEADER(false)
    // await this.ActionGetTraining(this.$route.params.id)
    // await this.ActionGetModule(this.$route.params.idModulo)
  }
}

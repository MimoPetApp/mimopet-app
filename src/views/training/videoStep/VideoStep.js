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
      hasFeedback: false,
      stepStatus: null
    }
  },
  computed: {
    ...mapState('training', ['behavior', 'module', 'video', 'loadingTrainings']),
    feedbackIcon () {
      return hitIcon
    }
  },
  methods: {
    ...utils,
    ...parser,
    ...mapActions('training', ['ActionGetModule', 'ActionGetVideo', 'ActionGetTraining']),
    ...mapActions('progress', [
      'ActionGetStepUser',
      'ActionCreateStepUser',
      'ActionUpdateStepUser'
    ]),
    ...mapMutations('training', ['SET_HAS_HEADER']),
    timeout (ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },
    async onFinish () {
      this.loading = true
      await this.stepDone()
      this.hasFeedback = true
      this.loading = false
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
    async getStepStatus () {
      this.stepStatus = await this.ActionGetStepUser({
        step: this.video.id,
        type: 'video'
      })
    },
    goBack () {
      this.$router.go(-1)
    },
    async stepDone () {
      if (this.isStepDoing()) {
        /** Atualizar o status */
        await this.ActionUpdateStepUser({
          id: this.stepsUsers[0].id,
          body: {
            step: this.video.id,
            type: 'video',
            status: 'done'
          }
        })
      }
    },
    isStepDoing () {
      return this.stepStatus[0].status === 'doing'
    },
    async setStepToDoing () {
      // if is first time to do
      if (this.stepStatus.length === 0) {
        await this.ActionCreateStepUser({
          step: this.video.id,
          type: 'video',
          status: 'doing'
        })
      }
    }
  },
  beforeRouteLeave (to, from, next) {
    this.SET_HAS_HEADER(true)
    next()
  },
  async created () {
    await this.getStepStatus()
    await this.setStepToDoing()
  },
  async mounted () {
    this.SET_HAS_HEADER(false)
    // await this.ActionGetTraining(this.$route.params.id)
    // await this.ActionGetModule(this.$route.params.idModulo)
    await this.ActionGetVideo(this.$route.params.idSessao)
  }
}

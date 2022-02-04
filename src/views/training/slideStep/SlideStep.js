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
  data() {
    return {
      currSlide: 0,
      loading: false,
      hasFeedback: false
    }
  },
  computed: {
    ...mapState('training', ['behavior', 'module', 'slide', 'loadingTrainings']),
    feedbackIcon() {
      return hitIcon
    }
  },
  methods: {
    ...utils,
    ...parser,
    ...mapActions('training', ['ActionGetModule', 'ActionGetSlide', 'ActionGetTraining']),
    ...mapActions('progress', ['ActionGetStepUser', 'ActionCreateStepUser', 'ActionUpdateStepUser']),
    ...mapMutations('training', ['SET_HAS_HEADER']),
    timeout(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },
    async onFinish() {
      this.loading = true

      /** Consulta o status */
      const stepsUsers = await this.ActionGetStepUser({
        step: this.slide.id,
        type: 'slide'
      })
      if (stepsUsers.length > 0) {
        /** Atualizar o status */
        await this.ActionUpdateStepUser(
          {
            id: stepsUsers[0].id,
            body: {
              step: this.slide.id,
              type: 'slide',
              status: 'done'
            }
          }
        )
      } else {
        /** 
         * Criar quando não tem
         * 
         *  */
        await this.ActionCreateStepUser({
          step: this.slide.id,
          type: 'slide',
          status: 'done'
        })
      }
      this.hasFeedback = true
      this.loading = false
    },
    trainingDetailsHandler() {
      this.$router.go(-1)
      /*
      this.$router.push({
        name: 'ModuleDetails',
        params: { id: this.behavior.id, idModulo: this.module.id }
      })
      */
    }
  },
  beforeRouteLeave(to, from, next) {
    this.SET_HAS_HEADER(true)
    next()
  },
  async mounted() {
    this.SET_HAS_HEADER(false)
    // await this.ActionGetTraining(this.$route.params.id)
    // await this.ActionGetModule(this.$route.params.idModulo)
    await this.ActionGetSlide(this.$route.params.idSessao)
  }
}

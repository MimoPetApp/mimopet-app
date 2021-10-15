import { mapActions } from 'vuex'
import Logo from '../../../common/components/logo'
import Title from '../../../common/components/title'
import Button from '../../../common/components/Button/Button'
import TextField from '../../../common/components/TextField/TextField'
import AuthContainer from '../../../common/components/AuthContainer'
import LoadingCircle from '../../../common/components/loadingCircle'
import FeedbackModal from '../../../common/components/FeedbackModal/FeedbackModal.vue'
import SupportModal from '../../../common/components/Modal/SupportModal/SupportModal'

const emailIcon = require('../../../assets/images/feedback/aim.svg')

export default {
  name: 'ForgetPassword',
  components: {
    Title,
    AuthContainer,
    LoadingCircle,
    TextField,
    Button,
    Logo,
    FeedbackModal,
    SupportModal
  },
  data () {
    return {
      form: {
        identifier: '',
        password: '',
        confirmPassword: ''
      },
      showPassword: false,
      loading: false,
      feedbackModalStatus: false,
      supportModalStatus: false,
      feedbackModalTitle: 'Senha alterada',
      feedbackModalSubtitle: 'Entre novamente na sua conta com a nova senha.',
      feedbackModalButtonText: 'Entrar'
    }
  },
  computed: {
    formIsValid () {
      return this.form.password === this.form.confirmPassword
    },
    feedbackIcon () {
      return emailIcon
    }
  },
  beforeMount () {},
  methods: {
    ...mapActions('auth', ['ActionLogin']),
    nextStep () {},
    async onSubmitPassword () {
      if (!this.formIsValid) return
      this.loading = true
      // await this.ActionLogin(this.form)
      this.showFeedbackModal()
      this.loading = false
    },
    async wait (ms) {
      return new Promise(resolve => {
        setTimeout(resolve, ms)
      })
    },
    showFeedbackModal () {
      this.feedbackModalStatus = true
    },
    showSupportModal () {
      this.supportModalStatus = true
    },
    hideSupportModal () {
      this.supportModalStatus = false
    },
    goToLogin () {
      this.$router.push({
        name: 'acesso'
      })
    }
  }
}

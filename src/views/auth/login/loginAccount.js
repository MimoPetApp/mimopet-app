import { mapActions } from 'vuex'
import Logo from '../../../common/components/logo'
import Title from '../../../common/components/title'
import Button from '../../../common/components/Button/Button'
import TextField from '../../../common/components/TextField/TextField'
import AuthContainer from '../../../common/components/AuthContainer'
import LoadingCircle from '../../../common/components/loadingCircle'
import SupportModal from '../../../common/components/Modal/SupportModal/SupportModal'

export default {
  name: 'LoginAccount',
  components: {
    Title,
    AuthContainer,
    LoadingCircle,
    TextField,
    Button,
    Logo,
    SupportModal
  },
  data () {
    return {
      form: {
        identifier: '',
        password: ''
      },
      showPassword: false,
      loading: false,
      supportModalStatus: false
    }
  },
  computed: {
    formIsValid () {
      return this.form.identifier.length !== 0 && this.form.password.length >= 8
    }
  },
  beforeMount () {},
  methods: {
    ...mapActions('auth', ['ActionLogin']),
    nextStep () {},
    async onSubmitEmail () {
      if (!this.formIsValid) return
      this.loading = true
      const res = await this.ActionLogin(this.form)
      this.loading = false
      if (res) {
        this.$router.push({ name: 'home' })
      }
    },
    async wait (ms) {
      return new Promise(resolve => {
        setTimeout(resolve, ms)
      })
    },
    goToForgetPassword () {
      this.$router.push({
        name: 'ForgetPassword'
      })
    },
    hideSupportModal () {
      this.supportModalStatus = false
    },
    showSupportModal () {
      this.supportModalStatus = true
    }
  }
}

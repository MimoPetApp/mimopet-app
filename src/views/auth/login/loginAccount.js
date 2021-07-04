import { mapActions } from 'vuex'
import Logo from '../../../common/components/logo'
import Title from '../../../common/components/title'
import MainButton from '../../../common/components/mainButton'
import Container from '../../../common/components/container'
import LoadingCircle from '../../../common/components/loadingCircle'

export default {
  name: 'LoginAccount',
  components: {
    Title,
    MainButton,
    Container,
    LoadingCircle,
    Logo
  },
  data() {
    return {
      form: {
        identifier: '',
        password: ''
      },
      showPassword: false,
      showEmailLabel: true,
      showPasswordLabel: true,
      loading: false
    }
  },
  computed: {
    formIsValid() {
      return this.form.identifier.length !== 0 && this.form.password.length >= 8
    }
  },
  beforeMount() {},
  methods: {
    ...mapActions('auth', ['ActionLogin']),
    nextStep() {},
    async onSubmitEmail() {
      if (!this.formIsValid) return
      this.loading = true
      await this.ActionLogin(this.form)
      this.loading = false
    },
    async wait(ms) {
      return new Promise(resolve => {
        setTimeout(resolve, ms)
      })
    }
  }
}

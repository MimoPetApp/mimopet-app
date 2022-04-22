import Button from '../../../common/components/Button/Button.vue'
import TextField from '../../../common/components/TextField/TextField'
import Response from '../../../common/components/Response/Response'
import { mapActions, mapGetters } from 'vuex'

const checkSuccess = require('../../../assets/images/feedback/check_success.svg')
const lockOpen = require('../../../assets/images/feedback/lock_open.svg')

export default {
  name: 'Token',
  components: { Button, TextField, Response },
  props: {
    recipient: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      errorMessage: '',
      response: {
        status: false,
        title: '',
        subtitle: '',
        buttonText: '',
        action: () => {},
        subAction: () => {},
        icon: null
      },
      form: {
        password: '',
        confirmPassword: ''
      }
    }
  },
  computed: {
    ...mapGetters('auth', ['getRecoverConfirmToken']),
    getLockOpen () {
      return lockOpen
    },
    getCheckSuccess () {
      return checkSuccess
    }
  },
  methods: {
    ...mapActions('auth', ['ActionUpdateUserPassword']),
    getCode () {
      return this.inputTextFields.reduce((acc, curr) => {
        return acc + curr.value
      }, '')
    },
    onlyNumber ($event) {
      const keyCode = $event.keyCode ? $event.keyCode : $event.which
      if (keyCode < 48 || keyCode > 57) {
        $event.preventDefault()
      }
    },
    async onSubmitPassword () {
      const res = await this.updateUserPassword()
      if (res) {
        this.setRecoverSucces()
      } else {
        this.errorMessage = 'error'
      }
    },
    async updateUserPassword () {
      const params = {
        password: this.form.password,
        token: this.getRecoverConfirmToken
      }
      let res = await this.ActionUpdateUserPassword(params)
      res = true
      return res
    },
    setRecoverSucces () {
      this.response = {
        status: true,
        title: 'Senha alterada com sucesso',
        subtitle: 'Tente entrar na sua conta utilizando a nova senha',
        buttonText: 'Ir para login',
        action: () => {
          this.goToHome()
        },
        icon: checkSuccess
      }
    },
    goToPetRegister () {
      this.$router.push({ name: 'PetRegister' })
    },
    goToHome () {
      this.$router.push({ name: 'home' })
    },
    goToChangePassword () {
      this.$router.push({ name: 'ChangePassword' })
    }
  }
}

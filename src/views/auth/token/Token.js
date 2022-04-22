import Button from '../../../common/components/Button/Button.vue'
import TextField from '../../../common/components/TextField/TextField'
import Response from '../../../common/components/Response/Response'
import { mapActions, mapGetters } from 'vuex'

const checkSuccess = require('../../../assets/images/feedback/check_success.svg')
const star = require('../../../assets/images/feedback/star.svg')

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
      inputTextFields: [
        {
          value: '',
          label: '-',
          error: false
        },
        {
          value: '',
          label: '-',
          error: false
        },
        {
          value: '',
          label: '-',
          error: false
        },
        {
          value: '',
          label: '-',
          error: false
        }
      ],
      inputTextPlaceholder: '-',
      errorMessage: '',
      response: {
        status: false,
        title: '',
        subtitle: '',
        buttonText: '',
        action: () => {},
        subAction: () => {},
        icon: null
      }
    }
  },
  computed: {
    ...mapGetters('auth', ['getUser', 'getSendToken']),
    getCheckSuccess () {
      return checkSuccess
    }
  },
  methods: {
    ...mapActions('auth', ['ActionConfirmToken', 'ActionRecoverConfirmToken']),
    formatInput (val, index) {
      // only number
      this.inputTextFields[index].value = val.target._value.replace(/[^0-9]/g, '')
    },
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
    isFieldEmpty () {
      let isEmpty = false
      this.inputTextFields.forEach(input => {
        if (!input.value) {
          input.error = true
          isEmpty = true
        }
      })
      return isEmpty
    },
    async onClick () {
      if (this.isFieldEmpty()) {
        this.errorMessage = 'Preencha todos os campos!'
      } else {
        this.errorMessage = ''
        let res = await this.confirmToken()
        res = true
        if (res) {
          if (this.isFromCreateUser()) {
            this.setCreateAccountSuccess()
          } else {
            // From Recover Password
            this.goToChangePassword()
          }
        } else {
          this.errorMessage = 'error'
        }
      }
    },
    isFromCreateUser () {
      return this.$route.params.from.includes('criar')
    },
    showChangePassword () {},
    async confirmToken () {
      const params = {
        email: this.getSendToken.email,
        code: this.getCode()
      }
      let res
      if (this.isFromCreateUser()) {
        res = await this.ActionConfirmToken(params)
      } else {
        res = await this.ActionRecoverConfirmToken(params)
      }
      return res
    },
    setCreateAccountSuccess () {
      this.response = {
        status: true,
        title: 'Conta criada com sucesso',
        subtitle: 'Adicione o perfil de seus pets para começar a utilzar os treinos',
        subButtonText: 'Criar perfil do pet',
        buttonText: 'Acessar minha página',
        subAction: () => {
          this.goToPetRegister()
        },
        action: () => {
          this.goToHome()
        },
        icon: star
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

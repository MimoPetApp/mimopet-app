/* eslint-disable no-useless-escape */
import { mapActions, mapGetters, mapState } from 'vuex'
import AuthContainer from '../../../common/components/AuthContainer'
import Ask from '../../../common/components/Ask'
import LoadingCircle from '../../../common/components/loadingCircle'
import Button from '../../../common/components/Button/Button'
import TextField from '../../../common/components/TextField/TextField'
import ButtonCheckboxGroup from '../../../common/components/ButtonCheckboxGroup'
import utils from '../../../common/helpers/utils'

export default {
  name: 'CreateAccount',
  components: {
    AuthContainer,
    LoadingCircle,
    Ask,
    Button,
    TextField,
    ButtonCheckboxGroup
  },
  data() {
    return {
      showError: {
        email: false,
        password: false
      },
      form: {
        username: '',
        email: '',
        password: '',
        gender: '',
        birthday: ''
      },
      pattern: {
        email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\.\,\+\_])(?=.{8,})/,
        name: /^(?=.{3,})/
      },
      genderOptions: [
        {
          label: 'Mãe de pet',
          value: 'FEMALE',
          isCorrect: false
        },
        {
          label: 'Pai de pet',
          value: 'MALE',
          isCorrect: false
        },
        {
          label: 'Não binário',
          value: 'NONBINARY',
          isCorrect: false
        }
      ],
      step: 1,
      maxStep: 7,
      loading: false
    }
  },
  computed: {
    ...mapState('auth', ['terms']),
    ...mapGetters('auth', ['getSendToken']),
    emailIsValid() {
      return this.validateField(this.form.email, this.pattern.email)
    },
    passwordIsValid() {
      return this.validateField(this.form.password, this.pattern.password)
    },
    nameIsValid() {
      return this.validateField(this.form.username, this.pattern.name)
    },
    genderIsValid() {
      return this.form.gender !== ''
    },
    birthdayIsValid() {
      return this.form.birthday.length === 10 && this.userAge >= 18
    },
    userAge() {
      if (this.form.birthday.length === 10) {
        const [day, month, year] = this.form.birthday.split('-')
        return this._calculateAge(new Date(year, month, day))
      }
      return 0
    }
  },
  beforeMount() {},
  async mounted() {
    await this.ActionGetTermsOfUse()
  },
  methods: {
    ...utils,
    ...mapActions('auth', ['ActionGetTermsOfUse', 'ActionCreateAccount', 'ActionSendToken']),
    nextStep() {
      if (this.step < this.maxStep) this.step += 1
    },
    previousStep() {
      if (this.step > 1) this.step -= 1
      else this.hubHandler()
    },
    hubHandler() {
      this.$router.push({ name: 'hub' })
    },
    genderOptionsHandler(field, eventData) {
      if (field === 'gender') {
        this.form.gender = eventData[0].value
      }
    },
    validateField(field, rule) {
      if (field && rule) return rule.test(field)
      else return false
    },
    onSubmitEmail() {
      if (!this.emailIsValid) return
      this.nextStep()
    },
    onSubmitPassword() {
      if (this.passwordIsValid) {
        this.nextStep()
      }
    },
    onSubmitName() {
      if (!this.nameIsValid) return
      this.nextStep()
    },
    onSubmitBirthDate() {
      if (!this.birthdayIsValid) return
      this.nextStep()
    },
    async onSubmitGender() {
      if (!this.genderIsValid) return
      await this.submitNewUser()
    },
    async submitNewUser() {
      this.loading = true
      this.form.birthday = this._noMask(this.form.birthday)
      const created = await this.ActionCreateAccount(this.form)
      if (created) {
        this.$router.push({
          name: 'TokenConfirm',
          params: { from: 'criar' }
        })
      }
      this.loading = false
    }
  }
}

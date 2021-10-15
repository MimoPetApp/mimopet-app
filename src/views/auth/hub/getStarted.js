import Title from '../../../common/components/title'
import Logo from '../../../common/components/logo'
import Button from '../../../common/components/Button/Button'
import AuthContainer from '../../../common/components/AuthContainer'
import SupportModal from '../../../common/components/Modal/SupportModal/SupportModal'

export default {
  data () {
    return {
      supportModalStatus: false
    }
  },
  components: {
    Title,
    Logo,
    Button,
    AuthContainer,
    SupportModal
  },
  methods: {
    loginHandler () {
      this.$router.push({ name: 'acesso' })
    },
    registerHandler () {
      this.$router.push({ name: 'criar' })
    },
    showSupportModal () {
      this.supportModalStatus = true
    },
    hideSupportModal () {
      this.supportModalStatus = false
    },
    goToForgetPassword () {
      this.$router.push({
        name: 'ForgetPassword'
      })
    }
  }
}

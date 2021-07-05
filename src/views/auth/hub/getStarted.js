import Title from '../../../common/components/title'
import Logo from '../../../common/components/logo'
import MainButton from '../../../common/components/mainButton'
import AuthContainer from '../../../common/components/AuthContainer'
export default {
  components: {
    Title,
    Logo,
    MainButton,
    AuthContainer
  },
  methods: {
    loginHandler() {
      this.$router.push({ name: 'acesso' })
    }
  }
}

import Title from '../../../common/components/title'
import Logo from '../../../common/components/logo'
import Button from '../../../common/components/Button/Button'
import AuthContainer from '../../../common/components/AuthContainer'
export default {
  components: {
    Title,
    Logo,
    Button,
    AuthContainer
  },
  methods: {
    loginHandler() {
      this.$router.push({ name: 'acesso' })
    }
  }
}

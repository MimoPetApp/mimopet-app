import { mapActions } from 'vuex'
export default {
  name: 'Logout',
  mounted() {
    this.ActionLogoutUser()
  },
  methods: {
    ...mapActions('auth', ['ActionLogoutUser'])
  }
}

<template>
  <div>...Saindo</div>
</template>

<script>
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
</script>

<style></style>

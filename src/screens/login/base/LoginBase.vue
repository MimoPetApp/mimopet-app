<template>
  <div class="login">
    <div class="logo ml-4 pt-3">
      <h2 class="m-0">mimo</h2>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'LoginBackground'
}
</script>
<style lang="scss" scoped>
.login {
  background: var(--main-alternate);
  min-height: 100vh;
  &.logo {
  }
}
</style>

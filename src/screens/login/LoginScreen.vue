<template>
  <div>
    <div class="row bg-utilities-disabled p-1">
      <div class="col text-center">
        <Button color="secondary-bordless" label="Suporte" icon="mail" disabled />
      </div>
      <div class="col text-center">
        <Button color="secondary-bordless" label="Esqueci a senha" disabled />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../../common/components/Button.vue'

export default {
  name: 'LoginScreen',
  components: {
    Button
  }
}
</script>
<style lang="scss" scoped>
</style>

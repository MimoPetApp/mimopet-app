<template>
  <div class="loading-content">
    <QSpinner v-bind="$attrs" />
    <!--<q-img src="~assets/images/wait.gif" class="loading-img" />-->
  </div>
</template>

<script>
import { QSpinner } from 'quasar'
export default {
  name: 'LoadingCircle',
  components: { QSpinner }
}
</script>

<style lang="scss" scoped>
$img-size: 14vh;

.loading-content {
  min-height: calc(100vh - 250px);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.loading-img {
  width: $img-size;
  margin-right: 5vw;
  margin-top: 2vh;
}

.bg-primary-filled {
  color: var(--main-background) !important;
  background: var(--main-primary) !important;
  &:disabled {
    color: var(--utilities-alternate) !important;
    background: var(--utilities-border) !important;
  }
  &:active {
    background: var(--main-secondary) !important;
  }
}
</style>

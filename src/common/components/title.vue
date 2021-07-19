<template>
  <div class="section-title">
    <h3 class="text-weight-bolder">
      {{ text }}
    </h3>
    <h5 v-if="subtitle" class="mt-2">
      {{ subtitle }}
    </h5>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    text: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.section-title {
  max-width: 100%;
  color: var(--main-background);
}
</style>

<template>
  <div class="title-container">
    <h1 class="mimo-text mimo-text__h1">
      {{ text }}
    </h1>
    <h2 v-if="subtitle" class="mimo-text text-weight-bold mimo-text__subtitle">
      {{ subtitle }}
    </h2>
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
  data () {
    return {}
  }
}
</script>

<style>
.title-container {
  max-width: 73vw;
}

.section-subtitle {
  max-width: 70vw;
}
</style>

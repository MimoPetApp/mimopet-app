<template>
  <div id="box" style="width: 300px">
    <q-card class="my-card">
      <q-video src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />
    </q-card>
  </div>
</template>
<script>

export default {
  setup() {}
}

</script>

<style lang="sass" scoped>
.my-video
  width: 100%
  max-width: 300px

  #box
    font-family: "customfont600"
    font-weight: 600
    font-size: 2.1vh
    text-align: center
    margin: 2 1 3vh 0
</style>

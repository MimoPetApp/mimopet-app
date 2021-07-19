<template>
  <div id="box" class="my-video">
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
.my-card
  width: 100%

  #box
    font-family: "customfont600"
    font-weight: 600
    font-size: 2.1vh
    text-align: center
    margin: 2 1 3vh 0
</style>

<template>
  <div id="box" style="width: 300px">
    <q-card class="my-card text-black" align="center">
      <q-card-section>
        <div class="text-h6">Sentar ao ser pedido</div>
        <div class="text-subtitle2">10 passos</div>
       </q-card-section>
      <q-video
        class="my-video"
        src="https://www.youtube.com/embed/k3_tw44QsZQ"
      />
    </q-card>

    <q-btn-group>
      <q-btn icon='visibility' label="Dia 1" stack no-caps />
      <q-btn icon="visibility" label="Dia 2" stack no-caps/>
      <q-btn icon="visibility" label="Dia 3" stack no-caps/>
      <q-btn icon="visibility" label="Dia 4" stack no-caps/>

    </q-btn-group>

    <q-btn-group>
      <q-btn icon='visibility' label="Dia 5" stack no-caps />
      <q-btn icon="visibility" label="Dia 6" stack no-caps/>
      <q-btn icon="visibility" label="Dia 7" stack no-caps/>
      <q-btn icon="visibility" label="Dia 8" stack no-caps/>

    </q-btn-group>

  </div>
</template>

<script>
export default {
  setup() {}
}

</script>

<style lang="sass" scoped>
.my-video
  width: 95%
  max-width: 250px

  #box
    font-family: "customfont600"
    font-weight: 600
    font-size: 2.1vh
    text-align: center
    margin: 2 1 3vh 0
</style>

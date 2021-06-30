<template>
  <div id="box" style="width: 300px">
    <q-card class="my-card bg-orange text-black" align="center">
      <q-card-section>
        <div class="text-h6">Técnica coleira imaginária</div>
        <div class="text-subtitle2">Passo 1 de 10</div>

        <q-separator dark inset />
      </q-card-section>
      <q-icon name="map" class="text-teal" style="font-size: 3.1em;"
      @click="$router.push({ name: 'full' })" />
      <q-video
        class="my-video"
        src="https://drive.google.com/file/d/1x2-bV6OjL8wxY_UId44Soa6TMZux9yZS/view"
      />
    </q-card>

    <q-card align="center">
      <q-btn
        color="white"
        text-color="deep-orange"
        align="center"
        glossy
        label="Finalizar etapa"
      />
    </q-card>
  </div>
</template>


<script>
export default {
  setup() {},
};
</script>

<style lang="sass" scoped>
.my-video
  width: 80%
  max-width: 250px

  #box
    font-family: "customfont600"
    font-weight: 600
    font-size: 2.1vh
    text-align: center
    margin: 2 1 3vh 0
</style>
<template>
  <div id="q-app">
    <router-view></router-view>
    <box-search />
  </div>
</template>
<script>
import boxSearch from "./components/trainning/trainingPetsCall.vue";

export default {
  name: "App",

  components: { boxSearch },
};
</script>
<style>
.q-app {
  margin: auto;
  margin-top: 10%;
  margin-left: 10%;
}
</style>
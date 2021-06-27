<template>
  <div class="logo-container row justify-center items-center">
    <q-img src="~assets/images/mimoicon.svg" class="logo" />
  </div>
</template>

<script>
export default {
  name: "Logo",
  props: {},
  data() {
    return {};
  }
};
</script>

<style lang="scss">
$logo-size: 14vh;
$logo-container: 27vh;

.logo {
  width: $logo-size;
  margin-right: 5vw;
  margin-top: 2vh;
}

.logo-container {
  width: $logo-container;
  height: $logo-container;
  background: url("~assets/get_started/vector_outline_45.svg");
  background-clip: border-box;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>

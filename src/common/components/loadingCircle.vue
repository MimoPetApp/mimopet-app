<template>
  <div class="loading-content">
    <q-img src="~assets/images/loading.gif" class="loading-img" />
  </div>
</template>

<script>
export default {
  name: "LoadingCircle"
};
</script>

<style lang="scss">
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
</style>

<template>
  <div>
    <router-view :key="$route.path"></router-view>
  </div>
</template>
<script>
export default {
  name: 'Obedience'
}
</script>

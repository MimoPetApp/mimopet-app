<template>
<div>
<router-view />
<boxSearch />
</div>
</template>
<script>
import { defineComponent } from 'vue'
import boxSearch from '../src/views/pets/petTrainning/trainingPet.vue'
export default defineComponent({
  name: 'App',
  components: { boxSearch }
})
</script>

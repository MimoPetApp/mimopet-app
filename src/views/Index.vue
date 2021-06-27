<template>
  <q-page class="q-ma-sm">
    <div class="text-primary text-h3 text-weight-medium">Busque locais pet friendly</div>
    <q-input v-model="text" class="q-mt-md" filled>
      <template v-slot:prepend> <q-icon name="search" /> </template
    ></q-input>
  </q-page>
</template>

<script>
// import petsList from "../common/components/pets/petsList";
export default {
  name: 'PageIndex',
  data() {
    return {
      text: ''
    }
  }
  // components:{
  //   petsList
  // }
}
</script>

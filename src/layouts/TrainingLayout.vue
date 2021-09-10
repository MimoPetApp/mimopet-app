<template>
  <q-layout view="lHh Lpr lFf" class="training__container">
    <q-header v-if="hasHeader" class="bg-main-background">
      <q-toolbar>
        <q-btn flat round dense icon="arrow_back" to="/" text-color="utilities-alternate" />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'TrainingLayout',
  computed: {
    ...mapState('training', ['hasHeader'])
  }
}
</script>
<style lang="scss">
.training {
  &__container {
    background: var(--main-background);
  }
}
</style>

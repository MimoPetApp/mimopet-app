<template>
  <q-layout view="lHh Lpr lFf" class="training__container">
    <q-header v-if="hasHeader" class="bg-main-background">
      <q-toolbar>
        <q-btn flat round dense icon="arrow_back" to="/" text-color="utilities-alternate" />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <EvaluateTraining :content="modalEvaluateTraining" />
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from 'vuex'
import EvaluateTraining from '../common/components/Modal/EvaluateTraining/EvaluateTraining'
export default {
  name: 'TrainingLayout',
  components: {
    EvaluateTraining
  },
  computed: {
    ...mapState('training', ['hasHeader', 'modalEvaluateTraining'])
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

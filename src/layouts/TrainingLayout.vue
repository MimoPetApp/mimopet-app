<template>
  <q-layout view="lHh Lpr lFf" class="training__container">
    <q-header v-if="hasHeader" class="bg-main-background">
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="arrow_back"
          @click="back()"
          text-color="utilities-alternate"
        />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <EvaluateTraining :content="modalEvaluateTraining" :onHide="onHideModalEvaluateTraining" />
      <ActionModal
        :content="modalTrainingLimitExceeded"
        :onHide="onHideModalTrainingLimitExceeded"
      />
      <ActionModal :content="modalCancelTraining" :onHide="onHideModalCancelTraining" />
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import EvaluateTraining from '../common/components/Modal/EvaluateTraining/EvaluateTraining'
import ActionModal from '../common/components/Modal/ActionModal/ActionModal'
export default {
  name: 'TrainingLayout',
  components: {
    EvaluateTraining,
    ActionModal
  },
  computed: {
    ...mapState('training', [
      'hasHeader',
      'modalEvaluateTraining',
      'modalTrainingLimitExceeded',
      'modalCancelTraining'
    ])
  },
  methods: {
    ...mapActions('training', [
      'ActionModalEvaluateTraining',
      'ActionModalTrainingLimitExceeded',
      'ActionModalCancelTraining'
    ]),
    onHideModalEvaluateTraining() {
      this.ActionModalEvaluateTraining({ modal: false, data: this.modalEvaluateTraining.data })
    },
    onHideModalTrainingLimitExceeded() {
      this.ActionModalTrainingLimitExceeded({
        modal: false,
        data: this.modalTrainingLimitExceeded.data
      })
    },
    onHideModalCancelTraining() {
      this.ActionModalCancelTraining({ modal: false, data: this.modalCancelTraining.data })
    },
    hasHistory() {
      return window.history.length > 2
    },
    isFirstLevelPath() {
      const path = this.$route.path
      return path.length - path.replaceAll('/', '').length === 1
    },
    back() {
      this.isFirstLevelPath() ? this.$router.push('/') : this.$router.go(-1)
    }
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

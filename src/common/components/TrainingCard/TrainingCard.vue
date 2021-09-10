<template>
  <q-card v-if="train" flat class="train-card column justify-end mb-4" @click="onClick">
    <div class="train-card__image">
      <q-img src="~assets/images/vectors/girlPet.svg" width="209px" fit="scale-down" />
    </div>
    <TrainingCardBase :train="train" />
  </q-card>
</template>

<script>
import TrainingCardBase from '../../../common/components/TrainingCardBase/TrainingCardBase'

export default {
  name: 'TrainingCard',
  components: { TrainingCardBase },
  props: {
    train: {
      type: Object,
      default: null
    }
  },
  data() {
    return {}
  },
  methods: {
    onClick() {
      /*
      this.$router.push({
        name: 'behaviorDetails',
        params: { id: this.train.id }
      })
      */
    }
  }
}
</script>

<style lang="scss">
.train-card {
  border-radius: 24px;
  background: var(--status-warning);
  padding: var(--spacing-3) var(--spacing-2);
  height: 312px;

  &__image {
    position: absolute;
    top: var(--spacing-3);
    right: var(--spacing-1);
  }
}
</style>

<template>
  <q-card
    v-if="train"
    flat
    class="train-card column justify-end mb-4"
    :style="{
      backgroundImage: `url('${_getImageUrl(train.thumbnail)}')`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top center',
      backgroundSize: 'cover'
    }"
    @click="onClick"
  >
    <!--
    <div class="train-card__image">
      <q-img src="~assets/images/vectors/girlPet.svg" width="209px" fit="scale-down" />
    </div>
    -->
    <TrainingCardBase :train="train" />
  </q-card>
</template>

<script>
import TrainingCardBase from '../../../common/components/TrainingCardBase/TrainingCardBase'
import utils from '../../../common/helpers/utils'

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
    ...utils,
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

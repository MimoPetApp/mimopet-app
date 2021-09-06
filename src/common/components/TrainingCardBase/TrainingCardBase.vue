<template>
  <q-card v-if="train" flat class="train-card-base">
    <q-item>
      <q-item-section>
        <p class="train-card-base__steps">{{ train.steps.length }} {{ ` de 10 passos` }}</p>
      </q-item-section>

      <q-item-section side>
        <Tag
          :label="parseTrainingCategory(train.category)"
          :color="parseTrainingCategoryColor(train.category)"
        />
      </q-item-section>
    </q-item>
    <q-item>
      <q-item-section>
        <h4 class="train-card-base__title">{{ train.title }}</h4>
        <q-linear-progress
          size="12px"
          :value="train.steps.length / 10"
          color="main-highlight"
          track-color="utilities-light"
          class="train-card-base__progress mt-1"
        />
      </q-item-section>
    </q-item>
  </q-card>
</template>

<script>
import parser from '../../helpers/trainingParser'
import Tag from '../../../common/components/Tag/Tag'

export default {
  name: 'TrainingCardBase',
  components: { Tag },
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
    ...parser
  }
}
</script>

<style lang="scss">
.train-card-base {
  border-radius: 22px !important;
  background: var(--main-background);
  padding: var(--spacing-2) var(--spacing-1);

  &__steps {
    margin: 0;
    padding: 0;
    color: var(--utilities-alternate);
    font-size: var(--font-size-3);
    line-height: calc(var(--font-size-3) + 0.5rem);
    font-weight: 500;
  }

  &__title {
    margin: 0;
    padding: 0;
    color: var(--main-alternate);
    font-size: var(--font-size-4);
    line-height: calc(var(--font-size-4) + 0.5rem);
    font-weight: 800;
  }

  &__progress {
    border-radius: 22px;
  }
}
</style>

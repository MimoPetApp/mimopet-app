<template>
  <q-card v-if="train" flat class="explore-card mb-4" @click="onClick">
    <q-item>
      <q-item-section>
        <q-btn class="explore-card__rating" dense flat>
          <div class="row justify-between flex-center">
            <q-icon
              name="star"
              class="text-status-warning mr-1"
              :style="{ opacity: train.rating / 5 }"
              size="sm"
            />
            {{ train.rating.toFixed(1) }}
          </div>
        </q-btn>
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
        <p class="explore-card__steps">
          {{ train.trainings.length }} {{ `passo${train.trainings.length > 1 ? 's' : ''}` }}
        </p>
        <h4 class="explore-card__title">{{ train.title }}</h4>
      </q-item-section>
    </q-item>
  </q-card>
</template>

<script>
import parser from './../../helpers/trainingParser'
import Tag from '../../../common/components/Tag/Tag'

export default {
  name: 'ExploreCard',
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
    ...parser,
    onClick() {
      this.$router.push({
        name: 'behaviorDetails',
        params: { id: this.train.id }
      })
    }
  }
}
</script>

<style lang="scss">
.explore-card {
  border-radius: 22px;
  background: var(--main-background);
  padding: var(--spacing-2) var(--spacing-1);

  &__rating {
    background: rgba(185, 197, 203, 0.1);
    width: 70px;
    color: var(--utilities-alternate);
    font-weight: 500;
    font-size: var(--font-size-3);
  }

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
    line-height: calc(var(--font-size-6) + 0.5rem);
    font-weight: 900;
  }
}
</style>

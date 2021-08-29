<template>
  <q-card class="search-box row justify-start items-center p-3">
    <div>
      <h3 class="search-box__label">{{ label }}</h3>
      <div class="mt-2 mb-2">
        <SearchField v-model="query" label="O que aprender?" class="bg-main-background" />
      </div>
      <div class="mt-2">
        <q-btn
          :label="buttonLabel"
          :to="to"
          icon="quiz"
          flat
          no-caps
          text-color="main-background"
          class="search-box__button"
        >
        </q-btn>
      </div>
    </div>
  </q-card>
</template>

<script>
import SearchField from '../../../common/components/SearchField/SearchField'

export default {
  name: 'SearchBox',
  components: {
    SearchField
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    description: {
      type: String
    },
    notificationLabel: {
      type: String,
      default: 'Agendados'
    },
    notification: {
      type: Number,
      default: 0
    },
    to: {
      type: String,
      default: '/behavior'
    },
    buttonLabel: {
      type: String,
      default: 'Ver mais'
    }
  },
  data() {
    return {
      query: ''
    }
  }
}
</script>

<style lang="scss">
.search-box {
  min-height: 300px;
  border-radius: var(--spacing-3) !important;
  background: var(--main-primary);

  &__button {
    background: rgba(255, 255, 255, 0.2);
    font-size: var(--font-size-4);
    font-weight: 100;
    width: 170px;
    border-radius: var(--spacing-1);
    padding: var(--spacing-2);
  }

  &__label {
    font-family: 'customfont700';
    font-size: var(--font-size-6);
    line-height: calc(var(--font-size-6) + 0.25rem);
    font-weight: 500;
    color: var(--main-background);
    margin: 0;
    padding: 0;
  }
}
</style>

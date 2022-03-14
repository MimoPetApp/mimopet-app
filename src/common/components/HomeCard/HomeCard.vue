<template>
  <q-card
    class="home-card__item p-2 pt-4 mt-1 mb-2"
    :style="`background: ${color}`"
    @click="$router.push(to)"
  >
    <div class="row justify-center items-center">
      <h4 class="text-weight-bolder m-0 p-0">{{ label }}</h4>
    </div>
    <div class="row justify-center items-center text-center">
      <p class="text-weight-medium m-0 p-0">{{ description }}</p>
    </div>
    <div class="row justify-center items-center mt-2">
      <q-btn
        :to="to"
        rounded
        flat
        no-caps
        text-color="main-background"
        class="home-card__item--button"
      >
        {{ buttonLabel }}
      </q-btn>
    </div>
    <div class="home-card__item__footer" :style="`background: ${colorAlt}`"></div>
    <svg class="home-card__item__circle" height="50" width="120">
      <ellipse cx="60" cy="60" rx="50" ry="35" fill="#fff" />
    </svg>
  </q-card>
</template>

<script>
export default {
  name: 'HomeCard',
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
    color: {
      type: String,
      default: '#fe7624'
    },
    colorAlt: {
      type: String,
      default: '#fe7624'
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
    return {}
  }
}
</script>

<style lang="scss">
.home-card__item {
  min-height: 250px;
  border-radius: 25px !important;

  &--button {
    background: rgba(255, 255, 255, 0.2);
    z-index: 999;
  }

  &__footer {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 30%;
    width: 100%;
    border-radius: 0 0 25px 25px !important;
  }

  &__circle {
    position: absolute;
    bottom: 0;
    left: calc(50% - 60px);
  }
}

.home-card__item__badge {
  color: var(--colorWhite);
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 0 0 0 15px;
}

.home-card__item__badge--icon {
  font-size: 2.3em;
  color: #ff6160;
  background: var(--colorWhite);
  padding: 0;
  margin: 0;
  border-radius: 50%;
}
</style>

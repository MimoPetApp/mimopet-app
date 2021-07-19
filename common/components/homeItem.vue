<template>
  <q-card
    class="home-card__item q-pa-lg q-mb-lg q-mt-md"
    :style="`background: ${color}`"
    @click="click"
  >
    <div class="row justify-between items-center">
      <h4 class="text-weight-bold mimo-text">{{ label }}</h4>
      <q-badge v-if="notification > 0" class="home-card__item__badge">
        <span class="q-mr-xs">
          {{ `${notification} ${notificationLabel}` }}
        </span>
        <q-icon name="error" class="home-card__item__badge--icon q-ml-xs" />
      </q-badge>
    </div>
    <svg class="home-card__item__circle" height="50" width="120">
      <ellipse cx="60" cy="60" rx="50" ry="35" fill="#fff" />
    </svg>
  </q-card>
</template>

<script>
export default {
  name: 'HomeItem',
  props: {
    label: {
      type: String,
      default: ''
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
    click: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.home-card__item {
  height: 220px;
  border-radius: 25px !important;
}

.home-card__item__circle {
  position: absolute;
  bottom: 0;
  left: calc(50% - 60px);
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

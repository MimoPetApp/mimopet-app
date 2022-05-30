<template>
  <q-card :class="['command', { pointer: !isDisabled }]" :style="`background: ${setBgColor}`">
    <div class="row justify-between items-center">
      <div class="col-6">
        <h4
          :class="[
            'command-title',
            'text-weight-bold',
            'm-0',
            'p-0',
            isDisabled ? 'text-utilities-alternate' : 'main-alternate'
          ]"
        >
          {{ title }}
        </h4>
        <p
          :class="[
            'command-level',
            'text-weight-medium',
            'm-0',
            'p-0',
            isDisabled ? 'text-utilities-alternate' : 'main-alternate'
          ]"
        >
          {{ level }}
        </p>
      </div>
      <div class="col-3 items-center justify-end flex">
        <q-btn
          rounded
          flat
          no-caps
          text-color="utilities-alternate"
          :icon="setIcon"
          :class="setClass"
          to="/treinamentos"
        >
          <span v-if="!isDisabled" class="text-main-alternate badges-amount">{{ badges }}</span>
        </q-btn>
      </div>
    </div>
  </q-card>
</template>

<script>
export default {
  name: 'ObedienceCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    level: {
      type: String,
      default: ''
    },
    badges: {
      type: Number,
      default: 0
    },
    disabled: {
      type: String,
      default: 'Habilitado'
    },
    to: {
      type: String,
      default: '/behavior'
    }
  },
  data() {
    return {}
  },
  computed: {
    setBgColor() {
      let bgColor = ''
      switch (this.level) {
        case 'Básico':
          bgColor = '#4ad5da'
          break

        case 'Intermediário':
          bgColor = '#FFCD5C'
          break

        case 'Avançado':
          bgColor = '#F2A16A'
          break

        default:
          bgColor = '#EEEEF0'
          break
      }
      return bgColor
    },
    setIcon() {
      return this.isDisabled ? 'fas fa-info' : 'workspace_premium'
    },
    setClass() {
      let classes
      if (!this.isDisabled) {
        classes = 'badges flex justify-center items-center'
      } else {
        classes = 'info flex justify-center items-center'
      }
      return classes
    },
    setColor() {
      return this.isDisabled ? 'text-utilities-alternate' : ''
    },
    isDisabled() {
      let status
      switch (this.disabled) {
        case 'Desabilitado':
          status = true
          break
        default:
          status = false
          break
      }
      return status
    }
  },
  methods: {}
}
</script>

<style lang="scss">
.command {
  min-height: 93px;
  border-radius: 16px !important;
  padding: 25px 20px;
  box-shadow: none;

  &-title {
    font-style: normal;
    font-weight: 700;
    font-size: var(--font-size-5);
    line-height: 22px;
    letter-spacing: -0.014em;
    margin-bottom: 4px;
  }

  &-level {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.018em;
  }

  .badges {
    background-color: var(--main-background);
    width: 57px;
    height: 32px;
    border-radius: 100px;
    padding: 0;
    i {
      width: 15px;
      height: 19.33px;
    }
    &-amount {
      margin-left: 6.5px;
      font-weight: 500;
      font-size: var(--font-size-4);
      line-height: 19px;
      letter-spacing: -0.014em;
    }
  }

  .info {
    width: 40px;
    height: 40px;
    background: var(--utilities-disabled);
    border-radius: 100px;
    .fa-info {
      width: 6.41px;
      height: 16px;
      color: var(--utilities-alternate);
    }
  }
}

.pointer {
  cursor: pointer;
}
</style>

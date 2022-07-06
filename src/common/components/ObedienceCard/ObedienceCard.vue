<template>
  <q-card :class="['command', { pointer: !isDisabled }]" :style="`background: ${setBgColor}`">
    <q-card-section class="command__header p-0">
      <div class="row justify-between items-center">
        <div class="col-6">
          <div class="command__text-wrapper">
            <h4
              :class="[
                'command__title',
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
                'command__subtitle',
                'text-weight-medium',
                'm-0',
                'p-0',
                isDisabled ? 'text-utilities-alternate' : 'main-alternate'
              ]"
            >
              {{ subtitle }}
            </p>
          </div>
        </div>
        <div class="col-3 items-center justify-end flex">
          <div class="command__badges">
            <q-badge text-color="utilities-alternate" :class="setClass">
              <q-avatar
                v-if="isDisabled"
                class="badges--info flex justify-center items-center"
                color="utilities-disabled"
                text-color="utilities-alternate"
              >
                <q-img :src="infoIcon" width="6.41px" height="16px" />
              </q-avatar>
              <div v-else class="flex justify-center items-center">
                <q-icon name="workspace_premium" class="badges__icon"></q-icon>
                <span class="text-main-alternate badges__amount">{{ badges }}</span>
              </div>
            </q-badge>
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
const infoIcon = require('../../../assets/images/info-icon.svg')

export default {
  name: 'ObedienceCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    badges: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
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
    infoIcon() {
      return infoIcon
    },
    setBgColor() {
      let bgColor = ''
      switch (this.subtitle) {
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
    setClass() {
      let classes
      if (!this.isDisabled) {
        classes = 'badges flex justify-center items-center'
      } else {
        classes = 'badges--info flex justify-center items-center'
      }
      return classes
    },
    setColor() {
      return this.isDisabled ? 'text-utilities-alternate' : ''
    },
    isDisabled() {
      return this.disabled
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

  &__title {
    font-family: 'customfont700';
    font-style: normal;
    font-weight: 700;
    font-size: var(--font-size-5);
    line-height: 22px;
    letter-spacing: -0.014em;
    margin-bottom: 4px;
  }

  &__subtitle {
    font-family: 'customfont620';
    font-style: normal;
    font-weight: 500;
    font-size: var(--font-size-3);
    line-height: 17px;
    letter-spacing: -0.018em;
  }

  .badges {
    background-color: var(--main-background);
    width: 57px;
    height: 32px;
    border-radius: 100px;
    padding: 0;
    &__icon {
      width: 15px;
      height: 19.33px;
      font-size: var(--font-size-6);
    }
    &__amount {
      font-family: 'customfont620';
      margin-left: 6.5px;
      font-weight: 500;
      font-size: var(--font-size-4);
      line-height: 19px;
      letter-spacing: -0.014em;
    }
    &--info {
      width: 40px;
      height: 40px;
      border-radius: 100px;
      background: var(--utilities-disabled);
    }
  }
}
</style>

<template>
  <q-card class="guideline-card">
    <q-card-section class="guideline-card__header p-0">
      <div class="row justify-between items-center">
        <div class="col-6">
          <div class="guideline-card__text-wrapper">
            <h4 :class="['guideline-card__title', 'text-weight-bold', 'm-0', 'p-0']">
              {{ title }}
            </h4>
            <p :class="['guideline-card__subtitle', 'text-weight-medium', 'm-0', 'p-0']">
              {{ subtitle }} {{ setSubtitleLabel }}
            </p>
          </div>
        </div>
        <div class="col-3 items-center justify-end flex">
          <div class="guideline-card__icon" @click="modalHandler">
            <q-avatar
              class="info-icon flex justify-center items-center"
              color="utilities-disabled"
              text-color="utilities-alternate"
            >
              <q-img :src="infoIcon" width="6.41px" height="16px" />
            </q-avatar>
          </div>
        </div>
      </div>
    </q-card-section>
    <q-card-section class="guideline-card__footer p-0">
      <div class="row justify-center items-center">
        <div class="col-12">
          <div
            class="guideline-card__buttons-wrapper"
            v-for="(button, index) in buttons"
            :key="index"
          >
            <Button
              color="primary-flat"
              class="text-weight-bold guideline-card__button"
              :class="{ 'button-gutter': index > 0 }"
              size="md"
              no-caps
              :label="button.label"
              @click="actionHandler(button)"
            />
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import Button from '../Button/Button.vue'
const infoIcon = require('../../../assets/images/info-icon.svg')

export default {
  name: 'ObedienceGuidelineCard',
  components: {
    Button
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    guide: {
      type: String,
      default: ''
    },
    subtitle: {
      type: Number,
      default: 0
    },
    buttons: {
      type: Array,
      default: null
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
    setSubtitleLabel() {
      return this.subtitle > 1 ? 'execuções' : 'execução'
    },
    infoIcon() {
      return infoIcon
    }
  },
  methods: {
    actionHandler(item) {
      this.$emit('clicked', item)
    },
    modalHandler() {}
  }
}
</script>

<style lang="scss">
.guideline-card {
  box-shadow: 4px 4px 40px rgb(0 0 0 / 10%);
  border-radius: 22px !important;
  display: flex;
  flex-direction: column;
  padding: 24px;
  min-height: 185px;
  background-color: var(--main-background);

  &__title {
    font-family: 'customfont700';
    font-style: normal;
    font-weight: 700;
    font-size: var(--font-size-6);
    line-height: 24px;
    letter-spacing: -0.014em;
    margin-bottom: 4px;
    color: var(--main-alternate);
  }

  &__subtitle {
    font-family: 'customfont620';
    font-style: normal;
    font-weight: 500;
    font-size: var(--font-size-4);
    line-height: 19px;
    letter-spacing: -0.014em;
    color: var(--main-alternate);
  }

  .info-icon {
    width: 40px;
    height: 40px;
    border-radius: 100px;
  }

  &__footer {
    margin-top: 36px;
  }

  &__button {
    width: 100% !important;
  }
  .button-gutter {
    margin-top: 12px;
  }
}
</style>

<template>
  <div class="step-wrapper">
    <QList v-bind="$attrs">
      <QItem clickable v-ripple v-bind="$attrs">
        <QItemSection avatar v-bind="$attrs">
          <QAvatar
            :color="selectColorByType"
            text-color="white"
            icon="play_arrow"
            size="36.8px"
            font-size="22px"
            v-bind="$attrs"
          />
        </QItemSection>
        <QItemSection v-bind="$attrs">
          <QItemLabel v-bind="$attrs">Demonstração de passo</QItemLabel>
          <QItemLabel caption v-bind="$attrs">4 min - Slide</QItemLabel>
        </QItemSection>
      </QItem>
    </QList>
  </div>
</template>

<script>
import { QList, QItem, QItemSection, QAvatar, QItemLabel } from 'quasar'

export const StepTypes = ['slide', 'quizz', 'feedback', 'repetitions', 'video']

export default {
  name: 'Step',
  components: { QList, QItem, QItemSection, QAvatar, QItemLabel },
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String
    },
    type: {
      type: String,
      default: 'slide',
      validate: val => StepTypes.indexOf(val) !== -1
    }
  },
  data() {
    return {}
  },
  computed: {
    selectColorByType() {
      switch (this.type) {
        case 'slide':
          return 'main-alternate'
        case 'quiz':
          return 'status-success'
        case 'feedback':
          return 'utilities-alternate'
        case 'repetitions':
          return 'main-secondary'
        default:
          // video
          return 'main-highlight'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.step-wrapper {
  width: 318px;
  height: 92px;
  padding: 18.4px;
  background: #ffffff;
  box-shadow: 0px 0px 10px 4px rgba(239, 242, 246, 0.25);
  border-radius: 22px;
}
</style>

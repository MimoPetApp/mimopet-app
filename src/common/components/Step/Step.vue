<template>
  <div class="step-wrapper">
    <QList v-bind="$attrs">
      <QItem clickable v-ripple v-bind="$attrs" :to="getStepRouter(step)">
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
          <QItemLabel v-bind="$attrs">{{ step.title }}</QItemLabel>
          <QItemLabel caption v-bind="$attrs">{{ step.duration }} min - {{ step.type }}</QItemLabel>
        </QItemSection>
      </QItem>
    </QList>
  </div>
</template>

<script>
import { QList, QItem, QItemSection, QAvatar, QItemLabel } from 'quasar'

export const StepTypes = ['slide', 'quiz', 'feedback', 'repetitions', 'video']

export default {
  name: 'Step',
  components: { QList, QItem, QItemSection, QAvatar, QItemLabel },
  props: {
    step: {
      type: Object,
      default: null
    }
  },
  data() {
    return {}
  },
  computed: {
    selectColorByType() {
      switch (this.step.type) {
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
  },
  methods: {
    getStepRouter(step) {
      let name = ''
      let id = 0
      if (step.type === 'slide') {
        name = 'SlideStep'
        id = step.slides.id
      }
      return { name, params: { idSessao: id } }
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

<template>
  <div class="response-wrapper">
    <div class="response-wrapper__header">
      <q-img :src="icon" class="image" fit="scale-down" height="100%" />
    </div>
    <div class="response-wrapper__body">
      <div class="content">
        <h2 class="content__title">{{ title }}</h2>
        <p class="content__description">{{ subtitle }}</p>
      </div>
    </div>
    <div class="response-wrapper__footer">
      <Button
        v-if="subButtonText"
        class="main-button no-shadow text-weight-bold mb-2"
        color="primary-flat"
        :label="subButtonText"
        @click="subAction"
        no-caps
      />
      <Button
        color="primary-filled"
        class="no-shadow text-weight-bold"
        no-caps
        :label="buttonText"
        @click="action"
      />
    </div>
  </div>
</template>

<script>
import Button from '../../../common/components/Button/Button'

export const StepTypes = ['slide', 'quiz', 'feedback', 'repetitions', 'video']

export default {
  name: 'Response',
  components: { Button },
  props: {
    active: {
      type: Boolean,
      default: true
    },
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    buttonText: {
      type: String
    },
    subButtonText: {
      type: String
    },
    action: {
      type: Function
    },
    subAction: {
      type: Function
    },
    icon: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.response-wrapper {
  height: calc(100vh - 58px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  &__header {
    height: 230px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .image {
      width: 265px;
    }
  }
  &__body {
    height: calc(100vh - 288px);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  &__footer {
    padding-bottom: var(--spacing-5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .main-button {
      margin-bottom: 20px;
    }
  }
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 28px;
  &__title {
    color: var(--main-alternate);
    font-family: 'customfont700';
    font-weight: 700;
    font-size: var(--font-size-6);
    line-height: 24px;
    letter-spacing: -0.014em;
    text-align: center;
    word-break: break-word;
    white-space: pre-wrap;
    margin: 0;
  }
  &__description {
    color: var(--main-alternate);
    font-family: 'customfont620';
    font-weight: 500;
    font-size: var(--font-size-4);
    line-height: 19px;
    letter-spacing: -0.014em;
    text-align: center;
    margin-top: 4px;
  }
}
.input-token {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

::v-deep .input-custom {
  .q-field__control {
    padding: 0;
    text-align: center;
    background-color: var(--utilities-disabled);
  }
  .text-field__content {
    text-align: center;
    width: 67px;
    height: 52px;
  }
  .q-field__label {
    font-family: 'customfont620';
    font-weight: 500;
    font-size: var(--font-size-4);
    line-height: 19px;
    align-items: center;
    letter-spacing: -0.014em;
    color: var(--utilities-alternate);
  }
}
</style>

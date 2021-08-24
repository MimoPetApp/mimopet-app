<template>
  <div class="ask-wrapper">
    <div class="ask-wrapper__header">
      <div class="row">
        <div class="col-12 col-md-12 col-xs-12">
          <h2 class="text-main-alternate">{{ title }}</h2>
          <p class="text-main-alternate-light">{{ subtitle }}</p>
        </div>
      </div>
    </div>
    <div class="ask-wrapper__content" :class="selectAlignContent">
      <div class="row">
        <div class="col-12 col-md-12 col-xs-12">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
    <div class="ask-wrapper__footer">
      <div class="row">
        <div class="col-12 col-md-12 col-xs-12 flex items-center justify-center">
          <slot name="action"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ask',
  props: {
    color: {
      type: String,
      default: 'main-primary',
      validate: val => ['main-primary'].indexOf(val) !== -1
    },
    type: {
      type: String,
      default: 'squared',
      validate: val => ['rounded', 'squared'].indexOf(val) !== -1
    },
    selected: {
      type: Boolean,
      default: false,
      validate: val => [true, false].indexOf(val) !== -1
    },
    title: {
      type: String,
      default: 'Insert your title'
    },
    subtitle: {
      type: String,
      default: 'Insert your subTitle'
    },
    alignContent: {
      type: String,
      default: 'center',
      validate: val => ['start', 'center', 'end'].indexOf(val) !== -1
    }
  },
  computed: {
    selectAlignContent () {
      switch (this.alignContent) {
        case 'start':
          return 'ask-wrapper__content--align-start'
        case 'end':
          return 'ask-wrapper__content--align-end'
        default:
          return 'ask-wrapper__content--align-center'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ask-wrapper {
  min-height: calc(100vh - 115px);
  justify-content: space-between;
  align-content: space-between;
  flex-direction: column;
  display: flex;
  &__header {
    h2 {
      font-size: var(--font-size-7);
      line-height: 29.05px;
      letter-spacing: -0.224px;
      padding-right: var(--font-size-10);
      padding-left: var(--font-size-8);
      margin-bottom: var(--font-size-2);
    }
    p {
      font-family: 'customfont';
      font-weight: 500;
      font-size: var(--font-size-4);
      line-height: 19.36px;
      letter-spacing: -0.224px;
      padding-right: var(--font-size-10);
      padding-left: var(--font-size-8);
    }
  }
  &__content {
    min-height: calc(100vh - 295px);
    display: flex;
    justify-content: center;
    &--align-start {
      align-items: flex-start;
    }
    &--align-center {
      align-items: center;
    }
    &--align-end {
      align-items: flex-end;
    }
  }
}
</style>

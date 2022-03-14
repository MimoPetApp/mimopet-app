<template>
  <div class="session" align="center">
    <q-btn
      :class="'session__button ' + `session__button--${enabled ? 'on' : 'off'}`"
      icon="play_arrow"
      text-color="utilities-alternate"
      color="transparent"
      :to="router"
      unelevated
    >
    </q-btn>
    <p class="mt-1 mb-0 text-utilities-alternate session__label">{{ label }}</p>
  </div>
</template>

<script>
export default {
  name: 'Session',
  props: {
    label: {
      type: String
    },
    enabled: {
      type: Boolean,
      default: false
    },
    router: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">
.session {
  width: 64px;
  height: 82px;
  font-weight: 500;
  font-size: var(--font-size-3);

  &__label {
    font-family: 'customfont620';
    font-weight: 500;
    font-size: var(--font-size-4);
    line-height: 19px;
    letter-spacing: -0.014em;
  }

  &__button {
    width: 40px;
    height: 40px;
    border-radius: 12px;

    &--off {
      border: 1px solid var(--utilities-border);
    }

    &--on {
      border: 2px solid var(--utilities-alternate);
    }
  }

  &--primary {
    background: rgba(237, 117, 69, 0.1);
    color: var(--main-primary);
  }

  &--secondary {
    background: rgba(242, 161, 106, 0.1);
    color: var(--main-secondary);
  }

  &--highlight {
    background: rgba(112, 102, 242, 0.1);
    color: var(--main-highlight);
  }
}
</style>

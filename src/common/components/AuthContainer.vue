<template>
  <div :class="containerClass">
    <slot></slot>
    <q-img
      v-if="hasBackground"
      src="~assets/images/utils/hubBg.svg"
      class="auth-container__bg-img"
    />

    <q-img
      v-if="hasBackground"
      src="~assets/images/utils/hubBgAlt.svg"
      class="auth-container__bg-img"
    />
  </div>
</template>

<script>
export default {
  name: 'AuthContainer',
  props: {
    hasBackground: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  computed: {
    containerClass: function () {
      const classes = ['auth-container']
      if (this.light) classes.push('auth-container--light')
      else classes.push('auth-container--dark')
      return classes
    }
  }
}
</script>

<style lang="scss">
.auth-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &--light {
    background: var(--main-background);
  }

  &--dark {
    background: var(--main-alternate);
  }

  &__bg-img {
    position: absolute;
    top: 10%;
    left: 0;
    z-index: 0;
  }
}
</style>

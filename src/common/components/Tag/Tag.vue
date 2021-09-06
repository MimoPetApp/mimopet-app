<template>
  <q-btn :class="'tag' + ` tag--${color}`" dense flat no-caps>
    {{ label }}
  </q-btn>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    label: {
      type: String
    },
    color: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.tag {
  width: 100px;
  font-weight: 500;
  font-size: var(--font-size-3);

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

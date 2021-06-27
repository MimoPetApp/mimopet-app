<template>
  <div class="auth-form-content">
    <Title :text="title" :subtitle="subtitle" />
    <div class="row">
      <div class="col-12">
        <form @submit.prevent.stop="onSubmit">
          <slot></slot>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="flex flex-center">
          <MainButton
            type="submit"
            :label="btnLabel"
            :click="onSubmit"
            :loading="loading"
            :disable="!valid"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "./title";
import MainButton from "./mainButton";
export default {
  name: "SingleLineForm",
  components: {
    Title,
    MainButton
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    valid: {
      type: Boolean,
      default: false
    },
    onSubmit: {
      type: Function,
      default: () => {}
    },
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    },
    btnLabel: {
      type: String,
      default: "Submeter"
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.auth-form-content {
  min-height: calc(100vh - 146px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>

<template>
  <div class="token-wrapper">
    <div class="token-wrapper__header">
      <q-img :src="getCheckSuccess" class="slide-step__image" fit="scale-down" height="100%" />
    </div>
    <div class="token-wrapper__body">
      <div class="content">
        <h2 class="content__title">Enviamos uma mensagem para {{ recipient }}</h2>
        <p class="content__description">Verifique sua identidade inserindo o código enviado</p>
      </div>
      <div class="input-token row q-gutter-sm">
        <div class="col-2" v-for="(item, index) in inputTextFields" :key="index">
          <TextField
            ref="inputText"
            type="text"
            v-model="inputTextFields[index].value"
            :label="inputTextPlaceholder"
            hint=""
            no-error-icon
            lazy-rules
            class="input-custom"
            maxlength="1"
            @keypress="onlyNumber"
            :error="inputTextFields[index].error"
          />
        </div>
      </div>
      <div class="error-wrapper text-negative" v-if="errorMessage">
        <p>{{ errorMessage }}</p>
      </div>
    </div>
    <div class="token-wrapper__footer">
      <Button
        color="primary-filled"
        class="no-shadow text-weight-bold"
        size="md"
        no-caps
        label="Confirmar"
        @click="onClick"
      />
    </div>
  </div>
</template>

<script>
import Button from '../Button/Button.vue'
import TextField from '../TextField/TextField'
const checkSuccess = require('../../../assets/images/feedback/check_success.svg')

export const StepTypes = ['slide', 'quiz', 'feedback', 'repetitions', 'video']

export default {
  name: 'Token',
  components: { Button, TextField },
  props: {
    recipient: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      inputTextFields: [
        {
          value: '',
          label: '-',
          error: false
        },
        {
          value: '',
          label: '-',
          error: false
        },
        {
          value: '',
          label: '-',
          error: false
        },
        {
          value: '',
          label: '-',
          error: false
        }
      ],
      inputTextPlaceholder: '-',
      errorMessage: ''
    }
  },
  computed: {
    getCheckSuccess() {
      return checkSuccess
    }
  },
  methods: {
    formatInput(val, index) {
      // only number
      this.inputTextFields[index].value = val.target._value.replace(/[^0-9]/g, '')
    },
    onlyNumber($event) {
      const keyCode = $event.keyCode ? $event.keyCode : $event.which
      if (keyCode < 48 || keyCode > 57) {
        $event.preventDefault()
      }
    },
    isFieldEmpty() {
      let isEmpty = false
      this.inputTextFields.forEach(input => {
        if (!input.value) {
          input.error = true
          isEmpty = true
        }
      })
      return isEmpty
    },
    onClick() {
      if (this.isFieldEmpty()) {
        this.errorMessage = 'Preencha todos os campos!'
      } else {
        this.errorMessage = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.token-wrapper {
  height: calc(100vh - 58px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  &__header {
    height: 230px;
    width: 100%;
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
  }
}
.content {
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

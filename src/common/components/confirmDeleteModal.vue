<template>
  <QDialog v-bind="$attrs" :model-value="active" persistent>
    <q-card class="dialog">
      <q-card-section class="q-py-none pl-3 pr-3">
        <q-avatar v-if="icon" size="80px">
          <img :src="icon" />
        </q-avatar>
        <h2 class="dialog__title text-main-alternate mb-1 mt-4">
          {{ title }}
        </h2>
        <h3 class="dialog__subtitle text-utilities-alternate text-weight-bolder">
          {{ subtitle }}
        </h3>
      </q-card-section>

      <q-card-section class="q-py-none mt-3 pl-3 pr-3 mb-3">
        <TextField
          v-if="inputTextPlaceholder"
          ref="inputText"
          v-model="inputText.value"
          :label="inputTextPlaceholder"
          :rules="[val => !!val || 'Confirme o nome antes de excluir']"
          hint=""
          no-error-icon
          lazy-rules
          :error="inputText.error"
          :error-message="inputText.errorMessage"
          @focus="inputText.error = true"
        />
      </q-card-section>
      <q-separator />
      <q-card-actions class="q-pa-none">
        <div class="row justify-center q-py-md" style="width: 100%; margin: 0 auto">
          <Button
            flat
            color="danger-bordless"
            class="text-weight-bold"
            size="md"
            no-caps
            :label="buttonText"
            @click="onClick"
          />
        </div>
      </q-card-actions>
    </q-card>
  </QDialog>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { QDialog } from 'quasar'
import Button from './Button/Button'
import TextField from './TextField/TextField'

export default {
  name: 'ConfirmDeleteModal',
  components: {
    QDialog,
    TextField,
    Button
  },
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
    action: {
      type: Function
    },
    icon: {
      type: String
    },
    inputTextPlaceholder: {
      type: String
    },
    toCompare: null // Any
  },
  data() {
    return {
      inputText: {
        value: '',
        error: false,
        errorMessage: ''
      }
    }
  },
  computed: {
    ...mapState('pets', ['loadingPets', 'petProfile'])
  },
  watch: {
    'inputText.value': function () {
      if (this.hasInputTextError) {
        this.resetInputTextError()
      }
    }
  },
  methods: {
    ...mapActions('pets', ['ActionModalDeletePet']),
    async onClick() {
      if (this.isClickValid()) {
        await this.action()
      }
    },
    isInputText() {
      return this.inputTextPlaceholder
    },
    isInputTextValid() {
      if (this.isInputText()) {
        return this.inputText.value === this.toCompare
      }
    },
    isClickValid() {
      let valid = false
      if (!this.isInputTextValid()) {
        this.setInputTextError()
      } else {
        valid = true
        this.resetInputTextError()
      }
      return valid
    },
    hasInputTextError() {
      return this.inputText.error
    },
    resetInputTextError() {
      this.inputText.error = false
      this.inputText.errorMessage = ''
    },
    setInputTextError() {
      this.inputText.error = true
      this.inputText.errorMessage = 'Não confere. Tente novamente!'
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog {
  &__title {
    font-family: 'customfont700';
    font-weight: bold;
    font-size: var(--font-size-6);
    line-height: var(--spacing-3);
    text-align: center;
    letter-spacing: -0.014em;
  }
  &__subtitle {
    font-family: 'customfont620';
    font-weight: 500;
    font-size: var(--font-size-4);
    line-height: 19px;
    text-align: center;
    letter-spacing: -0.014em;
  }
}
</style>

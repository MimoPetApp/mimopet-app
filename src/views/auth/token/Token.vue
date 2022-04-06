<template>
  <div>
    <div class="token-wrapper" v-if="!response.status">
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
    <div v-else>
      <Response
        :title="response.title"
        :subtitle="response.subtitle"
        :buttonText="response.buttonText"
        :subButtonText="response.subButtonText"
        :icon="response.icon"
        :action="response.action"
        :subAction="response.subAction"
      ></Response>
    </div>
  </div>
</template>

<script src="./Token.js"></script>
<style src="./Token.scss" lang="scss" scoped></style>

<template>
  <div>
    <div class="change-password-wrapper" v-if="!response.status">
      <div class="change-password-wrapper__header">
        <q-img :src="getLockOpen" class="change-password-wrapper__header__image" fit="scale-down" />
      </div>
      <div class="change-password-wrapper__body">
        <div class="content">
          <h2 class="content__title">Crie uma nova senha para recuperar sua conta</h2>
          <p class="content__description">Use a nova senha para realizar login</p>
        </div>
        <div class="input-token row q-gutter-sm">
          <div class="col-12 group-input" align="center">
            <form ref="form" @submit.prevent.stop="onSubmitPassword">
              <TextField
                v-model="form.password"
                class="mb-1"
                label="Senha"
                lazy-rules
                :isPassword="true"
                :rules="[
                  val => !!val || $t('login.password.error.required'),
                  val => /^(?=.{8,})/.test(val) || $t('login.password.error.min'),
                  val => /^(?=.*[a-z])/.test(val) || $t('login.password.error.lowercase'),
                  val => /^(?=.*[A-Z])/.test(val) || $t('login.password.error.uppercase'),
                  val => /^(?=.*[0-9])/.test(val) || $t('login.password.error.number'),
                  val =>
                    /^(?=.*[!@#\$%\^&\*])/.test(val) || $t('login.password.error.specialCharacter'),
                  val => /^(?=.{8,})/.test(val) || $t('login.password.error.length')
                ]"
              />
              <TextField
                v-model="form.confirmPassword"
                label="Repita a senha"
                :isPassword="true"
                lazy-rules
                :rules="[
                  val => !!val || $t('login.password.error.required'),
                  val => val === form.password || 'Senha não confere'
                ]"
              />
            </form>
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
          label="Salvar nova senha"
          @click="onSubmitPassword"
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

<script src="./ChangePassword.js"></script>
<style src="./ChangePassword.scss" lang="scss" scoped></style>

<template>
  <div>
    <AuthContainer v-if="!loading" has-background>
      <Logo class="ml-4 mt-4" />
      <div>
        <Title
          :text="$t('login.title')"
          :subtitle="$t('login.subtitle')"
          class="ml-4 mr-4 mb-4 pt-6"
        />
        <div class="login__bottom-modal">
          <div class="row pl-5 pr-5 pt-5" style="z-index: 1">
            <div class="col-12">
              <form ref="form" @submit.prevent.stop="onSubmitEmail">
                <TextField
                  v-model="form.identifier"
                  class="mb-1"
                  type="email"
                  :label="$t('login.email.label')"
                  :rules="[val => !!val || $t('login.email.error')]"
                />
                <TextField
                  v-model="form.password"
                  class="mb-2"
                  :label="$t('login.password.label')"
                  :isPassword="true"
                  :rules="[
                    val => !!val || $t('login.password.error.required'),
                    val => /^(?=.{8,})/.test(val) || $t('login.password.error.min')
                  ]"
                />
              </form>
            </div>
            <div class="col-12" align="center">
              <Button
                @click="onSubmitEmail"
                color="primary-filled"
                class="main-button no-shadow"
                :loading="loading"
                type="submit"
                label="Entrar"
                no-caps
              />
            </div>
          </div>
          <div class="row login__bottom-modal--footer">
            <div class="col-6" align="left">
              <Button
                flat
                color="primary-filled"
                :disabled="true"
                class="text-weight-bold"
                size="md"
                no-caps
                icon="mail"
                label="Suporte"
              />
            </div>
            <div class="col-6" align="right">
              <Button
                flat
                color="primary-filled"
                :disabled="true"
                class="text-weight-bold"
                size="md"
                no-caps
                label="Esqueci minha senha"
              />
            </div>
          </div>
        </div>
      </div>
    </AuthContainer>
    <div v-else class="flex flex-center q-mt-xl">
      <LoadingCircle color="status-waiting" size="6em" :thickness="5" />
    </div>
  </div>
</template>

<script src="./loginAccount.js"></script>
<style src="./loginAccount.scss" lang="scss"></style>

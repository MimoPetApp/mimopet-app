<template>
  <div>
    <Container v-if="!loading" has-background>
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
                <q-input
                  v-model="form.identifier"
                  class="text-field mb-1 elevated"
                  input-class="text-field__content"
                  type="email"
                  :label="showEmailLabel ? $t('login.email.label') : ''"
                  filled
                  no-error-icon
                  color="utilities-alternate"
                  bg-color="utilities-border"
                  standout="bg-utilities-border text-main-alternate"
                  :rules="[val => !!val || $t('login.email.error')]"
                  @focus="showEmailLabel = false"
                  @blur="showEmailLabel = form.identifier.length == 0"
                />
                <q-input
                  v-model="form.password"
                  :type="!showPassword ? 'password' : 'text'"
                  class="text-field mb-2 elevated"
                  input-class="text-field__content"
                  :label="showPasswordLabel ? $t('login.password.label') : ''"
                  filled
                  no-error-icon
                  color="utilities-alternate"
                  bg-color="utilities-border"
                  :rules="[
                    val => !!val || $t('login.password.error.required'),
                    val => /^(?=.{8,})/.test(val) || $t('login.password.error.min')
                  ]"
                  @focus="showPasswordLabel = false"
                  @blur="showPasswordLabel = form.password.length == 0"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="!showPassword ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="showPassword = !showPassword"
                    />
                  </template>
                </q-input>
              </form>
            </div>
            <div class="col-12" align="center">
              <q-btn
                @click="onSubmitEmail"
                color="main-primary"
                class="main-button no-shadow"
                :loading="loading"
                type="submit"
                label="Entrar"
                no-caps
              >
              </q-btn>
            </div>
          </div>
          <div class="row login__bottom-modal--footer">
            <div class="col-6" align="left">
              <q-btn flat size="md" no-caps>
                <span class="text-weight-bold text-utilities-alternate">Suporte</span>
              </q-btn>
            </div>
            <div class="col-6" align="right">
              <q-btn flat size="md" no-caps>
                <span class="text-weight-bold text-utilities-alternate">Esqueci minha senha</span>
              </q-btn>
            </div>
          </div>
        </div>
      </div>
    </Container>
    <div v-else class="flex flex-center q-mt-xl">
      <LoadingCircle />
    </div>
  </div>
</template>

<script src="./loginAccount.js"></script>
<style src="./loginAccount.scss" lang="scss"></style>

<template>
  <div>
    <Container v-if="!loading" has-background>
      <div class="logo-login">
        <Logo />
      </div>
      <Title :text="$t('login.title')" :subtitle="$t('login.subtitle')" />
      <div class="row" style="z-index: 1">
        <div class="col-12">
          <form ref="form" @submit.prevent.stop="onSubmitEmail">
            <q-input
              v-model="form.email"
              type="email"
              :label="showEmailLabel ? $t('login.email.label') : ''"
              class="group-input q-mb-sm elevated"
              input-class="group-input-content-pattern"
              filled
              no-error-icon
              :rules="[val => !!val || $t('login.email.error')]"
              @focus="showEmailLabel = false"
              @blur="showEmailLabel = form.email.length == 0"
            />
            <q-input
              v-model="form.password"
              :type="!showPassword ? 'password' : 'text'"
              :label="showPasswordLabel ? $t('login.password.label') : ''"
              filled
              input-class="group-input-content-pattern"
              class="group-input"
              no-error-icon
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
      </div>
      <div class="row q-pb-xl">
        <div class="col-12">
          <div class="flex flex-center">
            <MainButton
              type="submit"
              label="Entrar"
              :click="onSubmitEmail"
              :loading="loading"
              :disable="!formIsValid"
            />
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

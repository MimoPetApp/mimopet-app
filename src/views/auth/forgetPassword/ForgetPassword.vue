<template>
  <div>
    <AuthContainer v-if="!loading" has-background>
      <Logo class="ml-4 mt-4" />
      <div>
        <Title
          text="Recupere sua conta"
          subtitle="Entraremos em contato com instruções para recuperação da sua conta"
          class="ml-4 mr-4 mb-4 pt-6"
        />
        <div class="forget-password__bottom-modal">
          <div class="row pl-5 pr-5 pt-5" style="z-index: 1">
            <div class="col-12">
              <form ref="form" @submit.prevent.stop="onSubmitEmail">
                <TextField
                  v-model="form.email"
                  class="mb-1"
                  type="email"
                  :label="$t('login.email.label')"
                  clearable
                  :rules="[val => !!val || $t('login.email.error')]"
                  icon="mail"
                  prepend
                />
              </form>
            </div>
            <div class="col-12" align="center">
              <Button
                @click="onSubmitEmail"
                color="primary-filled"
                class="main-button no-shadow mt-2"
                type="submit"
                label="Enviar e-mail"
                no-caps
              />
              <Button
                @click="goToLogin"
                color="secondary-outline"
                class="main-button no-shadow mt-3"
                type="submit"
                label="Cancelar"
                no-caps
              />
            </div>
            <div class="col-12 error text-center mt-3" align="center" v-if="getSendTokenError">
              <p class="text-status-danger">{{ getSendTokenError.data.message }}</p>
            </div>
          </div>
        </div>
      </div>
    </AuthContainer>

    <div v-else class="flex flex-center q-mt-xl">
      <LoadingCircle color="status-waiting" size="6em" :thickness="5" />
    </div>
    <div class="forget-password__dialog" v-if="feedbackModalStatus || supportModalStatus">
      <FeedbackModal
        :active="feedbackModalStatus"
        :icon="feedbackIcon"
        :title="feedbackModalTitle"
        :subtitle="feedbackModalSubtitle"
        :buttonText="feedbackModalButtonText"
        :subButtonText="feedbackModalSubButtonText"
        :action="goToLogin"
        :subAction="sendAgain"
      ></FeedbackModal>
      <SupportModal
        :active="supportModalStatus"
        @hide="hideSupportModal"
        :action="hideSupportModal"
      ></SupportModal>
    </div>
  </div>
</template>

<script src="./ForgetPassword.js"></script>
<style src="./ForgetPassword.scss" lang="scss" scoped></style>

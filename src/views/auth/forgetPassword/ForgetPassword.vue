<template>
  <div>
    <AuthContainer v-if="!loading" has-background>
      <Logo class="ml-4 mt-4" />
      <div>
        <Title
          text="Recupere sua conta"
          subtitle="Enviaremos um e-mail para você"
          class="ml-4 mr-4 mb-4 pt-6"
        />
        <div class="forget-password__bottom-modal">
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
              </form>
            </div>
            <div class="col-12" align="center">
              <Button
                @click="onSubmitEmail"
                color="primary-filled"
                class="main-button no-shadow mb-3"
                type="submit"
                label="Enviar"
                no-caps
              />
              <Button
                @click="goToLogin"
                color="secondary-outline"
                class="main-button no-shadow mb-3"
                type="submit"
                label="Cancelar"
                no-caps
              />
            </div>
          </div>
          <div class="row forget-password__bottom-modal--footer">
            <div class="col-12 col-md-12 col-xs-12 flex flex-center">
              <Button
                flat
                color="utilities-alternate"
                class="text-weight-bold"
                size="md"
                no-caps
                icon="mail"
                label="Suporte"
                @click="showSupportModal"
              />
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

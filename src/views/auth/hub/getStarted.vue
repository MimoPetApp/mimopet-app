<template>
  <AuthContainer has-background>
    <Logo class="ml-4 mt-4" />
    <Title
      :text="$t('getStarted.title')"
      :subtitle="$t('getStarted.subtitle')"
      class="ml-4 mr-4 mb-4 pt-6"
    />
    <div class="get-started__bottom-modal">
      <div class="row pt-6">
        <div class="col-12" align="center">
          <Button
            @click="loginHandler"
            color="primary-filled"
            class="main-button no-shadow"
            type="submit"
            :label="$t('getStarted.mainbutton')"
            no-caps
          />
        </div>
        <div class="col-12 mt-3" align="center">
          <Button
            @click="registerHandler"
            flat
            color="secondary-bordless"
            class="text-weight-bold"
            size="md"
            no-caps
            :label="$t('getStarted.secondarybutton')"
          />
        </div>
      </div>
      <div class="row get-started__bottom-modal--footer">
        <div class="col-6" align="left">
          <Button
            flat
            color="primary-filled"
            :disabled="true"
            class="text-weight-bold get-started__bottom-modal--button"
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
            class="text-weight-bold get-started__bottom-modal--button"
            size="md"
            no-caps
            label="Esqueci minha senha"
          />
        </div>
      </div>
    </div>
  </AuthContainer>
</template>

<script src="./getStarted.js"></script>
<style src="./getStarted.scss" lang="scss"></style>

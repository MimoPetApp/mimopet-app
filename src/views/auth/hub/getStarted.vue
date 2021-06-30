<template>
  <Container has-background>
    <Logo class="ml-4 mt-4" />
    <Title
      :text="$t('getStarted.title')"
      :subtitle="$t('getStarted.subtitle')"
      class="ml-4 mr-4 mb-4 pt-6"
    />
    <div class="get-started__bottom-modal">
      <div class="row pt-6">
        <div class="col-12" align="center">
          <MainButton to="/login/acesso" :label="$t('getStarted.mainbutton')" />
        </div>
        <div class="col-12 mt-3" align="center">
          <q-btn flat size="md" no-caps>
            <span class="text-main-primary">{{ $t('getStarted.secondarybutton') }}</span>
          </q-btn>
        </div>
      </div>
      <div class="row get-started__bottom-modal--footer">
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
  </Container>
</template>

<script src="./getStarted.js"></script>
<style src="./getStarted.scss" lang="scss"></style>

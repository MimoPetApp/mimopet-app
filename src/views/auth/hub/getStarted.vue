<template>
  <Container has-background>
    <div class="logo-getstarted">
      <Logo />
    </div>
    <Title
      :text="$t('getStarted.title')"
      :subtitle="$t('getStarted.subtitle')"
    />
    <div class="row">
      <div class="col-12 flex flex-center" align="center">
        <MainButton to="/login/acesso" :label="$t('getStarted.mainbutton')" />
      </div>
      <div class="col-12 q-mt-lg column justify-center items-center">
        <q-btn to="/login/criar" color="positive" flat size="md" no-caps>
          <span :class="'login-text'">{{
            $t("getStarted.secondarybutton")
          }}</span>
        </q-btn>
      </div>
    </div>
  </Container>
</template>

<script src="./getStarted.js"></script>
<style src="./getStarted.scss" lang="scss"></style>
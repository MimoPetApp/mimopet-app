<template>
  <div class="q-pa-xs user-profile-details-wrapper">
    <!-- Header -->
    <div class="row">
      <div class="col-12">
        <q-toolbar class="text-primary text-main-primary">
          <router-link :to="{ name: 'UserProfile' }" class="router-link-style">
            <q-btn flat round dense icon="arrow_back" text-color="utilities-alternate" />
          </router-link>
        </q-toolbar>
      </div>
    </div>
    <!-- Main content -->
    <div class="row">
      <div class="col-12">
        <div class="user-profile-details-wrapper__content">
          <profile-details
            :info="userData"
            title="Informações pessoais"
            subtitle="Perfil do tutor"
            @selectedEdition="selectedHandler"
          ></profile-details>
        </div>
      </div>
    </div>
    <!--
    <div class="row">
      <div class="col-12">
        <div class="user-profile-details-wrapper__form">
          <Ask
            title="Como seu pet se chama?"
            subtitle="Vamos construir o perfil do seu animal 🐶"
            align-content="center"
            v-show="step === 1"
          >
            <template v-slot:content>
              <TextField
                v-model="form.petName"
                light
                align="center"
                class="mb-1"
                type="text"
                label="Insira o nome do pet"
              />
            </template>
            <template v-slot:action>
              <Button
                label="Continuar"
                noCaps
                color="primary-filled"
                class="pl-7 pr-7"
                :disabled="form.petName.length === 0"
                @click="nextStep()"
              ></Button>
            </template>
          </Ask>
        </div>
      </div>
    </div>
    -->
    <!-- Loading content -->
    <div v-if="false" class="flex flex-center q-mt-xl">
      <LoadingCircle color="status-waiting" size="6em" :thickness="5" />
    </div>
  </div>
</template>

<script src="./UserProfileDetails.js"></script>
<style src="./UserProfileDetails.scss" lang="scss" scoped></style>

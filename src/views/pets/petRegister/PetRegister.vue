<template>
  <div style="background: #ffffff">
    <q-layout v-if="!loading" view="lHh Lpr lFf">
      <q-toolbar class="text-primary text-main-primary">
        <q-btn
          flat
          round
          dense
          icon="arrow_back"
          @click="backStep()"
          text-color="utilities-alternate"
        />
      </q-toolbar>
      <!-- Pet Name -->
      <Ask
        title="Como seu pet se chama?"
        subtitle="Vamos construir o perfil do seu animal 🐶"
        align-content="center"
        v-if="step === 1"
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
            color="primary-flat"
            class="pl-7 pr-7"
            :disabled="form.petName.length === 0"
            @click="nextStep()"
          ></Button>
        </template>
      </Ask>
      <!-- End Pet Name -->

      <!-- Pet Age -->
      <Ask
        title="Qual a idade do seu pet?"
        subtitle="Estamos acabando de construir o seu perfil de tutor treinador"
        align-content="center"
        v-if="step === 2"
      >
        <template v-slot:content>
          <Button-Checkbox-Group
            :options="options"
            single-selection
            @selected="selectedHandler('petAge', $event)"
          ></Button-Checkbox-Group>
        </template>
        <template v-slot:action>
          <Button
            label="Continuar"
            noCaps
            color="primary-flat"
            class="pl-7 pr-7"
            :disabled="!petAgeFilled"
            @click="nextStep()"
          ></Button>
        </template>
      </Ask>
      <!-- End Pet Age -->

      <!-- Pet Breed -->
      <Ask
        title="Qual a raça do pet?"
        subtitle="Estamos acabando de construir o seu perfil de tutor treinador"
        align-content="center"
        v-if="step === 3"
      >
        <template v-slot:content>
          <SearchField></SearchField>
        </template>
        <template v-slot:action>
          <Button
            label="Continuar"
            noCaps
            color="primary-flat"
            class="pl-7 pr-7"
            :disabled="!petAgeFilled"
            @click="nextStep()"
          ></Button>
        </template>
      </Ask>

      <!-- End Pet Breed -->

      <!-- Pet Details -->
      <Ask
        title="Informe detalhes do pet"
        subtitle="Queremos entender mais do seu animal"
        align-content="center"
        v-if="step === 4"
      >
        <template v-slot:content>
          <Button-Checkbox-Group
            :options="options"
            @selected="selectedHandler('petDetails', $event)"
          ></Button-Checkbox-Group>
        </template>
        <template v-slot:action>
          <Button
            label="Continuar"
            noCaps
            color="primary-flat"
            class="pl-7 pr-7"
            :disabled="!petDetailsFilled"
            @click="nextStep()"
          ></Button>
        </template>
      </Ask>

      <!-- End Pet Details -->

      <!-- Pet Added -->
      <AuthContainer v-if="step === 5">
        <div class="login-form-content">
          <div class="row" style="height: 35px"></div>
          <div class="row" style="z-index: 1">
            <div class="col-12 col-md-12 col-xs-12 flex justify-center items-center">
              <q-img
                src="~/assets/images/feedback/check.png"
                style="width: 100px; height: auto"
              ></q-img>
            </div>
            <div
              style="margin-top: 25px"
              class="col-12 col-md-12 col-xs-12 flex justify-center items-center text-center"
            >
              <Title
                :text="$t('petCreation.title.petRegistered')"
                :subtitle="$t('petCreation.subtitle.manageYourPet')"
                class="content-wrapper"
              />
            </div>
          </div>
          <div class="row" style="z-index: 1">
            <div class="col-12 col-md-12 col-xs-12">
              <div class="flex flex-center">
                <MainButton :label="$t('petCreation.buttons.continue')" :click="finishRegister" />
              </div>
            </div>
          </div>
          <q-img
            src="~/assets/images/modal.png"
            style="width: 100%; height: auto; position: absolute; bottom: 0%; left: 0%"
            no-default-spinner
          ></q-img>
        </div>
      </AuthContainer>
      <!-- End Pet Added -->
    </q-layout>
    <div v-else class="flex flex-center q-mt-xl">
      <LoadingCircle />
    </div>
  </div>
</template>

<script src="./PetRegister.js"></script>
<style src="./PetRegister.scss" lang="scss"></style>

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
      <Ask
        title="Como seu pet se chama?"
        subtitle="Vamos construir o perfil do seu animal 🐶"
        align-content="center"
      >
        <template v-slot:content>
          <button-checkbox-group
            :options="options"
            @answered="answeredHandler($event)"
            answer="Castrado"
          ></button-checkbox-group>
        </template>
        <template v-slot:action>
          <Button
            label="Continuar"
            noCaps
            color="primary-flat"
            class="pl-7 pr-7"
            :disabled="btnDisabled"
          ></Button>
        </template>
      </Ask>
      <!-- Pet Name -->
      <!--
      <AuthContainer v-if="step === 1">
        <form @submit.prevent.stop="nextStep()">
          <div class="login-form-content">
            <div class="row">
              <div class="col-12 col-md-12 col-xs-12">
                <Title
                  :text="$t('petCreation.title.nameYourPet')"
                  subtitle="Vamos construir o perfil do seu animal 🐶"
                  color-title="main-alternate"
                  color-subtitle="main-subtitle"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-12 col-xs-12 flex justify-center items-center">
                <q-input
                  ref="petName"
                  v-model="form.petName"
                  borderless
                  type="text"
                  :label="$t('petCreation.placeholder.insertPetName')"
                  hint=""
                  input-class="text-input-pattern text-center"
                  class="label-style"
                  no-error-icon
                  lazy-rules
                  :rules="[
                    val =>
                      (val && val.length > 0) || $t('petCreation.validationMessages.fieldRequired')
                  ]"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="flex flex-center">
                  <Button
                    type="submit"
                    :label="$t('petCreation.buttons.continue')"
                    :disable="form.petName.length < 2"
                    class="pl-7 pr-7"
                    noCaps
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </AuthContainer>
      -->
      <!-- End Pet Name -->

      <!-- Pet Profile -->
      <AuthContainer v-if="step === 2">
        <form @submit.prevent.stop="nextStep()">
          <div class="login-form-content">
            <div class="row">
              <div class="col-12 col-md-12 col-xs-12">
                <Title :text="$t('petCreation.title.choosePetProfile')" />
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <q-carousel
                  v-model="form.petProfile"
                  swipeable
                  animated
                  :padding="true"
                  :arrows="true"
                  :navigation="true"
                  :navigation-position="'bottom'"
                  height="400px"
                  control-color="positive"
                  class="text-purple rounded-borders control-style"
                >
                  <q-carousel-slide
                    :name="$t('petCreation.profileOptions.dog')"
                    class="column no-wrap flex-center"
                  >
                    <div class="q-mt-md text-center relative-position">
                      <q-img
                        src="~assets/images/dog.png"
                        spinner-color="positive"
                        transition="fade"
                        class="petImg-style"
                      />
                      <q-img
                        src="~assets/images/dogTitle.png"
                        spinner-color="positive"
                        transition="fade"
                        class="petProfileTitle-style"
                      />
                      <q-img
                        src="~assets/images/floor.png"
                        spinner-color="positive"
                        transition="fade"
                        class="floor-style"
                      />
                    </div>
                  </q-carousel-slide>
                  <q-carousel-slide
                    :name="$t('petCreation.profileOptions.cat')"
                    class="column no-wrap flex-center"
                  >
                    <div class="q-mt-md text-center relative-position">
                      <q-img
                        src="~assets/images/cat.png"
                        spinner-color="positive"
                        transition="fade"
                        class="petImg-style"
                      />
                      <q-img
                        src="~assets/images/catTitle.png"
                        spinner-color="positive"
                        transition="fade"
                        class="petProfileTitle-style"
                      />
                      <q-img
                        src="~assets/images/floor.png"
                        spinner-color="positive"
                        transition="fade"
                        class="floor-style"
                      />
                    </div>
                  </q-carousel-slide>
                </q-carousel>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="flex flex-center">
                  <MainButton type="submit" :label="$t('petCreation.buttons.select')" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </AuthContainer>
      <!-- End Pet Profile -->

      <!-- Pet Breed -->
      <AuthContainer v-if="step === 3">
        <form @submit.prevent.stop="nextStep()">
          <div class="login-form-content">
            <div class="row">
              <div class="col-12 col-md-12 col-xs-12">
                <Title :text="$t('petCreation.title.breedYourPet')" />
              </div>
            </div>
            <div class="row q-mt-md">
              <div class="col-12 col-xs-12 col-md-12 flex justify-center items-center flex">
                <q-input
                  ref="petBreed"
                  v-model="form.petBreed.name"
                  bg-color="white"
                  no-error-icon
                  class="label-style"
                  input-class="inputText-style text-center"
                  lazy-rules
                  clearable
                  clear-icon="close"
                  @input="searchBreed()"
                >
                  <template v-slot:prepend>
                    <q-icon name="search" />
                  </template>
                </q-input>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-12 col-xs-12 flex justify-end items-center">
                <p class="results-style">
                  {{ listOptionsFiltered.length }}
                  {{ $t('petCreation.placeholder.results') }}
                </p>
              </div>
            </div>
            <div class="row" style="margin-top: -40px">
              <div class="col-12 col-md-12 col-xs-12">
                <div class="q-gutter-sm">
                  <q-checkbox
                    v-model="form.petBreed.isUnknown"
                    :label="$t('petCreation.buttons.breedNone')"
                  />
                </div>
              </div>
            </div>
            <div class="row" style="margin-bottom: 18px">
              <div class="col-12 col-md-12 col-xs-12 list-wrapper">
                <q-list>
                  <div v-if="listOptionsFiltered.length > 0">
                    <div v-for="(breed, index) in listOptionsFiltered" :key="index">
                      <q-item v-ripple clickable @click="selectBreed(index)">
                        <q-item-section>
                          <q-item-label>{{ breed.name }}</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-separator spaced inset />
                    </div>
                  </div>
                  <div v-else>
                    <q-item>
                      <q-item-section>
                        <q-item-label>{{
                          !form.petBreed.name
                            ? $t('petCreation.placeholder.searchByBreed')
                            : $t('petCreation.placeholder.noResults')
                        }}</q-item-label>
                      </q-item-section>
                    </q-item>
                  </div>
                </q-list>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="flex flex-center">
                  <MainButton
                    type="submit"
                    :label="$t('petCreation.buttons.continue')"
                    :disable="!form.petBreed.name && !form.petBreed.isUnknown"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </AuthContainer>
      <!-- End Pet Breed -->

      <!-- Pet Gender -->
      <!-- <div v-if="step === 4">
        <div class="row">
          <div class="q-px-xl q-pb-xl q-pt-md" style="">
            <div class="col-12 col-md-12 col-xs-12">
              <Title :text="$t('petCreation.title.petGender')" />
            </div>
          </div>
        </div>
        <div
          :class="
            form.petGender === $t('petCreation.gender.female') ? 'row genderOption-active' : 'row'
          "
          @click="selectPetGender($t('petCreation.gender.female'))"
        >
          <div class="col-12 col-md-12 col-xs-12 genderOptions-wrapper">
            {{ $t('petCreation.gender.female') }}
          </div>
        </div>
        <div
          :class="
            form.petGender === $t('petCreation.gender.male') ? 'row genderOption-active' : 'row'
          "
          @click="selectPetGender($t('petCreation.gender.male'))"
        >
          <div class="col-12 col-md-12 col-xs-12 genderOptions-wrapper">
            {{ $t('petCreation.gender.male') }}
          </div>
        </div>
      </div> -->
      <!-- End Pet Gender -->

      <!-- Pet Details -->
      <AuthContainer v-if="step === 5">
        <form @submit.prevent.stop="nextStep()">
          <div class="login-form-content">
            <div class="row">
              <div class="col-12 col-md-12 col-xs-12">
                <Title :text="$t('petCreation.title.detailYourPet')" />
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="col-12 col-md-12 col-xs-12">
                  <div class="flex flex-center">
                    <div
                      :class="
                        `selectBtn-wrapper${
                          form.petDetails === 'adopted' ? ' selectBtn-active' : ''
                        }`
                      "
                      @click="form.petDetails = 'adopted'"
                    >
                      {{ $t('petCreation.buttons.adopted') }}
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-12 col-xs-12 q-mt-lg q-mb-lg">
                  <div class="flex flex-center">
                    <div
                      :class="
                        `selectBtn-wrapper${
                          form.petDetails === 'castrated' ? ' selectBtn-active' : ''
                        }`
                      "
                      @click="form.petDetails = 'castrated'"
                    >
                      {{ $t('petCreation.buttons.castrated') }}
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-12 col-xs-12">
                  <div class="flex flex-center">
                    <div
                      :class="
                        `selectBtn-wrapper${
                          form.petDetails === 'withSomeDisability' ? ' selectBtn-active' : ''
                        }`
                      "
                      @click="form.petDetails = 'withSomeDisability'"
                    >
                      {{ $t('petCreation.buttons.withSomeDisability') }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-12 col-xs-12">
                <div class="flex flex-center">
                  <MainButton
                    type="submit"
                    :label="$t('petCreation.buttons.continue')"
                    :disable="!form.petDetails"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </AuthContainer>
      <!-- End Pet Details -->

      <!-- Pet Birthday -->
      <AuthContainer v-if="step === 6">
        <form @submit.prevent.stop="nextStep()">
          <div class="login-form-content">
            <div class="row">
              <div class="col-12 col-md-12 col-xs-12">
                <Title
                  :text="$t('petCreation.title.petBirthday')"
                  :subtitle="$t('petCreation.subtitle.timeEstimate')"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-12 col-xs-12 flex justify-center items-center">
                <div class="row q-gutter-sm flex justify-center items-center">
                  <div class="col-3 col-md-3 col-xs-3">
                    <div class="flex flex-center">
                      <q-input
                        v-model="form.day"
                        outlined
                        no-error-icon
                        bg-color="deep-purple-1"
                        mask="##"
                        class="label-style"
                        input-class="inputText-style text-center"
                        lazy-rules
                        :rules="[
                          val =>
                            (val && val.length > 0) ||
                            $t('petCreation.validationMessages.fieldRequired'),
                          val =>
                            (val &&
                              val.length === 2 &&
                              val !== '00' &&
                              parseInt(val) > 0 &&
                              parseInt(val) <= 31) ||
                            $t('petCreation.validationMessages.dayInvalid')
                        ]"
                      />
                    </div>
                  </div>
                  <div class="col-3 col-md-3 col-xs-3">
                    <div class="flex flex-center">
                      <q-input
                        v-model="form.month"
                        outlined
                        mask="##"
                        bg-color="deep-purple-1"
                        no-error-icon
                        class="label-style"
                        input-class="inputText-style text-center"
                        lazy-rules
                        :rules="[
                          val =>
                            (val && val.length > 0) ||
                            $t('petCreation.validationMessages.fieldRequired'),
                          val =>
                            (val &&
                              val.length === 2 &&
                              val !== '00' &&
                              parseInt(val) > 0 &&
                              parseInt(val) <= 12) ||
                            $t('petCreation.validationMessages.monthInvalid')
                        ]"
                      />
                    </div>
                  </div>
                  <div class="col-4 col-md-4 col-xs-4">
                    <div class="flex flex-center">
                      <q-input
                        v-model="form.year"
                        outlined
                        mask="####"
                        no-error-icon
                        bg-color="deep-purple-1"
                        class="label-style"
                        input-class="inputText-style text-center"
                        lazy-rules
                        :rules="[
                          val =>
                            (val && val.length > 0) ||
                            $t('petCreation.validationMessages.fieldRequired'),
                          val =>
                            (val &&
                              val.length === 4 &&
                              val !== '0000' &&
                              parseInt(val) > 0 &&
                              parseInt(val) <= new Date().getFullYear()) ||
                            $t('petCreation.validationMessages.yearInvalid')
                        ]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-12 col-xs-12">
                <div class="flex flex-center">
                  <MainButton
                    type="submit"
                    :label="$t('petCreation.buttons.continue')"
                    :disable="disableDateBtn"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </AuthContainer>
      <!-- End Pet Birthday -->

      <!-- How Long Have Pet -->
      <AuthContainer v-if="step === 7">
        <form @submit.prevent.stop="onSubmit()">
          <div class="login-form-content">
            <div class="row">
              <div class="col-12 col-md-12 col-xs-12">
                <Title
                  :text="$t('petCreation.title.howLongHavePet')"
                  :subtitle="$t('petCreation.subtitle.timeEstimate')"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-12 col-xs-12">
                <div class="row q-gutter-sm flex justify-center items-center">
                  <div class="col-3 col-md-3 col-xs-3">
                    <div class="flex flex-center">
                      <q-btn
                        outline
                        round
                        color="primary"
                        icon="remove"
                        class="btn-style"
                        @click="minusOperation()"
                      />
                    </div>
                  </div>
                  <div class="col-4 col-md-4 col-xs-4 flex flex-center">
                    <div class="flex flex-center">
                      <q-input
                        v-model="form.howLong"
                        borderless
                        mask="##"
                        no-error-icon
                        input-class="inputText-style text-center number-style"
                        class="label-style"
                        lazy-rules
                        :rules="[
                          val =>
                            (val && val.length > 0) ||
                            $t('petCreation.validationMessages.fieldRequired')
                        ]"
                      />
                    </div>
                  </div>
                  <div class="col-3 col-md-3 col-xs-3">
                    <div class="flex flex-center">
                      <q-btn outline round class="btn-style" icon="add" @click="plusOperation()" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-12 col-xs-12">
                <div class="flex flex-center">
                  <MainButton
                    type="submit"
                    :label="$t('petCreation.buttons.continue')"
                    :disable="form.howLong.length === 0"
                    @click="onSubmit"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </AuthContainer>
      <!-- End How Long Have Pet -->

      <!-- Pet Added -->
      <AuthContainer v-if="step === 8">
        <div class="login-form-content">
          <div class="row" style="height: 35px"></div>
          <div class="row" style="z-index: 1">
            <div class="col-12 col-md-12 col-xs-12 flex justify-center items-center">
              <q-img src="~/assets/images/check.png" style="width: 100px; height: auto"></q-img>
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

<template>
  <div>
    <Container v-if="!loading">
      <div v-if="step == 1" class="auth-form-content">
        <div>
          <Title
            :text="$t('create.terms.title')"
            :subtitle="$t('create.terms.subtitle')"
          />
        </div>
        <div class="termos-container">
          <div
            v-for="(term, indexI) in $t('create.terms.data')"
            :key="`term_${indexI}`"
          >
            <h3 class="mimo-text__h3">{{ term.head }}</h3>
            <p
              v-for="(item, indexJ) in term.body"
              :key="`term_item_${indexJ}`"
              class="text-weight-bold mimo-text"
            >
              {{ item }}
            </p>
          </div>

          <div class="row q-mt-xl">
            <div class="col-12">
              <div class="flex flex-center">
                <MainButton
                  type="submit"
                  :label="$t('create.terms.mainbutton')"
                  :click="nextStep"
                  :loading="false"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SingleLineForm
        v-else-if="step == 2"
        :title="$t('create.email.title')"
        :subtitle="$t('create.email.subtitle')"
        :btn-label="$t('create.email.mainbutton')"
        :loading="false"
        :on-submit="onSubmitEmail"
        :valid="emailIsValid"
      >
        <q-input
          ref="email"
          v-model="form.email"
          borderless
          type="email"
          :label="$t('create.email.label')"
          hint=""
          input-class="single-line-input-pattern"
          class="single-input"
          no-error-icon
          lazy-rules
          :error="showError.email && !emailIsValid"
          :error-message="$t('create.email.error')"
          @focus="showError.email = true"
        />
      </SingleLineForm>
      <SingleLineForm
        v-else-if="step == 3"
        :title="$t('create.password.title')"
        :subtitle="$t('create.password.subtitle')"
        :btn-label="$t('create.password.mainbutton')"
        :loading="false"
        :on-submit="onSubmitPassword"
        :valid="passwordIsValid"
      >
        <q-input
          ref="password"
          v-model="form.password"
          borderless
          type="text"
          :label="$t('create.password.label')"
          hint=""
          input-class="single-line-input-pattern"
          class="single-input"
          no-error-icon
          :error="showError.password && !passwordIsValid"
          :rules="
            !showError.password
              ? []
              : [
                  (val) => !!val || $t('create.password.error.required'),
                  (val) =>
                    /^(?=.*[a-z])/.test(val) ||
                    $t('create.password.error.lowercase'),
                  (val) =>
                    /^(?=.*[A-Z])/.test(val) ||
                    $t('create.password.error.uppercase'),
                  (val) =>
                    /^(?=.*[0-9])/.test(val) ||
                    $t('create.password.error.number'),
                  (val) =>
                    /^(?=.*[!@#\$%\^&\*])/.test(val) ||
                    $t('create.password.error.specialCharacter'),
                  (val) =>
                    /^(?=.{8,})/.test(val) ||
                    $t('create.password.error.length'),
                ]
          "
          @focus="showError.password = true"
        />
      </SingleLineForm>
      <SingleLineForm
        v-else-if="step == 4"
        :title="$t('create.name.title')"
        :subtitle="$t('create.name.subtitle')"
        :btn-label="$t('create.name.mainbutton')"
        :loading="false"
        :on-submit="onSubmitName"
        :valid="nameIsValid"
      >
        <q-input
          ref="user_name"
          v-model="form.nickname"
          borderless
          type="text"
          :label="$t('create.name.label')"
          hint=""
          input-class="single-line-input-pattern"
          class="single-input"
          no-error-icon
        />
      </SingleLineForm>
      <div v-else-if="step == 5" class="auth-form-content">
        <div>
          <Title :text="$t('create.identification.title')" />
          <div class="row">
            <div class="col-12">
              <div class="flex flex-center q-py-xl">
                <form @submit.prevent.stop="onSubmitExtra">
                  <q-btn-toggle
                    v-model="form.identificationTutor"
                    text-color="grey-4"
                    toggle-text-color="secondary"
                    class="genre-toggle"
                    outline
                    unelevated
                    no-caps
                    :options="[
                      {
                        label: $t('create.identification.label.mother'),
                        value: 'mother',
                      },
                      {
                        label: $t('create.identification.label.father'),
                        value: 'father',
                      },
                    ]"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Title :text="$t('create.birthDate.title')" />
          <div class="row">
            <div class="col-12">
              <div class="flex flex-center q-py-xl">
                <form @submit.prevent.stop="onSubmitExtra">
                  <q-input
                    v-model="form.birthdate"
                    borderless
                    input-class="single-line-input-pattern"
                    class="single-input"
                    mask="##-##-####"
                    no-error-icon
                    :rules="[
                      (val) => val.length == 10 || $t('create.birthDate.error'),
                    ]"
                  >
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy
                          ref="qDateProxy"
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-date v-model="form.birthdate" mask="DD-MM-YYYY">
                            <div class="row items-center justify-end">
                              <q-btn
                                v-close-popup
                                label="Close"
                                color="primary"
                                flat
                              />
                            </div>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="flex flex-center">
              <MainButton
                type="submit"
                :label="$t('create.birthDate.mainbutton')"
                :click="onSubmitExtra"
                :loading="false"
                :disable="!extraIsValid"
              />
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

<script src="./createAccount.js"></script>
<style src="./createAccount.scss" lang="scss"></style>

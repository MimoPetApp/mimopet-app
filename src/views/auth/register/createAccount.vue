<template>
  <div>
    <AuthContainer v-if="!loading" light>
      <div>
        <q-toolbar class="text-primary">
          <div class="pt-2">
            <q-btn
              flat
              round
              color="utilities-alternate"
              size="md"
              icon="arrow_back"
              @click="previousStep"
            />
          </div>
        </q-toolbar>
        <Ask v-if="step == 1" :title="$t('create.terms.title')" align-content="center">
          <template v-slot:content>
            <div class="pr-5 pl-5">
              <p v-html="terms.terms" style="text-align: justify"></p>
            </div>
          </template>
          <template v-slot:action>
            <Button
              type="submit"
              :label="$t('create.terms.mainbutton')"
              :loading="false"
              @click="nextStep"
              noCaps
              color="primary-filled"
              class="main-button no-shadow"
            ></Button>
          </template>
        </Ask>
        <Ask
          v-else-if="step == 2"
          :title="$t('create.email.title')"
          :subtitle="$t('create.email.subtitle')"
          align-content="center"
        >
          <template v-slot:content>
            <TextField
              v-model="form.email"
              ref="email"
              borderless
              light
              type="email"
              align="center"
              :label="$t('create.email.label')"
              :rules="[
                val => !!val || $t('login.email.error'),
                val => pattern.email.test(val) || $t('login.email.invalid')
              ]"
              hint=""
              no-error-icon
              lazy-rules
              :error="showError.email && !emailIsValid"
              :error-message="$t('create.email.error')"
              @focus="showError.email = true"
            />
          </template>
          <template v-slot:action>
            <Button
              @click="onSubmitEmail"
              :label="$t('create.email.mainbutton')"
              noCaps
              type="submit"
              color="primary-filled"
              class="main-button no-shadow"
              :loading="false"
              :disabled="!emailIsValid"
            ></Button>
          </template>
        </Ask>
        <Ask
          v-else-if="step == 3"
          :title="$t('create.password.title')"
          :subtitle="$t('create.password.subtitle')"
        >
          <template v-slot:content>
            <TextField
              v-model="form.password"
              ref="password"
              borderless
              light
              :isPassword="true"
              align="center"
              :label="$t('create.password.label')"
              :rules="
                !showError.password
                  ? []
                  : [
                      val => !!val || $t('create.password.error.required'),
                      val => /^(?=.*[a-z])/.test(val) || $t('create.password.error.lowercase'),
                      val => /^(?=.*[A-Z])/.test(val) || $t('create.password.error.uppercase'),
                      val => /^(?=.*[0-9])/.test(val) || $t('create.password.error.number'),
                      val =>
                        /^(?=.*[!@#\$%\^&\*\.\,\+\_])/.test(val) ||
                        $t('create.password.error.specialCharacter'),
                      val => /^(?=.{8,})/.test(val) || $t('create.password.error.length')
                    ]
              "
              hint=""
              no-error-icon
              :error="showError.password && !passwordIsValid"
              @focus="showError.password = true"
            />
          </template>
          <template v-slot:action>
            <Button
              @click="onSubmitPassword"
              :label="$t('create.password.mainbutton')"
              noCaps
              type="submit"
              color="primary-filled"
              class="main-button no-shadow"
              :loading="false"
              :disabled="!passwordIsValid"
            ></Button>
          </template>
        </Ask>
        <Ask
          v-else-if="step == 4"
          :title="$t('create.name.title')"
          :subtitle="$t('create.name.subtitle')"
        >
          <template v-slot:content>
            <TextField
              v-model="form.username"
              ref="user_name"
              borderless
              light
              type="text"
              align="center"
              :label="$t('create.name.label')"
              hint=""
              no-error-icon
            />
          </template>
          <template v-slot:action>
            <Button
              @click="onSubmitName"
              :label="$t('create.name.mainbutton')"
              noCaps
              type="submit"
              color="primary-filled"
              class="main-button no-shadow"
              :loading="false"
              :disabled="!nameIsValid"
            ></Button>
          </template>
        </Ask>
        <Ask
          v-else-if="step == 5"
          :title="$t('create.birthDate.title')"
          :subtitle="$t('create.birthDate.subtitle')"
        >
          <template v-slot:content>
            <q-input
              v-model="form.birthday"
              outlined
              input-class="single-input__birth-day text-main-alternate"
              class="single-input pr-5 pl-5"
              mask="##-##-####"
              no-error-icon
              :rules="[
                val => val.length == 10 || $t('create.birthDate.error'),
                () => userAge >= 18 || 'Tem que ser maior de idade'
              ]"
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                    <q-date v-model="form.birthday" mask="DD-MM-YYYY">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </template>
          <template v-slot:action>
            <Button
              @click="onSubmitBirthDate"
              :label="$t('create.birthDate.mainbutton')"
              noCaps
              type="submit"
              color="primary-filled"
              class="main-button no-shadow"
              :disabled="!birthdayIsValid"
            ></Button>
          </template>
        </Ask>
        <Ask
          v-else-if="step == 6"
          :title="$t('create.identification.title')"
          :subtitle="$t('create.identification.subtitle')"
        >
          <template v-slot:content>
            <Button-Checkbox-Group
              :options="genderOptions"
              selectionType="single"
              @selected="genderOptionsHandler('gender', $event)"
            ></Button-Checkbox-Group>
          </template>
          <template v-slot:action>
            <Button
              @click="onSubmitGender"
              :label="$t('create.identification.mainbutton')"
              noCaps
              type="submit"
              color="primary-filled"
              class="main-button no-shadow"
            ></Button>
          </template>
        </Ask>
      </div>
    </AuthContainer>
    <div v-else class="flex flex-center q-mt-xl">
      <LoadingCircle color="status-waiting" size="6em" :thickness="5" />
    </div>
  </div>
</template>

<script src="./createAccount.js"></script>
<style src="./createAccount.scss" lang="scss"></style>

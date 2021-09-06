<template>
  <div style="background: #ffffff">
    <q-layout v-if="!loading" view="lHh Lpr lFf">
      <q-toolbar v-if="step !== 5" class="text-primary text-main-primary">
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
        v-show="step === 2"
      >
        <template v-slot:content>
          <Button-Checkbox-Group
            :options="ageOptions"
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
        align-content="start"
        v-show="step === 3"
      >
        <template v-slot:content>
          <div class="q-gutter-xs pr-4 pl-4">
            <SearchField
              v-model="form.petBreed.searchName"
              label="Busque por nome"
              class="mb-1"
              align="right"
              outline
              @update:model-value="searchBreed()"
              :disable="form.petBreed.isUnknown"
            ></SearchField>
            <Checkbox
              v-model="form.petBreed.isUnknown"
              label="Sem raça"
              @click="noBreedHandler()"
            ></Checkbox>
          </div>
          <div class="row mt-3" style="margin-bottom: 18px">
            <div class="col-12 col-md-12 col-xs-12 list-breeds-wrapper">
              <Button-Checkbox-Group
                :options="breedsList"
                single-selection
                @selected="selectedHandler('petBreed', $event)"
              ></Button-Checkbox-Group>
              <!--
              <q-list>
                <div v-if="breedsList.length > 0">
                  <div v-for="(breed, index) in breedsList" :key="index">
                    <q-item v-ripple clickable @click="selectBreed(index)">
                      <q-item-section>
                        <q-item-label>{{ breed }}</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-separator spaced inset />
                  </div>
                </div>
              </q-list>
              -->
            </div>
          </div>
        </template>
        <template v-slot:action>
          <Button
            label="Continuar"
            noCaps
            color="primary-flat"
            class="pl-7 pr-7"
            :disabled="!petBreedFilled"
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
        v-show="step === 4"
      >
        <template v-slot:content>
          <Button-Checkbox-Group
            :options="detailOptions"
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
            @click="registerPet()"
          ></Button>
        </template>
      </Ask>

      <!-- End Pet Details -->

      <!-- Pet Added -->
      <Feedback
        :active="step === 5"
        :icon="'pet.png'"
        title="Pet Adicionado"
        subtitle="Você pode adicionar inúmeros pets a sua conta cadastrada"
        buttonText="Acessar o app"
        :action="goToHome"
      ></Feedback>
      <!-- End Pet Added -->
    </q-layout>
    <div v-else class="flex flex-center q-mt-xl">
      <LoadingCircle color="status-waiting" size="6em" :thickness="5" />
    </div>
  </div>
</template>

<script src="./PetRegister.js"></script>
<style src="./PetRegister.scss" lang="scss"></style>

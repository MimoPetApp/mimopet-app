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
        align-content="center"
        v-if="step === 3"
      >
        <template v-slot:content>
          <div class="q-gutter-xs pr-4 pl-4">
            <SearchField v-model="form.petBreed.name" label="Busque por nome" outline></SearchField>
            <Checkbox v-model="form.petBreed.isUnknown" label="Sem raça"></Checkbox>
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
        v-if="step === 4"
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
            @click="nextStep()"
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
      ></Feedback>
      <!-- End Pet Added -->
    </q-layout>
    <div v-else class="flex flex-center q-mt-xl">
      <LoadingCircle />
    </div>
  </div>
</template>

<script src="./PetRegister.js"></script>
<style src="./PetRegister.scss" lang="scss"></style>

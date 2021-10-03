<template>
  <div v-if="true" class="quiz-step-wrapper">
    <Ask
      title="O que significa quando seu cachorro levanta a pata?"
      subtitle="Estamos acabando de construir o seu perfil de tutor treinador"
      align-content="center"
      v-show="step === 1"
    >
      <template v-slot:content>
        <Button-Checkbox-Group
          :options="selectOptions"
          answer="Desconforto"
          @selected="selectedHandler($event)"
        ></Button-Checkbox-Group>
      </template>
      <template v-slot:action>
        <Button
          label="Enviar"
          noCaps
          color="primary-filled"
          class="pl-7 pr-7"
          :disabled="!selected"
          @click="nextStep()"
        ></Button>
      </template>
    </Ask>
  </div>
  <div v-else class="flex flex-center q-mt-xl">
    <LoadingCircle color="status-waiting" size="6em" :thickness="5" />
  </div>
</template>

<script src="./QuizStep.js"></script>
<style src="./QuizStep.scss" lang="scss" scoped></style>

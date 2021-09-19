<template>
  <div v-if="true" class="quiz-step-wrapper">
    <Ask
      title="Como é a alimentação do seu filhote?"
      subtitle="Marque as opções que refletem o comportamento atual do seu cão."
      align-content="center"
      v-show="step === 1"
    >
      <template v-slot:content>
        <Button-Checkbox-Group
          :options="selectOptions"
          single-selection
          @selected="selectedHandler($event)"
        ></Button-Checkbox-Group>
      </template>
      <template v-slot:action>
        <Button
          label="Enviar"
          noCaps
          color="primary-flat"
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

<script src="./FeedbackStep.js"></script>
<style src="./FeedbackStep.scss" lang="scss" scoped></style>

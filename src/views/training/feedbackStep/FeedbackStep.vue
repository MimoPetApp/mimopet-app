<template>
  <div v-if="!loadingTrainings" class="quiz-step-wrapper">
    <div v-for="(item, index) in feedback.items" :key="index" v-show="step === index">
      {{ index }}
      <div v-if="step === index">
        <Ask
          :title="item.title"
          :subtitle="item.description"
          align-content="center"
          v-if="isFeedback(item)"
        >
          <template v-slot:content>
            <Button-Checkbox-Group
              :options="item.options"
              :selectionType="item.selection"
              @selected="selectedHandler('ask' + index, $event)"
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
      <FeedbackModal
        v-if="modalStatus"
        :active="true"
        :icon="feedbackIcon"
        :title="item.title"
        :subtitle="item.description"
        buttonText="Continuar"
        :action="nextStep()"
      ></FeedbackModal>
    </div>
  </div>
  <div v-else class="flex flex-center q-mt-xl">
    <LoadingCircle color="status-waiting" size="6em" :thickness="5" />
  </div>
</template>

<script src="./FeedbackStep.js"></script>
<style src="./FeedbackStep.scss" lang="scss" scoped></style>

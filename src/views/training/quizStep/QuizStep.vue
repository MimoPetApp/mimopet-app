<template>
  <div class="quiz-step">
    <div v-if="!loadingTrainings" class="quiz-step-wrapper">
      <div v-for="(item, index) in questions" :key="index" v-show="step === index">
        <Ask :title="item.title" :subtitle="item.description" align-content="center">
          <template v-slot:content>
            <Button-Checkbox-Group
              :options="item.options"
              :selectionType="item.selection"
              @selected="selectedHandler(index, $event)"
            ></Button-Checkbox-Group>
          </template>
          <template v-slot:action>
            <Button
              label="Enviar"
              noCaps
              color="primary-filled"
              class="pl-7 pr-7"
              :disabled="!form[index].answered"
              @click="nextStep(item, index)"
            ></Button>
          </template>
        </Ask>
      </div>
    </div>
    <div v-else class="flex flex-center q-mt-xl">
      <LoadingCircle color="status-waiting" size="6em" :thickness="5" />
    </div>
    <div>
      <FeedbackModal
        :active="dialog.model"
        :icon="dialog.icon"
        :title="dialog.title"
        :subtitle="dialog.subtitle"
        :loading="dialog.loading"
        :buttonText="dialog.btnText"
        :action="dialog.action"
      ></FeedbackModal>
    </div>
  </div>
</template>

<script src="./QuizStep.js"></script>
<style src="./QuizStep.scss" lang="scss" scoped></style>

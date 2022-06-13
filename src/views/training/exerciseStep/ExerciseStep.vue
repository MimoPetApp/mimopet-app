<template>
  <div class="exercise-step">
    <!-- Carousel Wrapper-->
    <div class="row">
      <div class="col-12 col-md-12 col-xs-12">
        <q-header
          v-if="!mainLayoutHeader || !trainingLayoutHeader"
          reveal
          class="bg-main-background exercise-step__header"
        >
          <q-toolbar class="exercise-step__toolbar" style="width: 100%">
            <q-btn
              flat
              round
              dense
              @click="back()"
              text-color="main-background"
              class="exercise-step__back-btn"
              unelevated
              no-caps
              :disabled="loading"
            >
              <span>Voltar</span>
            </q-btn>
            <q-btn
              flat
              unelevated
              no-caps
              round
              dense
              @click="stepDone()"
              text-color="main-background"
              :disabled="loading"
            >
              <span class="exercise-step__back-btn">Finalizar</span>
            </q-btn>
          </q-toolbar>
        </q-header>
      </div>
      <div v-if="!loading" class="col-12 col-md-12 col-xs-12">
        <q-carousel
          animated
          v-model="currExercise"
          :autoplay="false"
          ref="carousel"
          class="exercise-step__carousel"
        >
          <!-- Content -->
          <q-carousel-slide
            v-for="(item, index) in getExerciseSessions"
            :key="index"
            :name="index"
            class="exercise-step__carousel-item"
          >
            <div class="row" style="flex-grow: 1">
              <div
                class="col-12 col-md-12 col-xs-12 exercise-step__content"
                :class="{ 'sides-spacing': isQuestionStep }"
              >
                <instruction-step
                  v-if="enableStep(item, 'instruction')"
                  :thumbnail="item.thumbnail"
                  :title="item.title"
                  :instruction="item.instruction"
                ></instruction-step>
                <animation-step
                  v-if="enableStep(item, 'animation')"
                  :title="item.title"
                  :description="item.description"
                  :videos="item.videos"
                ></animation-step>
                <question-step
                  :id="item.question.id"
                  v-if="enableStep(item, 'question')"
                  @sent="onSent($event)"
                ></question-step>
              </div>
            </div>
            <!-- Actions -->
            <div
              class="row exercise-step__btn-group"
              style="width: 100%"
              v-if="notLastSession && !isQuestionStep"
            >
              <div
                class="col-6 col-md-6 col-xs-6 flex justify-center items-center left-btn"
                @click="stepDone()"
              >
                <span>Pular</span>
              </div>
              <div
                class="col-6 col-md-6 col-xs-6 flex justify-center items-center right-btn"
                @click="guideModal()"
              >
                <span>Como treinar?</span>
              </div>
            </div>
          </q-carousel-slide>
          <template v-slot:control>
            <q-carousel-control
              position="bottom-left"
              :offset="[18, 18]"
              class="q-gutter-xs"
              v-if="this.currExercise !== 0"
            >
              <q-btn
                flat
                round
                size="lg"
                color="transparent"
                text-color="utilities-alternate"
                icon="arrow_back_ios"
                @click="$refs.carousel.previous()"
              />
            </q-carousel-control>
            <q-carousel-control
              position="bottom-right"
              :offset="[18, 18]"
              class="q-gutter-xs"
              v-if="!isQuestionStep"
            >
              <q-btn
                flat
                round
                size="lg"
                color="transparent"
                text-color="utilities-alternate"
                icon="arrow_forward_ios"
                @click="$refs.carousel.next()"
              />
            </q-carousel-control>
          </template>
        </q-carousel>
        <!-- slide length -->
        <div v-if="getExercise" class="exercise-step__carousel-footer">
          <div v-if="getExerciseSessions" class="exercise-step__carousel-footer-item">
            <p>{{ currExercise + 1 }} / {{ getExerciseSessions.length }}</p>
          </div>
        </div>
        <!-- <div v-if="showSentBtn">
            <Button label="Finalizar" noCaps color="primary-filled" class="pl-7 pr-7"></Button>
          </div> -->
      </div>
      <div v-else class="flex flex-center loading-screen">
        <LoadingCircle color="status-waiting" size="6em" :thickness="5" />
      </div>
    </div>
    <div>
      <FeedbackModal
        :active="hasFeedback.status"
        :icon="feedbackIcon"
        :title="feedbackTitle"
        :subtitle="feedbackSubtitle"
        buttonText="Voltar"
        :action="actionHandler"
      ></FeedbackModal>
    </div>
  </div>
</template>

<script src="./ExerciseStep.js"></script>
<style src="./ExerciseStep.scss" lang="scss"></style>

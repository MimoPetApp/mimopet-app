<template>
  <div class="exercise-step">
    <div v-if="!loadingTrainings" class="">
      <div class="column justify-center">
        <h2 class="m-0 p-3">{{ exercise.name }}</h2>
        <div v-if="currExercise" class="">
          <!--
          <video controls autoplay :key="player" height="300">
            <source
              :src="_getMediaUrl(currExercise.session.video)"
              :type="currExercise.session.video.mime"
            />
            Desculpa, o seu dipositivo não suporta vídeos incorporados, mas você pode
            <a :href="_getMediaUrl(currExercise.session.video)">baixá-lo</a>
            e assistir pelo seu reprodutor de mídia favorito!
          </video>
          -->
        </div>
        <div class="p-3" align="left">
          <p class="text-main-alternate m-0 p-0">Por {{ exercise.author }}</p>
          <p class="text-utilities-alternate m-0 p-0">
            Atualizado em {{ new Date(exercise.updated_at).toLocaleDateString('pt-BR') }}
          </p>
        </div>
        <q-separator class="bg-utilities-border" />
        <div class="p-3" align="left">
          <h3 class="exercise-step__subtitle text-main-alternate p-0">
            <span v-if="Array.isArray(exercise.items)">
              {{ exercise.items.length }} {{ `Passo${exercise.items.length ? 's' : ''}` }}
            </span>
            <span v-else>Sem passos</span>
          </h3>
          <h4 class="exercise-step__caption text-utilities-alternate p-0">
            {{ exercise.min_duration }}-{{ exercise.max_duration }} min cada
          </h4>
        </div>
        <div class="flex flex-center">
          <div v-if="Array.isArray(exercise.items)" class="flex exercise-step__repetitions">
            <exercise
              v-for="exe in exercise.items"
              class="mr-1 ml-1"
              :key="exe.id"
              :label="exe.title"
              :enabled="exe.is_complete"
              :router="getStepRouter(exe)"
              @click="play(exe)"
            />
          </div>
        </div>
      </div>
    </div>
    <div v-else class="flex flex-center q-mt-xl">
      <LoadingCircle color="status-waiting" size="6em" :thickness="5" />
    </div>
    <div>
      <FeedbackModal
        :active="hasFeedback"
        :icon="feedbackIcon"
        title="Etapa concluída"
        subtitle="Parabéns, você adquiriu mais conhecimento para lidar com seu pet."
        buttonText="Voltar"
        :action="trainingDetailsHandler"
      ></FeedbackModal>
    </div>
  </div>
</template>

<script src="./ExerciseStep.js"></script>
<style src="./ExerciseStep.scss" lang="scss"></style>

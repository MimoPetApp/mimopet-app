<template>
  <div class="video-step">
    <div v-if="!loadingTrainings" class="">
      <div class="video-step__header column justify-between p-4">
        <div align="left">
          <q-btn
            class="video-step__header__btn video-step__header__btn__back"
            color="main-alternate"
            unelevated
            @click="trainingDetailsHandler"
            :disable="loading"
          >
            <q-icon name="close" color="main-background" size="20px" />
          </q-btn>
        </div>
        <div align="right">
          <q-btn
            class="video-step__header__btn"
            color="main-alternate"
            unelevated
            no-caps
            @click="onFinish"
            :loading="loading"
          >
            Finalizar
          </q-btn>
        </div>
      </div>
      <div class="column justify-center" style="height: 100vh">
        <div class="flex flex-center mr-4 ml-4">
          <video controls autoplay>
            <source :src="_getMediaUrl(video.item)" :type="video.mime" />
            Desculpa, o seu dipositivo não suporta vídeos incorporados, mas você pode
            <a :href="_getMediaUrl(video.item)">baixá-lo</a>
            e assistir pelo seu reprodutor de mídia favorito!
          </video>
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

<script src="./VideoStep.js"></script>
<style src="./VideoStep.scss" lang="scss"></style>

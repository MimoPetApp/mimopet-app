<template>
  <div class="slide-step">
    <div v-if="!loadingTrainings" class="">
      <div
        v-if="slide.items && currSlide == slide.items.length - 1"
        class="slide-step__header column justify-between p-4"
      >
        <div align="left">
          <q-btn
            class="slide-step__header__btn slide-step__header__btn__back"
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
            class="slide-step__header__btn"
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
      <q-carousel
        swipeable
        animated
        v-model="currSlide"
        :autoplay="false"
        ref="carousel"
        class="slide-step__carousel"
      >
        <q-carousel-slide
          v-for="(item, index) in slide.items"
          :key="item.id"
          :name="index"
          class="slide-step__carousel-item"
        >
          <div class="row justify-center pr-4 pl-4">
            <q-img
              :src="_getImageUrl(item.image)"
              class="slide-step__image"
              height="300px"
              fit="scale-down"
            />
          </div>
          <q-scroll-area class="slide-step__text-area pr-4 pl-4">
            <h3 class="text-center mb-3">{{ item.title }}</h3>
            <p class="text-center">{{ item.description }}</p>
          </q-scroll-area>
        </q-carousel-slide>

        <template v-slot:control>
          <q-carousel-control position="bottom-left" :offset="[18, 18]" class="q-gutter-xs">
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
          <q-carousel-control position="bottom-right" :offset="[18, 18]" class="q-gutter-xs">
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
      <div v-if="slide" class="slide-step__carousel-footer">
        <div v-if="slide.items" class="slide-step__carousel-footer-item">
          <p>{{ currSlide + 1 }} / {{ slide.items.length }}</p>
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
        title="Leitura de hoje finalizada"
        subtitle="Agora você tem mais conhecimento sobre como se preparar o treino de guia e passeio."
        buttonText="Ir para treino"
        :action="trainingDetailsHandler"
      ></FeedbackModal>
    </div>
  </div>
</template>

<script src="./SlideStep.js"></script>
<style src="./SlideStep.scss" lang="scss"></style>

<template>
  <div class="behavior-list__container">
    <div v-if="!loading">
      <!-- Componente de busca -->
      <div class="behavior-list__container__search">
        <h3 class="ml-2 text-weight-bolder">Explore comportamentos</h3>
        <div class="mt-2 mb-2">
          <SearchBox
            label="Busque por programas de treino para seu pet"
            buttonLabel="Faça o teste"
            :onSearch="onSearch"
          />
        </div>
      </div>
      <!-- Resultado da busca -->
      <q-page class="behavior-list__container__result">
        <div v-if="!loadingTrainings">
          <q-intersection v-for="train in data" :key="train.id" once transition="scale">
            <ExploreCard :train="train" />
          </q-intersection>
        </div>
        <div v-else>
          <ExploreCardSkeleton :length="4" />
        </div>
        <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
          <q-btn fab icon="keyboard_arrow_up" color="main-primary" />
        </q-page-scroller>
      </q-page>
    </div>
    <div v-else class="flex flex-center q-mt-xl">
      <LoadingCircle />
    </div>
  </div>
</template>

<script src="./behaviorList.js"></script>
<style src="./behaviorList.scss" lang="scss"></style>

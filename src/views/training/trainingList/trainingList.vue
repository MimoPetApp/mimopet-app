<template>
  <div class="training-list">
    <div v-if="!loading">
      <h1 class="training-list__title mr-4 ml-4">Treinamentos</h1>
      <div v-for="train in myTrainings" :key="train.id" class="mr-2 ml-2">
        <TrainingCard :train="train" />
      </div>
    </div>
    <div v-else class="flex flex-center q-mt-xl">
      <LoadingCircle />
    </div>
  </div>
</template>

<script src="./trainingList.js"></script>
<style src="./trainingList.scss" lang="scss"></style>

<template>
  <div class="training-list">
    <div v-if="!loadingTrainings">
      <h1 class="training-list__title mr-4 ml-4">Treinamentos</h1>
      <div v-for="train in myTrainings" :key="train.id" class="mr-2 ml-2">
        <router-link
          :to="{ name: 'TrainingDetails', params: { id: train.id } }"
          class="router-link-style"
        >
          <TrainingCard :train="train" />
        </router-link>
      </div>
      <div v-if="Array.isArray(myTrainings) && myTrainings.length == 0" class="flex flex-center">
        <p>Sem treinamentos. Se inscreva aqui</p>
        <router-link :to="{ name: 'behaviorList' }" class="router-link-style">
          <Button color="primary-filled" type="submit" label="Inscrever-se" no-caps />
        </router-link>
      </div>
    </div>
    <div v-else class="flex flex-center q-mt-xl">
      <LoadingCircle color="status-waiting" size="6em" :thickness="5" />
    </div>
  </div>
</template>

<script src="./trainingList.js"></script>
<style src="./trainingList.scss" lang="scss"></style>

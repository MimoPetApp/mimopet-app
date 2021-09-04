<template>
  <div class="behavior-details">
    <div v-if="!loading" class="">
      <div class="behavior-details__header column justify-between p-4">
        <div align="left">
          <q-btn
            to="/behavior"
            class="behavior-details__back-btn"
            color="main-alternate"
            unelevated
          >
            <q-icon name="close" color="main-background" size="20px" />
          </q-btn>
        </div>
        <div align="right">
          <q-img src="~assets/images/vectors/girlPet.svg" width="209px" fit="scale-down" />
        </div>
      </div>
      <div class="pt-4 pl-4 pr-4" align="left">
        <Tag
          :label="parseTrainingCategory(behavior.category)"
          :color="parseTrainingCategoryColor(behavior.category)"
        />
        <h3 class="behavior-details__title mt-2 mb-1 p-0">{{ behavior.title }}</h3>
        <h4 class="behavior-details__subtitle m-0 p-0">{{ behavior.description }}</h4>
      </div>
      <q-separator class="bg-utilities-border mt-4 mb-4" />
      <div class="pl-4 pr-4" align="left">
        <p class="behavior-details__text text-main-alternate m-0 p-0">Por {{ behavior.author }}</p>
        <p class="behavior-details__text text-utilities-alternate m-0 p-0">
          Atualizado em {{ new Date(behavior.updated_at).toLocaleDateString('pt-BR') }}
        </p>
      </div>
      <q-separator class="bg-utilities-border mt-4 mb-4" />
      <div class="" align="center">
        <Button
          @click="onSubscribe"
          color="primary-filled"
          to="/"
          :loading="loading"
          type="submit"
          label="Inscrever-se"
          no-caps
        />
      </div>
    </div>
    <div v-else class="flex flex-center q-mt-xl">
      <LoadingCircle />
    </div>
  </div>
</template>

<script src="./behaviorDetails.js"></script>
<style src="./behaviorDetails.scss" lang="scss"></style>

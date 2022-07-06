<template>
  <q-card
    class="obedience-details q-animate--scale q-mt-xl"
    :style="`background: ${setBgColor}`"
    v-if="!loading"
  >
    <q-card-section class="obedience-details__header">
      <h3 class="obedience-details__title">{{ setDetailsTitle }}</h3>
      <q-badge
        color="main-background"
        text-color="main-alternate"
        class="obedience-details__badge flex justify-center items-center"
      >
        <span class="badge-label"> {{ getObedience.executions }} {{ setBadgeLabel }} </span>
      </q-badge>
      <ObedienceProgress
        color="main-background"
        :max="4"
        :value="getObedience.badge_progress"
      ></ObedienceProgress>
      <p class="obedience-details__description mb-0">
        {{ setDetailsDescription }}
      </p>
    </q-card-section>
    <q-card
      class="obedience-details q-animate--scale q-pa-lg obedience-details__commands-list"
      style="background: #ffffff"
    >
      <q-card-section class="p-0">
        <div v-for="(guideline, index) in getObedience.guidelines" :key="index">
          <ObedienceGuidelineCard
            :title="setGuidelineTitle(guideline.__component)"
            :subtitle="guideline.executions"
            :guide="guideline.guide"
            :class="{ 'card-gutter': index > 0 }"
            :buttons="guideline.items"
            @clicked="actionHandler($event, guideline)"
          ></ObedienceGuidelineCard>
        </div>
      </q-card-section>
    </q-card>
  </q-card>
  <div v-else class="flex flex-center loading-screen">
    <Loading />
  </div>
</template>

<script src="./ObedienceDetails.js"></script>
<style src="./ObedienceDetails.scss" lang="scss" scoped></style>

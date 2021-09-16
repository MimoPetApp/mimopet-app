<template>
  <div class="training-details-wrapper">
    <div v-if="true" class="training-details-wrapper__header">aa</div>
    <div v-else class="flex flex-center q-mt-xl">
      <LoadingCircle color="status-waiting" size="6em" :thickness="5" />
    </div>
    <!-- <CardHealth/> -->
  </div>
</template>

<script src="./ModuleDetails.js"></script>
<style src="./ModuleDetails.scss" lang="scss"></style>

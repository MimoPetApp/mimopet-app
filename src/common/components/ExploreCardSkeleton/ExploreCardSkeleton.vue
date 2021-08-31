<template>
  <div>
    <q-card v-for="i in length" flat style="max-width: 300px" class="mb-4" :key="i">
      <q-item>
        <q-item-section>
          <q-skeleton type="QBadge" />
        </q-item-section>

        <q-item-section side>
          <q-skeleton type="QChip" />
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-skeleton type="text" width="25%" class="text-subtitle2" animation="fade" />
          <q-skeleton type="text" class="text-subtitle2" animation="fade" />
        </q-item-section>
      </q-item>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'ExploreCardSkeleton',
  props: {
    length: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss"></style>

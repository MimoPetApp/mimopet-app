
<template>
  <div class="q-pa-tdp" style="max-width: 300px background: white">
    <q-card class="my-card">
      <q-list bordered padding class="rounded-borders text-primary">
        <q-item v-ripple>
          <q-item-section side top>
            <q-icon name="stars" color="yellow" />
          </q-item-section>

          <q-item-section>
            <q-item-label style="font-size: 1.7vh">
              {{ title }}
            </q-item-label>
            <q-item-label style="font-size: 1.3vh" color="primary">
              {{ timep }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      default: "",
    },

    timep: {
      type: String,
      default: "",
    },
  },

  data() {
    return {};
  },
};

</script>

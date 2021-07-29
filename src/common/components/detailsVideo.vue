
<template>
  <div class="q-pa-tdp" style="background: white">
   <router-link :to="{name: pageName, params: {id: id}, params: {item: videoId}}">
    <q-card class="my-card text-black">
      <q-list bordered padding class="rounded-borders text-black">
        <q-item v-ripple>
          <q-item-section side top>
            <q-icon name="stars" color="yellow" />
          </q-item-section>

          <q-item-section>
            <q-item-label >
              {{ title }}
            </q-item-label>
            <q-item-label style="font-size: 2.3vh" color="primary">
              {{ timep }}
            </q-item-label>
            <img :src=imageTraining />
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
    <q-card>
      <q-card-section>
      </q-card-section>
    </q-card>
    </router-link>
  </div>
</template>

<script>

export default {
  props: {
    id: {
      type: Number
    },
    video: {
      type: String
    },
    title: {
      type: String
    },
    timep: {
      type: String,
      default: ''
    },
    imageTraining: {
      type: String
    },
    pageName: {
      type: String
    },
    videoid: {
      type: Number
    }

  },

  data() {
    return {}
  }
}

</script>

<style lang="scss">
$text-main-button-size: 1.16rem;
.q-pa-tdp {
border-radius: 35px 35px 0 0 !important;
width: 100%;
color: 'white';
font-family: 'customfont700';
font-size: var(--font-size-6);
line-height: 29px;
font-weight: 500;
}
</style>

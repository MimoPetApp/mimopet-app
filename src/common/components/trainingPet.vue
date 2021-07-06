
<template>
  <div id="q-pa-md">
    <!--router-link to="/detalhes"-->
    <router-link :to="{name: 'detalhes', params: {id: id}}">
      <q-list bordered padding class="rounded-borders text-primary">
        <q-item v-ripple>
          <!-- @click.native="testclick" -->
          <q-item-section side top>
            <q-badge color="purple" label="adultos" />
            <q-item-label style="font-size: 1.8vh">{{ step }}</q-item-label>
          </q-item-section>
          <q-item-section side top>
            <q-item-label caption>{{ number }}</q-item-label>
            <q-icon name="stars" color="yellow" />
          </q-item-section>

          <q-item-section>
            <q-item-label></q-item-label>
            <q-item-label caption lines="2" style="font-size: 2.1vh">{{
              title
            }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {

    id: {
      type: Number,
      default: 0
    },

    title: {
      type: String,
      default: ''
    },

    step: {
      type: String,
      default: ''
    },

    number: {
      type: String,
      default: ''
    },

    type: {
      type: String,
      default: ''
    }
  },

  data() {
    return {}
  },

  methods: {
  }
}

</script>

<style scoped>
#q-pa-md {
  font-family: "customfont600";
  font-weight: 600;
  font-size: 2.1vh;
  background-color: white;
  width: 95%;
  margin:7px;
   border-radius: 8%;
  justify-content:center;
  align-items: center;
 }
</style>

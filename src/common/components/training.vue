
<template>
  <div>
      <router-link :to="{name: 'trainingDetails', params: {id: id}}">
      <q-list bordered padding>
          <q-item>
             <q-item-section>
                 <q-item-section side top>
                 <q-item-label>{{number}}</q-item-label>
             </q-item-section>
             <q-item-label>{{step}}</q-item-label>
             <q-item-label style="font-size: 3.1vh">{{ title}}</q-item-label>
             </q-item-section>

             <q-item-section side top>
                 <q-badge color="purple" :label= typedp />
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

    typedp: {
      type: String,
      default: ''
    }
  },

  data() {
    return {}
  }
}

</script>

<style lang="scss">
$text-main-button-size: 1.16rem;
/* .q-pa-md {
border-radius: 25px 25px 0 0 !important;
width: 100%;
color: 'white';
font-family: 'customfont700';
font-size: var(--font-size-6);
line-height: 29px;
font-weight: 500;
} */
</style>

<template>
  <div class="q-pa-td">
    <q-card>
       <q-toolbar class="text-main-primary">
           <q-btn flat round dense icon="keyboard_backspace" @click="backStep()" />
      </q-toolbar>
      <div v-for="(item, index) in trainingList" :key="index">
          {{index.thumbnail}}
           <img :src="parseProfileThumbnail(index.thumbnail)" />
        </div>
        <q-card-section>
        <q-list bordered padding class="rounded-borders text-primary">
            <q-item v-ripple>
                <q-item-section side top>
                <q-badge color="purple" :label= trainingList.category />
                <q-item-label style="font-size: 4.0vh">
                   <b> {{ moduleList.name }}</b>
                </q-item-label>
                <q-item-label caption lines="4" style="font-size: 3.5vh">
                    {{trainingList.description}}
                </q-item-label>
                <br>
                <br>
                <q-separator dark inset />
                <q-item-label style="font-size: 2.0vh">
                   Por {{trainingList.author}}
                </q-item-label>
                <q-item-label style="font-size: 2.0vh">
                   Atualizado em {{trainingList.create_at}}
                </q-item-label>
                </q-item-section>
              </q-item>
          </q-list>
          </q-card-section>
        </q-card>
        <q-card align="center">
            <MainButton
            type="submit"
            nocaps
            label="Inscrever-se"
            @click="$router.push({ name: 'trainingConfirm', params: {id: id} })"
            loading="false"
            />
        </q-card>
    </div>
</template>

<script>
import MainButton from '../../../common/components/mainButton.vue'
import parser from '../../../common/helpers/petProfileParser'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    MainButton
  },

  data() {
    return {
      id: this.$route.params.id
    }
  },

  computed: {
    ...mapState('trainings', ['trainingList', 'loadingTraining']),
    ...mapState('trainings', ['moduleList', 'loadingTraining'])
  },

  watch: {
    // eslint-disable-next-line no-unused-vars
    '$route.params.id': function (id) {
      this.ActionGetTrainingById(this.$route.params.id)
    }
  },
  mounted() {
    this.ActionGetTrainingById(this.$route.params.id)
    this.ActionGetModuleById(this.$route.params.id)
  },
  methods: {
    ...parser,
    ...mapActions('trainings', [
      'ActionGetTrainingById',
      'ActionGetModuleById',
      'ActionCommitTraining',
      'ActionSetLoadingTraining'
    ]),

    backStep() {
      if (this.step > 1) {
        this.step--
      } else {
        // this.step = 1
        this.$router.push({ name: 'training', params: { petid: 1 } })
      }
    }
  }
}

</script>

<style scoped>
.q-pa-td {
  font-family: "customfont600";
  font-weight: 600;
  font-size: 2.1vh;
  text-align: center;
  margin-left: 4vh;
  align-self: center;
  margin: 2 1 2vh 0;
}
.q-pa-im {
  align-self: center;
  width: 90%;
  margin-left: 2vh;
  margin: 2 1 2vh 0;
}
</style>

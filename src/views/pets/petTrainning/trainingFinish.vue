<template>
<div class='confirm' style="width 300px">
   <q-card class='q-ca-md'>
      <q-card-section>
        <q-list bordered padding class="rounded-borders text-primary">
          <q-item v-ripple>
            <q-item-section side top>
                <img src= '~assets/images/estrela.png' />
                <q-item-label style="font-size: 4.3vh">
                 <b> Treino de hoje finalizado</b>
              </q-item-label>
              <q-item-label caption lines="4" style="font-size: 1.8vh">
                   Ofereça um mimo extra para seu pet pela participação
              </q-item-label>
            </q-item-section>
          </q-item>
           <MainButton
              type="submit"
              label="Voltar para home"
              no-caps
              @click="$router.push({ name: 'trainingDetailsAll', params: {id: id}})"
              loading="false"
            />
        <br>
        <q-btn flat style="color: orange"
               label="Ir para treino"
               no-caps
               @click="$router.push({ name: 'trainingDetailsAll', params: {id: id}})"
      />
        </q-list>
      </q-card-section>

   </q-card>
    </div>
</template>

<script>
import MainButton from '../../../common/components/mainButton.vue'

export default {
  components: {
    MainButton
  },

  data() {
    return {
      id: this.$route.params.id,
      treino: {}

    }
  }

}

</script>

<style scoped>

.confirm {
  font-family: "customfont600";
  font-size: 1.45rem !important;
  font-weight: 600;
  text-align: center;
  margin-left: 4vh;
  border-radius: 10%;
  align-self: center;
  margin: 2 1 2vh 0;

}
.q-ca-md {
  text-align: center;
  margin: 2 1 2vh 0;

}
</style>

<template>
<div id='confirm' style="width 300px">
   <q-card>
      <q-card-section>
        <q-list bordered padding class="rounded-borders text-primary">
          <q-item v-ripple>
            <q-item-section side top>
                <img src= '~assets/images/alvo.png' />
                <q-item-label style="font-size: 4.3vh">
                 <b> Inscrição confirmada</b>
              </q-item-label>
              <q-item-label caption lines="4" style="font-size: 1.8vh">
                   Acompanhe os exercícios na sua lista de treinamentos
              </q-item-label>
            </q-item-section>
          </q-item>
           <MainButton
              type="submit"
              label="Ir para o treino"
              @click="$router.push({ name: 'trainingDetailsAll', params: {id: id}})"
              loading="false"
            />
        <br>
        <q-btn flat style="color: orange"
               label="Voltar para busca"
               no-caps
               @click="$router.push({ name: 'login' })"
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

#confirm {
  font-family: "customfont600";
  font-size: 1.45rem !important;
  font-weight: 600;
  text-align: center;
  margin-left: 4vh;
  border-radius: 10%;
  align-self: center;
}
</style>

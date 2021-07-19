<template>
<div id='confirm'>
   <q-card>
      <q-card-section>
        <q-list bordered padding class="rounded-borders text-primary">
          <q-item v-ripple>
            <q-item-section side top>
                <Title
                text='Deseja cancelar inscrição do pet neste programa de treino ?'
                subtitle="Você perderá seu histórico de progresso, mas poderá se inscrever novamente quando desejar."
                />
             <p/>
            </q-item-section>
          </q-item>
           <MainButton
              type="submit"
              label="Voltar"
              @click="$router.push({ name: 'trainingDetails', params: {id: id}})"
              loading="false"
            />
        <br>
        <q-btn flat style="color: orange"
               label="Continuar"
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
import Title from '../../../common/components/title.vue'

export default {
  components: {
    MainButton,
    Title
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

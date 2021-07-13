<template>
<div id='confirm' style="width 300px">
   <q-card>
      <q-card-section>
        <q-list bordered padding class="rounded-borders text-primary">
          <q-item v-ripple>
            <q-item-section side top>
                 <q-item-label style="font-size: 3.3vh">
                 <b> Selecione as condições de treino desta sessão</b>
                 </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
       <q-btn-toggle
        v-model="model1"
        glossy
        toggle-color="green"
        :options="[
          {label: 'Pet sossegado', value: 'one'},
          ]"
       /><p/>
       <q-btn-toggle
        v-model="model2"
        push
        glossy
        toggle-color="green"
        :options="[
          {label: 'Postura treinador', value: 'one'},
          ]"
       />
       <p/>
       <q-btn-toggle
        v-model="model3"
        push
        glossy
        toggle-color="green"
        :options="[
          {label: 'Ausência de barulho', value: 'one'},
          ]"
       />
       <p/>
       <q-btn-toggle
        v-model="model4"
        push
        glossy
        toggle-color="green"
        :options="[
          {label: 'Recompensa', value: 'one'},
          ]"
       />
              <p/>
       <q-btn-toggle
        v-model="model5"
        push
        glossy
        toggle-color="green"
        :options="[
          {label: 'Outros pets no local', value: 'one'},
          ]"
       />
       <p/>
       <p/>
           <MainButton
              type="submit"
              label="Continuar"
              @click="$router.push({ name: 'trainingVideo', params: {id: id}})"
              loading="false"
            />
        <br>
       </q-card-section>
    </q-card>
    </div>
</template>

<script>
import MainButton from '../../../common/components/mainButton.vue'
import { ref } from 'vue'

export default {
  components: {
    MainButton
  },

  data() {
    return {
      model1: ref('six'),
      model2: ref('two'),
      model3: ref('three'),
      model4: ref('four'),
      model5: ref('five'),
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

<template>
<div id='confirm'>
   <q-card>
      <q-card-section>
        <q-list bordered padding class="rounded-borders text-primary">
          <q-item v-ripple>
        <Ask
        title="Selecione as condições de treino desta sessão"
        subtitle=""
        align-content="center"
      >
        <template v-slot:content>
          <button-checkbox-group :options="options"></button-checkbox-group>
        </template>
        <template v-slot:action>
          <Button label="Enviar" noCaps color="primary-flat" class="pl-7 pr-7" disabled></Button>
        </template>
      </Ask>

          </q-item>
        </q-list>
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
import Ask from '../../../common/components/Ask.vue'
import Button from '../../../common/components/Button/Button.vue'
import ButtonCheckboxGroup from '../../../common/components/ButtonCheckboxGroup'

// import { ref } from 'vue'

export default {
  components: {
    MainButton,
    Ask,
    Button,
    ButtonCheckboxGroup

  },

  data() {
    return {
      options: [
        {
          label: 'Pet Sossegado',
          selected: false
        },
        {
          label: 'Postura treinador',
          selected: false
        },
        {
          label: 'Ausência de barulho',
          selected: false
        },
        {
          label: 'Recompensa',
          selected: true
        },
        {
          label: 'Outros pest no local',
          selected: false
        }
      ],
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

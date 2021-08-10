<template>
    <div style="background: #ffffff">
      <Ask
        title="O que significa quando seu cachorro levanta a pata ?"
        subtitle="Estamos acabando de construir o seu perfil de tutor treinador"
        align-content="center"
      >
        <template v-slot:content>
          <button-checkbox-group :options="options"></button-checkbox-group>
        </template>
        <template v-slot:action>
          <Button label="Escolher" noCaps color="primary-flat" class="pl-7 pr-7" ></Button>
        </template>
      </Ask>

    </div>
</template>

<script>
// import MainButton from '../../../common/components/mainButton.vue'
import Ask from '../../../common/components/Ask.vue'
import Button from '../../../common/components/Button/Button.vue'
import ButtonCheckboxGroup from '../../../common/components/ButtonCheckboxGroup'

// import { ref } from 'vue'

export default {
  components: {
    // MainButton,
    Ask,
    Button,
    ButtonCheckboxGroup
  },

  data() {
    return {
      options: [
        {
          label: 'Reatividade',
          selected: false
        },
        {
          label: 'Agressividade',
          selected: false
        },
        {
          label: 'Desconforto',
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

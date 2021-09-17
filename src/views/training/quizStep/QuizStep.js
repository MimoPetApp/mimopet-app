import LoadingCircle from '../../../common/components/loadingCircle'
import ButtonCheckboxGroup from '../../../common/components/ButtonCheckboxGroup'
import Ask from '../../../common/components/Ask/Ask.vue'
import Button from '../../../common/components/Button/Button.vue'

import { mapState, mapActions } from 'vuex'

export default {
  name: 'QuizStep',
  components: {
    LoadingCircle,
    ButtonCheckboxGroup,
    Ask,
    Button
  },
  data () {
    return {
      step: 1,
      selectOptions: [
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
        },
        {
          label: 'Medo',
          selected: false
        }
      ],
      selected: false
    }
  },
  computed: {
    ...mapState('pets', ['petsList', 'loadingPets', 'currPet'])
  },
  methods: {
    ...mapActions('pets', ['ActionGetPets', 'ActionCommitPet', 'ActionSetLoadingPet']),
    selectedHandler (event) {
      this.selected = true
    },
    nextStep () {}
  }
}

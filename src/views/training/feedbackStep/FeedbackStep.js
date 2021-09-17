import LoadingCircle from '../../../common/components/loadingCircle'
import ButtonCheckboxGroup from '../../../common/components/ButtonCheckboxGroup'
import Ask from '../../../common/components/Ask/Ask.vue'
import Button from '../../../common/components/Button/Button.vue'

import { mapState, mapActions } from 'vuex'

export default {
  name: 'FeedbackStep',
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
          label: 'Ração seca',
          selected: false
        },
        {
          label: 'Ração úmida',
          selected: false
        },
        {
          label: 'Petiscos pet',
          selected: false
        },
        {
          label: 'Comida caseira especial',
          selected: false
        },
        {
          label: 'Frutas e verduras',
          selected: false
        },
        {
          label: 'Mistura de ração com proteína animal',
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

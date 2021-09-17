import LoadingCircle from '../../../common/components/loadingCircle'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'QuizStep',
  components: {
    LoadingCircle
  },
  computed: {
    ...mapState('pets', ['petsList', 'loadingPets', 'currPet'])
  },
  methods: {
    ...mapActions('pets', ['ActionGetPets', 'ActionCommitPet', 'ActionSetLoadingPet'])
  }
}

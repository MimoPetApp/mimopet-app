// import { mapActions } from 'vuex'
import treinodoPet from '../../../common/components/training.vue'
import training from '../../../Apis/Training'

export default {
  name: 'App',
  components: { treinodoPet },

  data() {
    return {
      text: '',
      dense: false,
      model: 'one',
      showTraining: true,
      info: []
    }
  },

  /*  mounted() {
    training.all()
      .then(Response => (this.info = Response.data))
  },
 */
  computed: {
    filterfiels() {
      let items = []

      items = this.info.filter((item) => {
        return (
          item.title.toLowerCase().indexOf(this.text.toLowerCase()) > -1
        )
      })
      return items
    }
  },

  methods: {
    testclick() {
      this.showTraining = false
    },

    clickIcon() {
      this.showTraining = true
      training.all()
        .then(Response => (this.info = Response.data))
    }
  }
}

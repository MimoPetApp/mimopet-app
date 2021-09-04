import { mapActions, mapState, mapMutations } from 'vuex'
import parser from './../../../common/helpers/trainingParser'
import Button from '../../../common/components/Button/Button'
import LoadingCircle from '../../../common/components/loadingCircle'
import Tag from '../../../common/components/Tag/Tag'

export default {
  components: { LoadingCircle, Button, Tag },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapState('training', ['behavior'])
  },
  methods: {
    ...parser,
    ...mapActions('training', ['ActionGetBehavior']),
    ...mapMutations('training', ['SET_HAS_HEADER']),
    onSubscribe() {}
  },
  beforeRouteLeave(to, from, next) {
    this.SET_HAS_HEADER(true)
    next()
  },
  async created() {
    this.loading = true
    await this.ActionGetBehavior(this.$route.params.id)
    this.SET_HAS_HEADER(false)
    this.loading = false
  }
}

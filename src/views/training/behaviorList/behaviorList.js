import { mapActions, mapState } from 'vuex'
import LoadingCircle from '../../../common/components/loadingCircle'
import SearchBox from '../../../common/components/SearchBox/SearchBox'
import ExploreCardSkeleton from '../../../common/components/ExploreCardSkeleton/ExploreCardSkeleton'
import ExploreCard from '../../../common/components/ExploreCard/ExploreCard'

export default {
  components: {
    ExploreCardSkeleton,
    LoadingCircle,
    ExploreCard,
    SearchBox
  },
  data() {
    return {
      loading: false,
      data: []
    }
  },
  computed: {
    ...mapState('training', ['trainings', 'loadingTrainings'])
  },
  methods: {
    ...mapActions('training', ['ActionGetTrainings']),
    async search(query) {
      await this.ActionGetTrainings(query)
      this.data = this.trainings
    },
    onSearch(query) {
      if (query) {
        this.data = this.trainings.filter(function (train) {
          return train.title.toUpperCase().includes(query.toUpperCase())
        })
      }
    }
  },
  mounted() {
    //
  },
  created() {
    this.search()
  }
}

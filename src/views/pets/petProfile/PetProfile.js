import LoadingCircle from '../../../common/components/loadingCircle'
import { mapState, mapActions, mapMutations } from 'vuex'
import ConfirmDeleteModal from '../../../common/components/confirmDeleteModal'
import ActionModal from '../../../common/components/Modal/ActionModal/ActionModal'
import FeedbackModal from '../../../common/components/FeedbackModal/FeedbackModal'
import PetProfileComponent from '../../../common/components/PetProfile'
import parser from './../../../common/helpers/PetProfileParser'

const checkedIcon = require('../../../assets/images/feedback/checked.svg')

export default {
  name: 'PetProfile',
  components: {
    LoadingCircle,
    ConfirmDeleteModal,
    PetProfileComponent,
    ActionModal,
    FeedbackModal
  },
  data () {
    return {
      petID: this.$route.params.id,
      confirmDeleteModal: {
        status: false,
        title: 'Confirme exclusão do pet',
        subtitle: '',
        inputTextPlaceholder: 'Nome do pet',
        buttonText: 'Confirmar',
        action: () => {
          this.deletePet()
        },
        toCompare: null,
        hide: () => {
          this.hideConfirmDeleteModal()
        }
      },
      feedbackModal: {
        status: false,
        icon: checkedIcon,
        title: 'Pet excluído',
        subtitle: 'Todos os registros deste pet foram excluídos com sucesso!',
        buttonText: 'Voltar',
        action: () => {
          this.hideFeedbackModal()
          this.goToHome()
        }
      },
      loading: false
    }
  },
  computed: {
    ...mapState('pets', ['petProfile', 'loadingPets', 'deletePetModal', 'mainPet']),
    ...mapState('auth', ['user'])
  },
  async created () {
    this.loading = true
    await this.loadData()
    await this.ActionSetHomeMenuVisibility(false)
    this.loading = false
  },
  beforeRouteLeave (to, from, next) {
    this.ActionSetLoadingPet(true)
    this.ActionSetHomeMenuVisibility(true)
    next()
  },
  methods: {
    ...mapActions('pets', [
      'ActionGetPetById',
      'ActionCommitPet',
      'ActionSetLoadingPet',
      'ActionDeleteMainPet',
      'ActionSetHomeMenuVisibility'
    ]),
    ...mapMutations('pets', {
      SET_DELETEPETMODAL: 'PETS/SET_DELETEPETMODAL',
      SET_MAINPET: 'PETS/SET_MAINPET'
    }),

    ...parser,
    isEmptyObject (obj) {
      return obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype
    },
    async getSubtitle () {
      if (!this.isEmptyObject(this.petProfile.data)) {
        const petName = this.petProfile.data.name
        this.confirmDeleteModal.subtitle = `Insira o nome do animal ${petName} para excluir definitivamente os dados`
      }
    },
    async getMainPetData () {
      return await this.ActionGetPetById(this.$route.params.id)
    },
    async loadData () {
      const res = await this.getMainPetData()
      if (res) {
        this.getSubtitle()
        this.getCompareInfo()
      }
    },
    async deletePet () {
      this.ActionSetLoadingPet(true)
      const res = await this.ActionDeleteMainPet(this.petID)
      if (res) {
        this.SET_MAINPET({})
        this.hideConfirmDeleteModal()
        this.showFeedbackModal()
      }
      this.ActionSetLoadingPet(false)
    },
    async getCompareInfo () {
      if (!this.isEmptyObject(this.petProfile.data)) {
        this.confirmDeleteModal.toCompare = this.petProfile.data.name
      }
    },
    hideDeletePetModal () {
      const modal = {
        modal: false,
        data: {
          title: '',
          message: '',
          btnLabel: '',
          backLabel: ''
        }
      }
      this.SET_DELETEPETMODAL(modal)
    },
    showConfirmDeleteModal () {
      this.hideDeletePetModal()
      this.confirmDeleteModal.status = true
    },
    hideConfirmDeleteModal () {
      this.confirmDeleteModal.status = false
    },
    goToHome () {
      this.$router.push({ name: 'home' })
    },
    hideFeedbackModal () {
      this.feedbackModal.status = false
    },
    showFeedbackModal () {
      this.feedbackModal.status = true
    }
  }
}

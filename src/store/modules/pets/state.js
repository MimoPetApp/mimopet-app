export default {
  hasHeader: true,
  hasFooter: true,
  innerHeader: {
    status: false,
    title: '',
    modal: {}
  },
  loadingPets: true,
  currPet: 0,
  petsList: [],
  petProfile: {
    loading: false,
    data: {},
    error: false,
    success: false
  },
  deletePetModal: {
    modal: false,
    data: {
      title: '',
      message: '',
      btnLabel: '',
      backLabel: ''
    }
  },
  modalPetList: {
    modal: false,
    data: {}
  },
  loadingScreen: false,
  mainPet: {
    loading: false,
    data: {},
    error: false,
    success: false
  },
  petTimeline: {
    loading: false,
    data: {},
    error: false,
    success: false
  }
}

export default {
  hasHeader: true,
  hasFooter: true,
  loadingPets: true,
  currPet: 0,
  petsList: [],
  petProfile: {
    loading: false,
    data: {},
    error: false,
    success: false
  },
  modalDeletePet: {
    modal: false,
    data: {}
  },
  modalPetList: {
    modal: false,
    data: {}
  },
  loadingScreen: false
}

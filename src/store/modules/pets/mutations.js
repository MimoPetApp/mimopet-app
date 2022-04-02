import * as types from './mutation-types'

export default {
  [types.SET_HAS_HEADER] (state, payload) {
    state.hasHeader = payload
  },
  [types.SET_HAS_FOOTER] (state, payload) {
    state.hasFooter = payload
  },
  [types.SET_LOADINGPETS] (state, payload) {
    state.loadingPets = payload
  },
  [types.SET_PETSLIST] (state, payload) {
    state.petsList = payload
  },
  [types.SET_CURRPET] (state, payload) {
    state.currPet = payload
  },
  [types.SET_PROFILEPET] (state, payload) {
    state.petProfile = payload
  },
  [types.SET_DELETEPETMODAL] (state, payload) {
    state.deletePetModal = payload
  },
  [types.SET_MODALDELETEPETLIST] (state, payload) {
    state.modalPetList = payload
  },
  [types.LOADING_GETPETBYID] (state) {
    state.petProfile.loading = true
  },
  [types.SUCCESS_GETPETBYID] (state, payload) {
    state.petProfile.loading = false
    state.petProfile.success = true
    state.petProfile.data = payload
    state.petProfile.error = false
  },
  [types.ERROR_GETPETBYID] (state, payload) {
    state.petProfile.loading = false
    state.petProfile.success = false
    state.petProfile.data = {}
    state.petProfile.error = payload
  },
  [types.LOADING_UPDATEMAINPET] (state) {
    state.mainPet.loading = true
  },
  [types.SUCCESS_UPDATEMAINPET] (state, payload) {
    state.mainPet.loading = false
    state.mainPet.success = true
    state.mainPet.data = payload
    state.mainPet.error = false
  },
  [types.ERROR_UPDATEMAINPET] (state, payload) {
    state.mainPet.loading = false
    state.mainPet.success = false
    state.mainPet.data = {}
    state.mainPet.error = payload
  },
  [types.SET_MAINPET] (state, payload) {
    state.mainPet.data = payload
  },
  [types.LOADING_GETPETTIMELINE] (state) {
    state.petTimeline.loading = true
  },
  [types.SUCCESS_GETPETTIMELINE] (state, payload) {
    state.petTimeline.loading = false
    state.petTimeline.success = true
    state.petTimeline.data = payload
    state.petTimeline.error = false
  },
  [types.ERROR_GETPETTIMELINE] (state, payload) {
    state.petTimeline.loading = false
    state.petTimeline.success = false
    state.petTimeline.data = {}
    state.petTimeline.error = payload
  }
}

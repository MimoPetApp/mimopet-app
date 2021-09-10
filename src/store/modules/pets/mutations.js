import * as types from './mutation-types'

export default {
  [types.SET_HAS_HEADER](state, payload) {
    state.hasHeader = payload
  },
  [types.SET_HAS_FOOTER](state, payload) {
    state.hasFooter = payload
  },
  [types.SET_LOADINGPETS](state, payload) {
    state.loadingPets = payload
  },
  [types.SET_PETSLIST](state, payload) {
    state.petsList = payload
  },
  SET_CURRPET(state, payload) {
    state.currPet = payload
  },
  [types.SET_PROFILEPET](state, payload) {
    state.petProfile = payload
  },
  [types.SET_MODALDELETEPET](state, payload) {
    state.modalDeletePet = payload
  },
  [types.SET_MODALDELETEPETLIST](state, payload) {
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
  }
}

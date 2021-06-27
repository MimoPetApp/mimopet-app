import * as types from './mutation-types'

export default {
  [types.SET_LOADINGPETS] (state, payload) {
    state.loadingPets = payload
  },
  [types.SET_PETSLIST] (state, payload) {
    state.petsList = payload
  },
  [types.SET_PROFILEPET] (state, payload) {
    state.petProfile = payload
  },
  [types.SET_MODALDELETEPET] (state, payload) {
    state.modalDeletePet = payload
  },
  [types.SET_MODALDELETEPETLIST] (state, payload) {
    state.modalPetList = payload
  }
}

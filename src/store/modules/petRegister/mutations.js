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
  },
  [types.SET_BREEDS] (state, payload) {
    state.breeds.data = payload
  },
  [types.LOADING_BREEDS] (state) {
    state.breeds.loading = true
  },
  [types.SUCCESS_BREEDS] (state, payload) {
    state.breeds.loading = false
    state.breeds.success = true
    state.breeds.data = payload
    state.breeds.error = false
  },
  [types.ERROR_BREEDS] (state, payload) {
    state.breeds.loading = false
    state.breeds.success = false
    state.breeds.data = []
    state.breeds.error = payload
  },
  [types.RESET_BREEDS] (state, payload) {
    state.breeds.success = false
  },
  [types.LOADING_REGISTERPET] (state) {
    state.registerPet.loading = true
  },
  [types.SUCCESS_REGISTERPET] (state, payload) {
    state.registerPet.loading = false
    state.registerPet.success = true
    state.registerPet.data = payload
    state.registerPet.error = false
  },
  [types.ERROR_REGISTERPET] (state, payload) {
    state.registerPet.loading = false
    state.registerPet.success = false
    state.registerPet.data = {}
    state.registerPet.error = payload
  },
  [types.RESET_REGISTERPET] (state, payload) {
    state.registerPet.success = false
  }
}

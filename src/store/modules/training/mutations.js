import * as types from './mutation-types'

export default {
  [types.SET_HAS_HEADER] (state, payload) {
    state.hasHeader = payload
  },
  [types.SET_HAS_FOOTER] (state, payload) {
    state.hasFooter = payload
  },
  [types.SET_LOADINGTRAINING] (state, payload) {
    state.loadingTraining = payload
  },
  [types.SET_TRAININGLIST] (state, payload) {
    state.trainingList = payload
  }
}

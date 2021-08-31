import * as types from './mutation-types'

export default {
  [types.SET_TRAININGS](state, payload) {
    state.trainings = payload
  },
  [types.SET_LOADINGTRAININGS](state, payload) {
    state.loadingTrainings = payload
  },
  [types.SET_MODALRESPONSE](state, payload) {
    state.modalResponse = payload
  },
  [types.SET_MODALEVALUATETRAINING](state, payload) {
    state.modalEvaluateTraining = payload
  },
  [types.SET_MODALTRAININGLIMITEXCEEDED](state, payload) {
    state.modalTrainingLimitExceeded = payload
  },
  [types.SET_MODALCANCELTRAINING](state, payload) {
    state.modalCancelTraining = payload
  }
}

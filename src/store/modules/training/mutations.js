import * as types from './mutation-types'

export default {
  [types.SET_TRAININGS](state, payload) {
    state.trainings = payload
  },
  [types.SET_TRAIN](state, payload) {
    state.train = payload
  },
  [types.SET_MODULE](state, payload) {
    state.module = payload
  },
  [types.SET_SLIDE](state, payload) {
    state.slide = payload
  },
  [types.SET_VIDEO](state, payload) {
    state.video = payload
  },
  [types.SET_MODULES](state, payload) {
    state.modules = payload
  },
  [types.SET_MY_TRAININGS](state, payload) {
    state.myTrainings = payload
  },
  [types.SET_BEHAVIOR_DETAILS](state, payload) {
    state.behavior = payload
  },
  SET_HAS_HEADER(state, payload) {
    state.hasHeader = payload
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

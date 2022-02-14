import * as types from './mutation-types'

export default {
  [types.SET_TRAININGS] (state, payload) {
    state.trainings = payload
  },
  [types.SET_TRAIN] (state, payload) {
    state.train = payload
  },
  [types.SET_MODULE] (state, payload) {
    state.module = payload
  },
  [types.SET_SLIDE] (state, payload) {
    state.slide = payload
  },
  [types.SET_VIDEO] (state, payload) {
    state.video = payload
  },
  [types.SET_FEEDBACK] (state, payload) {
    state.feedback = payload
  },
  [types.SET_QUIZ] (state, payload) {
    state.quiz = payload
  },
  [types.SET_EXERCISE] (state, payload) {
    state.exercise = payload
  },
  [types.SET_MODULES] (state, payload) {
    state.modules = payload
  },
  [types.SET_MY_TRAININGS] (state, payload) {
    state.myTrainings = payload
  },
  [types.SET_BEHAVIOR_DETAILS] (state, payload) {
    state.behavior = payload
  },
  SET_HAS_HEADER (state, payload) {
    state.hasHeader = payload
  },
  [types.SET_LOADINGTRAININGS] (state, payload) {
    state.loadingTrainings = payload
  },
  [types.SET_MODALRESPONSE] (state, payload) {
    state.modalResponse = payload
  },
  [types.SET_MODALEVALUATETRAINING] (state, payload) {
    state.modalEvaluateTraining = payload
  },
  [types.SET_MODALTRAININGLIMITEXCEEDED] (state, payload) {
    state.modalTrainingLimitExceeded = payload
  },
  [types.SET_MODALCANCELTRAINING] (state, payload) {
    state.modalCancelTraining = payload
  },
  [types.LOADING_UNSUBSCRIBETRAINING] (state) {
    state.unsubscribeTraining.loading = true
  },
  [types.SUCCESS_UNSUBSCRIBETRAINING] (state, payload) {
    state.unsubscribeTraining.loading = false
    state.unsubscribeTraining.success = true
    state.unsubscribeTraining.data = payload
    state.unsubscribeTraining.error = false
  },
  [types.ERROR_UNSUBSCRIBETRAINING] (state, payload) {
    state.unsubscribeTraining.loading = false
    state.unsubscribeTraining.success = false
    state.unsubscribeTraining.data = {}
    state.unsubscribeTraining.error = payload
  },
  [types.LOADING_QUESTION] (state) {
    state.question.loading = true
  },
  [types.SUCCESS_QUESTION] (state, payload) {
    state.question.loading = false
    state.question.success = true
    state.question.data = payload
    state.question.error = false
  },
  [types.ERROR_QUESTION] (state, payload) {
    state.question.loading = false
    state.question.success = false
    state.question.data = {}
    state.question.error = payload
  }
}

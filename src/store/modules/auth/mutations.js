import * as types from './mutation-types'

export default {
  [types.SET_USER] (state, payload) {
    state.user = payload
  },
  [types.SET_TOKEN] (state, payload) {
    state.token = payload
  },
  [types.SET_TERMS] (state, payload) {
    state.terms = payload
  },
  [types.SET_MODALNOTLOGGED] (state, payload) {
    state.modalNotLogged = payload
  },
  [types.SET_MODALRESPONSEUSER] (state, payload) {
    state.modalResponseUser = payload
  },
  [types.SET_MODALERRORSERVER] (state, payload) {
    state.modalErrorServer = payload
  },
  [types.LOADING_SENDTOKEN] (state) {
    state.sendToken.loading = true
  },
  [types.SUCCESS_SENDTOKEN] (state, payload) {
    state.sendToken.loading = false
    state.sendToken.success = true
    state.sendToken.data = payload
    state.sendToken.error = false
  },
  [types.ERROR_SENDTOKEN] (state, payload) {
    state.sendToken.loading = false
    state.sendToken.success = false
    state.sendToken.data = {}
    state.sendToken.error = payload
  },
  [types.LOADING_CONFIRMTOKEN] (state) {
    state.confirmToken.loading = true
  },
  [types.SUCCESS_CONFIRMTOKEN] (state, payload) {
    state.confirmToken.loading = false
    state.confirmToken.success = true
    state.confirmToken.data = payload
    state.confirmToken.error = false
  },
  [types.ERROR_CONFIRMTOKEN] (state, payload) {
    state.confirmToken.loading = false
    state.confirmToken.success = false
    state.confirmToken.data = {}
    state.confirmToken.error = payload
  }
}

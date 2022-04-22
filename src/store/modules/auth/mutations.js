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
  [types.RESET_ERROR_SENDTOKEN] (state) {
    state.sendToken.error = false
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
  },
  [types.LOADING_RECOVERSENDTOKEN] (state) {
    state.recoverSendToken.loading = true
  },
  [types.SUCCESS_RECOVERSENDTOKEN] (state, payload) {
    state.recoverSendToken.loading = false
    state.recoverSendToken.success = true
    state.recoverSendToken.data = payload
    state.recoverSendToken.error = false
  },
  [types.ERROR_RECOVERSENDTOKEN] (state, payload) {
    state.recoverSendToken.loading = false
    state.recoverSendToken.success = false
    state.recoverSendToken.data = {}
    state.recoverSendToken.error = payload
  },
  [types.RESET_ERROR_RECOVERSENDTOKEN] (state) {
    state.recoverSendToken.error = false
  },
  [types.LOADING_RECOVERCONFIRMTOKEN] (state) {
    state.recoverConfirmToken.loading = true
  },
  [types.SUCCESS_RECOVERCONFIRMTOKEN] (state, payload) {
    state.recoverConfirmToken.loading = false
    state.recoverConfirmToken.success = true
    state.recoverConfirmToken.data = payload
    state.recoverConfirmToken.error = false
  },
  [types.ERROR_RECOVERCONFIRMTOKEN] (state, payload) {
    state.recoverConfirmToken.loading = false
    state.recoverConfirmToken.success = false
    state.recoverConfirmToken.data = {}
    state.recoverConfirmToken.error = payload
  },
  [types.LOADING_UPDATEUSERPASSWORD] (state) {
    state.updateUserPassword.loading = true
  },
  [types.SUCCESS_UPDATEUSERPASSWORD] (state, payload) {
    state.updateUserPassword.loading = false
    state.updateUserPassword.success = true
    state.updateUserPassword.data = payload
    state.updateUserPassword.error = false
  },
  [types.ERROR_UPDATEUSERPASSWORD] (state, payload) {
    state.updateUserPassword.loading = false
    state.updateUserPassword.success = false
    state.updateUserPassword.data = {}
    state.updateUserPassword.error = payload
  }
}

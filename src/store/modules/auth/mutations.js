import * as types from './mutation-types'

export default {
  [types.SET_USER](state, payload) {
    state.user = payload
  },
  [types.SET_TOKEN](state, payload) {
    state.token = payload
  },
  [types.SET_TERMS](state, payload) {
    state.terms = payload
  },
  [types.SET_MODALNOTLOGGED](state, payload) {
    state.modalNotLogged = payload
  },
  [types.SET_MODALRESPONSEUSER](state, payload) {
    state.modalResponseUser = payload
  },
  [types.SET_MODALERRORSERVER](state, payload) {
    state.modalErrorServer = payload
  }
}

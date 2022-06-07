import * as types from './mutation-types'

export default {
  [types.LOADING_OBEDIENCELIST] (state) {
    state.obedienceList.loading = true
  },
  [types.SUCCESS_OBEDIENCELIST] (state, payload) {
    state.obedienceList.loading = false
    state.obedienceList.success = true
    state.obedienceList.data = payload
    state.obedienceList.error = false
  },
  [types.ERROR_OBEDIENCELIST] (state, payload) {
    state.obedienceList.loading = false
    state.obedienceList.success = false
    state.obedienceList.data = []
    state.obedienceList.error = payload
  }
}

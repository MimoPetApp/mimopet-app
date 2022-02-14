import * as types from './mutation-types'

export default {
  [types.LOADING_STEP_COMPLETED] (state) {
    state.loading = true
  },
  [types.SUCCESS_STEP_COMPLETED] (state, payload) {
    state.loading = false
    state.success = true
    state.data = payload
    state.error = false
  },
  [types.ERROR_STEP_COMPLETED] (state, payload) {
    state.loading = false
    state.success = false
    state.data = {}
    state.error = payload
  }
}

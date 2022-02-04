import * as types from './mutation-types'

export default {
  [types.LOADING_GETSTEPUSER] (state) {
    state.loading = true
  },
  [types.SUCCESS_GETSTEPUSER] (state, payload) {
    state.loading = false
    state.success = true
    state.data = payload
    state.error = false
  },
  [types.ERROR_GETSTEPUSER] (state, payload) {
    state.loading = false
    state.success = false
    state.data = {}
    state.error = payload
  }
}

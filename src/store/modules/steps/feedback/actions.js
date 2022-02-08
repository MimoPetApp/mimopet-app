/* eslint-disable */
import * as types from './mutation-types'
import { Http } from '../../../../services/http'
import { Notify } from 'quasar'
import store from '../../../../store/index'

export default {
  async ActionUpdateFeedbackStepCompleted ({ commit }, payload) {
    commit(types.LOADING_STEP_COMPLETED)

    try {
      const response = await Http.put(`feedbacks/${payload.id}/complete`, payload.body)
      commit(types.SUCCESS_STEP_COMPLETED, response.data)
      return true
    } catch (error) {
      commit(types.ERROR_STEP_COMPLETED, error.response.data)
      return false
    }
  }
}

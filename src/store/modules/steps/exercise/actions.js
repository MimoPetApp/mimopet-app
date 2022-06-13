/* eslint-disable */
import * as types from './mutation-types'
import { Http } from '../../../../services/http'
import { Notify } from 'quasar'

export default {
  async ActionUpdateExerciseStepCompleted ({ commit }, payload) {
    // support exercise completed from trainings or obediences
    let { url, body } = payload
    commit(types.LOADING_STEP_COMPLETED)

    try {
      //const response = await Http.put(`exercises/${payload.id}/complete`, payload.body)
      const response = await Http.put(`${url}`, body)
      commit(types.SUCCESS_STEP_COMPLETED, response.data)
      return true
    } catch (error) {
      commit(types.ERROR_STEP_COMPLETED, error.response.data)
      return false
    }
  }
}

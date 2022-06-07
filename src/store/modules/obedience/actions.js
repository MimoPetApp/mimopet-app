/* eslint-disable */
import * as types from './mutation-types'
import { Http } from '../../../services/http'

/* Call GET /obedience-training */
export const ActionListObediences = async ({ commit }) => {
  commit(types.LOADING_OBEDIENCELIST)
  try {
    const response = await Http.get(`obedience-trainings`)
    commit(types.SUCCESS_OBEDIENCELIST, response.data)
    return true
  } catch (error) {
    commit(types.ERROR_OBEDIENCELIST, error.response)
    return false
  }
}

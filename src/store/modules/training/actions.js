/* eslint-disable no-unused-vars */
import * as types from './mutation-types'
import { Http } from '../../../services/http'
import store from '../../../store/index'

/* Call GET /trainings */
export const ActionGetTrainings = async ({ commit, dispatch }, payload) => {
  dispatch('ActionSetLoadingTrainings', true)
  await Http.get('trainings', payload)
    .then(response => {
      commit(types.SET_TRAININGS, response.data)
    })
    .catch(error => {
      dispatch('ActionModalResponse', {
        modal: true,
        data: { msg: 'Erro ao buscar lista de treinamentos' }
      })
      console.error(error)
    })
  dispatch('ActionSetLoadingTrainings', false)
}

export const ActionSetLoadingTrainings = ({ commit }, payload) => {
  commit(types.SET_LOADINGTRAININGS, payload)
}

export const ActionModalResponse = ({ commit }, payload) => {
  commit(types.SET_MODALRESPONSE, payload)
}

export const ActionModalEvaluateTraining = ({ commit }, payload) => {
  commit(types.SET_MODALEVALUATETRAINING, payload)
}

export const ActionModalTrainingLimitExceeded = ({ commit }, payload) => {
  commit(types.SET_MODALTRAININGLIMITEXCEEDED, payload)
}

export const ActionModalCancelTraining = ({ commit }, payload) => {
  commit(types.SET_MODALCANCELTRAINING, payload)
}

/* eslint-disable */
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

/* Call GET /trainings/my */
export const ActionGetMyTrainings = async ({ commit, dispatch }, payload) => {
  dispatch('ActionSetLoadingTrainings', true)
  await Http.get('trainings', payload)
    .then(response => {
      commit(types.SET_MY_TRAININGS, response.data)
    })
    .catch(error => {
      dispatch('ActionModalResponse', {
        modal: true,
        data: { msg: 'Erro ao buscar lista de treinamentos inscritos' }
      })
      console.error(error)
    })
  dispatch('ActionSetLoadingTrainings', false)
}

/* Call GET /trainings/id */
export const ActionGetTraining = async ({ commit, dispatch }, payload) => {
  dispatch('ActionSetLoadingTrainings', true)
  await Http.get(`trainings/${payload}`)
    .then(response => {
      commit(types.SET_BEHAVIOR_DETAILS, response.data)
    })
    .catch(error => {
      dispatch('ActionModalResponse', {
        modal: true,
        data: { msg: 'Erro ao buscar detalhe de treinamento' }
      })
      console.error(error)
    })
  dispatch('ActionSetLoadingTrainings', false)
}

/* Call GET /modules */
export const ActionGetModules = async ({ commit, dispatch }, payload) => {
  dispatch('ActionSetLoadingTrainings', true)
  await Http.get('modules', payload)
    .then(response => {
      commit(types.SET_MODULES, response.data)
    })
    .catch(error => {
      dispatch('ActionModalResponse', {
        modal: true,
        data: { msg: 'Erro ao buscar lista de modulos' }
      })
      console.error(error)
    })
  dispatch('ActionSetLoadingTrainings', false)
}

/* Call GET /modules/:id */
export const ActionGetModule = async ({ commit, dispatch }, payload) => {
  dispatch('ActionSetLoadingTrainings', true)
  await Http.get(`modules/${payload}`)
    .then(response => {
      commit(types.SET_TRAIN, response.data)
    })
    .catch(error => {
      dispatch('ActionModalResponse', {
        modal: true,
        data: { msg: 'Erro ao buscar modulo' }
      })
      console.error(error)
    })
  dispatch('ActionSetLoadingTrainings', false)
}

/* Call GET /slides */
export const ActionGetSlide = async ({ commit, dispatch }, payload) => {
  dispatch('ActionSetLoadingTrainings', true)
  await Http.get(`slides/${payload}`)
    .then(response => {
      commit(types.SET_SLIDE, response.data)
    })
    .catch(error => {
      dispatch('ActionModalResponse', {
        modal: true,
        data: { msg: 'Erro ao buscar slide' }
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

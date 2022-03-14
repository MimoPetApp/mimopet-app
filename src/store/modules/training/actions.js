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
  await Http.get('trainings/index/my', payload)
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

/* Call PUT /trainings/:id/subscribe */
export const ActionSubscribeOnTraining = async ({ commit, dispatch }, payload) => {
  dispatch('ActionSetLoadingTrainings', true)
  await Http.put(`trainings/${payload}/subscribe`).catch(error => {
    dispatch('ActionModalResponse', {
      modal: true,
      data: { msg: 'Erro ao buscar lista de treinamentos inscritos' }
    })
    console.error(error)
  })
  dispatch('ActionSetLoadingTrainings', false)
}

/* Call PUT /trainings/:id/unsubscribe */
export const ActionUnsubscribeTraining = async ({ commit, dispatch }, payload) => {
  commit(types.LOADING_UNSUBSCRIBETRAINING)
  try {
    const response = await Http.put(`trainings/${payload.id}/unsubscribe`, payload.body)
    commit(types.SUCCESS_UNSUBSCRIBETRAINING, response.data)
    return true
  } catch (error) {
    commit(types.ERROR_UNSUBSCRIBETRAINING, error.response)
    return false
  }
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
  await Http.get(`trainings/${payload}/modules`)
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
      commit(types.SET_MODULE, response.data)
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

/* Call GET /slides/:id */
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

/* Call GET /videos/:id */
export const ActionGetVideo = async ({ commit, dispatch }, payload) => {
  dispatch('ActionSetLoadingTrainings', true)
  await Http.get(`videos/${payload}`)
    .then(response => {
      commit(types.SET_VIDEO, response.data)
    })
    .catch(error => {
      dispatch('ActionModalResponse', {
        modal: true,
        data: { msg: 'Erro ao buscar video' }
      })
      console.error(error)
    })
  dispatch('ActionSetLoadingTrainings', false)
}

/* Call GET /feedbacks/:id */
export const ActionGetFeedback = async ({ commit, dispatch }, payload) => {
  dispatch('ActionSetLoadingTrainings', true)
  await Http.get(`feedbacks/${payload}`)
    .then(response => {
      commit(types.SET_FEEDBACK, response.data)
    })
    .catch(error => {
      dispatch('ActionModalResponse', {
        modal: true,
        data: { msg: 'Erro ao buscar feedback' }
      })
      console.error(error)
    })
  dispatch('ActionSetLoadingTrainings', false)
}

/* Call GET /feedbacks/:id */
export const ActionGetQuiz = async ({ commit, dispatch }, payload) => {
  dispatch('ActionSetLoadingTrainings', true)
  await Http.get(`quizzes/${payload}`)
    .then(response => {
      commit(types.SET_QUIZ, response.data)
    })
    .catch(error => {
      dispatch('ActionModalResponse', {
        modal: true,
        data: { msg: 'Erro ao buscar quiz' }
      })
      console.error(error)
    })
  dispatch('ActionSetLoadingTrainings', false)
}

/* Call GET /exercises/:id */
export const ActionGetExercise = async ({ commit, dispatch }, payload) => {
  commit(types.LOADING_EXERCISE)
  try {
    const response = await Http.get(`exercises/${payload}`)
    commit(types.SUCCESS_EXERCISE, response.data)
    return true
  } catch (error) {
    commit(types.ERROR_EXERCISE, error.response)
    return false
  }
}

/* Call GET /questions/:id */
export const ActionGetQuestion = async ({ commit, dispatch }, payload) => {
  commit(types.LOADING_QUESTION)
  try {
    const response = await Http.get(`questions/${payload}`)
    commit(types.SUCCESS_QUESTION, response.data)
    return true
  } catch (error) {
    commit(types.ERROR_QUESTION, error.response)
    return false
  }
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

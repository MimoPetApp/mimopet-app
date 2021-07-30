/* eslint-disable no-unused-vars */
import * as types from './mutation-types'
import { Http } from '../../../services/http'
import { Notify } from 'quasar'
import store from '../../../store/index'
import { setLocalToken, deleteLocalToken } from '../../../services/storage'

export const ActionGetTraining = ({ commit, dispatch }) => {
  return new Promise((resolve, reject) => {
    Http.get('trainings')
      .then(response => {
        commit(types.SET_TRAININGLIST, response.data)
        resolve(response.data)
      })
      .catch(error => {
        console.log('erro', error)
        reject(error.response.data)
      })
  })
}

export const ActionGetTrainingById = ({ commit, dispatch }, payload) => {
  return new Promise((resolve, reject) => {
    Http.get(`trainings/${payload}`)
      .then(response => {
        const trainingData = response.data
        commit(types.SET_TRAININGLIST, trainingData)
        dispatch('ActionSetLoadingTraining', false)
        resolve(trainingData)
        console.log(trainingData)
      })
      .catch(error => {
        console.log(error)
        reject(error.response.data)
      })
  })
}

export const ActionGetModuleById = ({ commit, dispatch }, payload) => {
  return new Promise((resolve, reject) => {
    Http.get(`modules/${payload}`)
      .then(response => {
        const moduleData = response.data
        commit(types.SET_MODULELIST, moduleData)
        dispatch('ActionSetLoadingModule', false)
        resolve(moduleData)
        console.log(moduleData)
      })
      .catch(error => {
        console.log(error)
        reject(error.response.data)
      })
  })
}

export const ActionSetLoadingTraining = ({ commit, dispatch }, payload) => {
  commit(types.SET_LOADINGTRAINING, payload)
}

export const ActionCommitTraining = ({ commit }, payload) => {
  commit(types.SET_TRAININGLIST, payload)
}

export const ActionSetLoadingModule = ({ commit, dispatch }, payload) => {
  commit(types.SET_LOADINGMODULE, payload)
}

export const ActionCommitModule = ({ commit }, payload) => {
  commit(types.SET_MODULELIST, payload)
}

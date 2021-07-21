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

export const ActionSetLoadingTraining = ({ commit, dispatch }, payload) => {
  commit(types.SET_LOADINGTRAINING, payload)
}

export const ActionCommitTraining = ({ commit }, payload) => {
  commit(types.SET_TRAININGLIST, payload)
}

/* eslint-disable no-unused-vars */
import * as types from './mutation-types'
import { Http } from '../../../services/http'
import { Notify } from 'quasar'
import store from '../../../store/index'

export const ActionSetHomeMenuVisibility = ({ commit }, payload) => {
  commit(types.SET_HAS_HEADER, payload)
  commit(types.SET_HAS_FOOTER, payload)
}

export const ActionGetPets = ({ commit, dispatch }) => {
  return new Promise((resolve, reject) => {
    Http.get('pets')
      .then(response => {
        dispatch('ActionCommitPet', response.data)
        dispatch('ActionSetLoadingPet', false)
        resolve(response.data)
      })
      .catch(error => {
        reject(error.response.data)
      })
  })
}

export const ActionCreatePet = async ({ commit, dispatch }, payload) => {
  const res = await Http.post('pets', payload).catch(function (error) {
    return error.response
  })
  return res.data
}

export const ActionGetPetById = async ({ commit, dispatch }, payload) => {
  commit(types.LOADING_GETPETBYID)
  await Http.get(`pets/${payload}`)
    .then(response => {
      commit(types.SUCCESS_GETPETBYID, response.data)
      return true
    })
    .catch(error => {
      commit(types.ERROR_GETPETBYID, error.response)
      return false
    })
}

export const ActionSetLoadingPet = ({ commit, dispatch }, payload) => {
  commit(types.SET_LOADINGPETS, payload)
}

export const ActionCommitPet = ({ commit }, payload) => {
  commit(types.SET_PETSLIST, payload)
}

export const ActionmodalDeletePet = ({ commit }, payload) => {
  commit(types.SET_MODALDELETEPET, payload)
}

export const ActionDeletePet = ({ commit, dispatch }, payload) => {
  dispatch('ActionSetLoadingPet', true)
  Http.delete(`pets/${payload}`)
    .then(response => {
      dispatch('ActionmodalDeletePet', { modal: false, data: {} })
      store.$router.push({ name: 'home' })
    })
    .catch(error => {
      console.log(error)
    })
}

export const ActionPetModalList = ({ commit }, payload) => {
  commit(types.SET_MODALDELETEPETLIST, payload)
}

/* eslint-disable */
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

export const ActionUpdateMainPet = async ({ commit, dispatch }, payload) => {
  commit(types.LOADING_UPDATEMAINPET)
  try {
    const response = await Http.put(`pets/${payload}/select`)
    commit(types.SUCCESS_UPDATEMAINPET, response.data)
    return true
  } catch (error) {
    commit(types.ERROR_UPDATEMAINPET, error.response)
    return false
  }
}

export const ActionGetPetById = async ({ commit, dispatch }, payload) => {
  commit(types.LOADING_GETPETBYID)
  try {
    const response = await Http.get(`pets/${payload}`)
    commit(types.SUCCESS_GETPETBYID, response.data)
    return true
  } catch (error) {
    commit(types.SUCCESS_GETPETBYID, error.response)
    return false
  }
}

export const ActionSetLoadingPet = ({ commit, dispatch }, payload) => {
  commit(types.SET_LOADINGPETS, payload)
}

export const ActionCommitPet = ({ commit }, payload) => {
  commit(types.SET_PETSLIST, payload)
}

export const ActionDeletePetModal = ({ commit }, payload) => {
  commit(types.SET_DELETEPETMODAL, payload)
}

export const ActionDeleteMainPet = async ({ commit, dispatch }, payload) => {
  commit(types.LOADING_UPDATEMAINPET)
  try {
    const response = await Http.delete(`pets/${payload}`)
    commit(types.SUCCESS_UPDATEMAINPET, response.data)
    return true
  } catch (error) {
    commit(types.ERROR_UPDATEMAINPET, error.response)
    return false
  }
}

export const ActionPetModalList = ({ commit }, payload) => {
  commit(types.SET_MODALDELETEPETLIST, payload)
}

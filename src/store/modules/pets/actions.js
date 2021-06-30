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

export const ActionGetPetById = ({ commit, dispatch }, payload) => {
  return new Promise((resolve, reject) => {
    Http.get(`pets/${payload}`)
      .then(response => {
        const pet = response.data[0]
        commit(types.SET_PROFILEPET, pet)
        dispatch('ActionSetLoadingPet', false)
        resolve(pet)
      })
      .catch(error => {
        console.log(error)
        reject(error.response.data)
      })
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
  Http.delete(`pet/${payload}`)
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

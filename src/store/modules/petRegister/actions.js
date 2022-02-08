/* eslint-disable */
import * as types from './mutation-types'
import axios from 'axios'
import { Http } from '../../../services/http'
import { Notify } from 'quasar'
import store from '../../../store/index'

const axiosInstance = axios.create({
  baseURL: process.env.API,
  headers: {
    Accept: 'application/json'
  }
})

export const ActionGetPets = ({ commit, dispatch }) => {
  return new Promise((resolve, reject) => {
    Http.get('pets')
      .then(response => {
        dispatch('ActionCommitPet', response.data)
        dispatch('ActionSetLoadingPet', false)
        resolve(response.data)
      })
      .catch(error => {
        // console.log(error)
        reject(error.response.data)
      })
  })
}

export const ActionGetPetById = ({ commit, dispatch }, payload) => {
  return new Promise((resolve, reject) => {
    Http.get(`pets/${payload}`)
      .then(response => {
        commit(types.SET_PROFILEPET, response.data)
        dispatch('ActionSetLoadingPet', false)
        resolve(response.data)
      })
      .catch(error => {
        // console.log(error)
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
  Http.delete(`pets/${payload}`)
    .then(response => {
      dispatch('ActionmodalDeletePet', { modal: false, data: {} })
      store.$router.push({ name: 'home' })
    })
    .catch(error => {
      // console.log(error)
    })
}

export const ActionPetModalList = ({ commit }, payload) => {
  commit(types.SET_MODALDELETEPETLIST, payload)
}

export const ActionGetBreeds = async ({ commit, dispatch }) => {
  commit(types.LOADING_BREEDS)
  await axiosInstance
    .get('breeds')
    .then(response => {
      commit(types.SUCCESS_BREEDS, response.data)
      return true
    })
    .catch(error => {
      commit(types.ERROR_BREEDS, error.response)
      return false
    })
}

export const ActionRegisterPet = async ({ commit, dispatch }, payload) => {
  commit(types.LOADING_REGISTERPET)
  try {
    let response = await Http.post('pets', payload)
    commit(types.SUCCESS_REGISTERPET, response.data)
    return true
  } catch (error) {
    commit(types.ERROR_REGISTERPET, error.response.data)
    return false
  }
}

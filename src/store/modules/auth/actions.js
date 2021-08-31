/* eslint-disable */
import * as types from './mutation-types'
import { Http } from '../../../services/http'
import { Notify } from 'quasar'
import store from '../../../store/index'
import { setLocalToken, deleteLocalToken } from '../../../services/storage'

export const ActionCreateAccount = async ({ commit, dispatch }, payload) => {
  await Http.post('auth/local/register', payload)
    .then(response => {
      dispatch('ActionModalResponseUser', {
        modal: true,
        data: {
          msg: 'Usuário criado'
        }
      })
      dispatch('ActionLogin', {
        identifier: payload.email,
        password: payload.password
      })
    })
    .catch(error => {
      console.log(error)
      dispatch('ActionModalResponseUser', {
        modal: true,
        data: {
          msg: 'E-mail já cadastrado'
        }
      })
    })
}

export const ActionLogoutUser = async ({ commit }) => {
  deleteLocalToken()
  store.$router.push({ name: 'hub' })
}

export const ActionRefreshUser = async ({ commit, dispatch }) => {
  deleteLocalToken()
  dispatch('ActionModalResponseUser', {
    modal: true,
    data: {
      msg: 'Sessão expirada'
    }
  })
  store.$router.push({ name: 'acesso' })
}

export const ActionLogin = async ({ commit, dispatch }, payload) => {
  await Http.post('auth/local', payload)
    .then(response => {
      setLocalToken(response.data.jwt)
      store.$router.push({ name: 'home' })
      commit(types.SET_USER, response.data.user)
    })
    .catch(error => {
      dispatch('ActionModalResponseUser', {
        modal: true,
        data: { msg: 'E-mail ou senha incorretos' }
      })
      console.log(error)
    })
}

export const ActionGetUser = ({ commit, dispatch }) => {
  return new Promise((resolve, reject) => {
    Http.get('users/me')
      .then(response => {
        commit(types.SET_USER, response.data)
        resolve(response.data)
      })
      .catch(error => {
        console.log('erro', error)
        dispatch('ActionRefreshUser')
        reject(error.response.data)
      })
  })
}

export const ActionGetTermsOfUse = async ({ commit, dispatch }, payload) => {
  await Http.get('terms-of-use', payload)
    .then(response => {
      commit(types.SET_TERMS, response.data)
    })
    .catch(error => {
      dispatch('ActionModalResponseUser', {
        modal: true,
        data: { msg: 'Falha ao carregar termos de uso' }
      })
      console.log(error)
    })
}

export const ActionModalNotLogged = ({ commit }, payload) => {
  commit(types.SET_MODALNOTLOGGED, payload)
}

export const ActionSetTokenAfter = ({ getters }, payload) => {
  Http.defaults.headers.common = {
    Authorization: `Bearer ${getters.getToken}`
  }
}

export const ActionModalResponseUser = ({ commit }, payload) => {
  commit(types.SET_MODALRESPONSEUSER, payload)
}

export const ActionModalErrorServer = ({ commit }, payload) => {
  commit(types.SET_MODALERRORSERVER, payload)
}

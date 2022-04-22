/* eslint-disable */
import * as types from './mutation-types'
import { Http } from '../../../services/http'
import { Notify } from 'quasar'
import store from '../../../store/index'
import { setLocalToken, deleteLocalToken } from '../../../services/storage'

export const ActionCreateAccount = async ({ commit, dispatch }, payload) => {
  try {
    await Http.post('auth/local/register', payload)
    dispatch('ActionLogin', {
      identifier: payload.email,
      password: payload.password
    })
    dispatch('ActionSendToken', {
      email: payload.email
    })
    return true
  } catch (error) {
    dispatch('ActionModalResponseUser', {
      modal: true,
      data: {
        title: 'Atenção',
        message: 'O e-mail informado já está em uso por outro usuário cadastrado',
        btnLabel: 'Corrigir informações'
      }
    })
    return false
  }
  /*
  await Http.post('auth/local/register', payload)
    .then(response => {
      dispatch('ActionModalResponseUser', {
        modal: true,
        data: {
          title: 'Cadastro completo',
          message: 'Usuário criado com sucesso!',
          btnLabel: 'Entrar'
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
          title: 'Atenção',
          message: 'O e-mail informado já está em uso por outro usuário cadastrado',
          btnLabel: 'Corrigir informações'
        }
      })
    })
    */
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
      title: 'Sessão expirada',
      message: 'Por favor, faça seu login novamente',
      btnLabel: 'Ok'
    }
  })
  store.$router.push({ name: 'acesso' })
}

export const ActionLogin = async ({ commit, dispatch }, payload) => {
  try {
    let response = await Http.post('auth/local', payload)
    commit(types.SET_USER, response.data.user)
    setLocalToken(response.data.jwt)
    //store.$router.push({ name: 'home' })
    return true
  } catch (error) {
    dispatch('ActionModalResponseUser', {
      modal: true,
      data: {
        title: 'Credenciais inválidas!',
        message: 'E-mail ou senha incorretos',
        btnLabel: 'Ok'
      }
    })
    return false
  }

  /*
  await Http.post('auth/local', payload)
    .then(response => {
      setLocalToken(response.data.jwt)
      //store.$router.push({ name: 'home' })
      commit(types.SET_USER, response.data.user)
    })
    .catch(error => {
      dispatch('ActionModalResponseUser', {
        modal: true,
        data: {
          title: 'Credenciais inválidas!',
          message: 'E-mail ou senha incorretos',
          btnLabel: 'Ok'
        }
      })
      console.log(error)
    })
    */
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
        data: {
          title: 'Falha ao carregar termos de uso da plataforma',
          message: 'Tente novamente mais tarde',
          btnLabel: 'Ok'
        }
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

export const ActionSendToken = async ({ commit, dispatch }, payload) => {
  commit(types.LOADING_SENDTOKEN)
  try {
    const response = await Http.post(`users/email/verify`, payload)
    commit(types.SUCCESS_SENDTOKEN, response.data)
    return true
  } catch (error) {
    commit(types.ERROR_SENDTOKEN, error.response)
    return false
  }
}

export const ActionConfirmToken = async ({ commit, dispatch }, payload) => {
  commit(types.LOADING_CONFIRMTOKEN)
  try {
    const response = await Http.post(`users/email/confirm-token`, payload)
    commit(types.SUCCESS_CONFIRMTOKEN, response.data)
    return true
  } catch (error) {
    commit(types.ERROR_CONFIRMTOKEN, error.response)
    return false
  }
}

export const ActionRecoverSendToken = async ({ commit, dispatch }, payload) => {
  commit(types.LOADING_RECOVERSENDTOKEN)
  try {
    const response = await Http.post(`users/password/reset`, payload)
    commit(types.SUCCESS_RECOVERSENDTOKEN, response.data)
    return true
  } catch (error) {
    commit(types.ERROR_RECOVERSENDTOKEN, error.response)
    return false
  }
}

export const ActionRecoverConfirmToken = async ({ commit, dispatch }, payload) => {
  commit(types.LOADING_RECOVERCONFIRMTOKEN)
  try {
    const response = await Http.post(`users/password/confirm-token`, payload)
    commit(types.SUCCESS_RECOVERCONFIRMTOKEN, response.data)
    return true
  } catch (error) {
    commit(types.ERROR_RECOVERCONFIRMTOKEN, error.response)
    return false
  }
}

export const ActionUpdateUserPassword = async ({ commit, dispatch }, payload) => {
  commit(types.LOADING_UPDATEUSERPASSWORD)
  try {
    const response = await Http.put(`/users/password/update`, payload)
    commit(types.SUCCESS_UPDATEUSERPASSWORD, response.data)
    return true
  } catch (error) {
    commit(types.ERROR_UPDATEUSERPASSWORD, error.response)
    return false
  }
}

/* eslint-disable */
import * as types from './mutation-types'
import { Http } from '../../../services/http'
import { Notify } from 'quasar'
import store from '../../../store/index'

export const ActionCreateStepUser = async ({ commit, dispatch }, payload) => {
  const res = await Http.post('step-users', payload).catch(function (error) {
    return error.response
  })
  return res.data
}

export const ActionGetStepUser = async ({ commit, dispatch }, payload) => {
  const res = await Http.get('step-users', { params: { ...payload } }).catch(function (error) {
    return error.response
  })
  return res.data
}

export const ActionUpdateStepUser = async ({ commit, dispatch }, payload) => {
  const res = await Http.put(`step-users/${payload.id}`, payload.body).catch(function (error) {
    return error.response
  })
  return res.data
}

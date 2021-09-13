/* eslint-disable */
import * as types from './mutation-types'
import { Http } from '../../../services/http'
import store from '../../../store/index'

const sampleTrain = {
  id: 1,
  title: 'Preparação para primeiro passeio',
  description:
    'Liberdade para você e seu pet caminharem em ambientes como galerias, lojas e shoppings.',
  author: 'lorem ipsum',
  published: '2021-06-06',
  rating: 5,
  category: 'adults',
  published_at: '2021-06-06T22:13:10.882Z',
  created_at: '2021-06-06T22:13:06.108Z',
  updated_at: '2021-06-30T04:29:26.272Z',
  steps: [
    {
      __component: 'curriculum.lecture',
      id: 2,
      title: 'Descobrindo seu cão',
      description: 'lorem ipsum',
      video: {
        id: 2,
        name: 'Gravação de tela de 28-06-2021 21_18_24.webm',
        alternativeText: '',
        caption: '',
        width: null,
        height: null,
        formats: null,
        hash: 'Gravacao_de_tela_de_28_06_2021_21_18_24_9247511194',
        ext: '.webm',
        mime: 'video/webm',
        size: 868.45,
        url: '/uploads/Gravacao_de_tela_de_28_06_2021_21_18_24_9247511194.webm',
        previewUrl: null,
        provider: 'local',
        provider_metadata: null,
        created_at: '2021-06-29T00:20:51.853Z',
        updated_at: '2021-06-29T00:20:51.866Z'
      },
      users_completed: []
    },
    {
      __component: 'curriculum.quizz',
      id: 2,
      name: 'Introdução do comando',
      description: 'O que significa o seu cachorro levantar a pata?',
      alternatives: [
        { text: 'Felicidade e alegria', isCorrect: true },
        { text: 'Raiva e agressividade', isCorrect: false },
        { text: 'Medo e estress', isCorrect: true }
      ]
    },
    {
      __component: 'curriculum.repetitions',
      id: 1,
      author: 'Raphael Maia',
      publish_date: '2021-06-10',
      title: 'Comando sentar',
      subtitle: 'Sessões de 4 repetições',
      description: '10-20 min cada sessão',
      video: [
        {
          id: 2,
          name: 'Gravação de tela de 28-06-2021 21_18_24.webm',
          alternativeText: '',
          caption: '',
          width: null,
          height: null,
          formats: null,
          hash: 'Gravacao_de_tela_de_28_06_2021_21_18_24_9247511194',
          ext: '.webm',
          mime: 'video/webm',
          size: 868.45,
          url: '/uploads/Gravacao_de_tela_de_28_06_2021_21_18_24_9247511194.webm',
          previewUrl: null,
          provider: 'local',
          provider_metadata: null,
          created_at: '2021-06-29T00:20:51.853Z',
          updated_at: '2021-06-29T00:20:51.866Z'
        }
      ],
      sessions: []
    }
  ],
  thumbnail: {
    id: 1,
    name: 'maxresdefault.jpg',
    alternativeText: '',
    caption: '',
    width: 626,
    height: 417,
    formats: {
      thumbnail: {
        name: 'thumbnail_maxresdefault.jpg',
        hash: 'thumbnail_maxresdefault_0a87b06c97',
        ext: '.jpg',
        mime: 'image/jpeg',
        width: 234,
        height: 156,
        size: 11.24,
        path: null,
        url: '/uploads/thumbnail_maxresdefault_0a87b06c97.jpg'
      },
      small: {
        name: 'small_maxresdefault.jpg',
        hash: 'small_maxresdefault_0a87b06c97',
        ext: '.jpg',
        mime: 'image/jpeg',
        width: 500,
        height: 333,
        size: 36.87,
        path: null,
        url: '/uploads/small_maxresdefault_0a87b06c97.jpg'
      }
    },
    hash: 'maxresdefault_0a87b06c97',
    ext: '.jpg',
    mime: 'image/jpeg',
    size: 48.05,
    url: '/uploads/maxresdefault_0a87b06c97.jpg',
    previewUrl: null,
    provider: 'local',
    provider_metadata: null,
    created_at: '2021-06-06T22:12:48.155Z',
    updated_at: '2021-08-29T14:29:16.638Z'
  },
  modules: [
    {
      id: 1,
      name: 'Levar o pet ao shopping',
      published_at: '2021-06-30T04:05:41.740Z',
      created_at: '2021-06-30T04:05:36.408Z',
      updated_at: '2021-06-30T04:27:27.895Z'
    }
  ]
}

/* Call GET /modules */
export const ActionGetTrainings = async ({ commit, dispatch }, payload) => {
  dispatch('ActionSetLoadingTrainings', true)
  await Http.get('modules', payload)
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

/* Call GET /modules/my */
export const ActionGetMyTrainings = async ({ commit, dispatch }, payload) => {
  dispatch('ActionSetLoadingTrainings', true)
  await Http.get('modules', payload)
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

/* Call GET /modules/id */
export const ActionGetTraining = async ({ commit, dispatch }, payload) => {
  dispatch('ActionSetLoadingTrainings', true)
  await Http.get(`modules/${payload}`)
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
export const ActionGetModule = async ({ commit, dispatch }, payload) => {
  dispatch('ActionSetLoadingTrainings', true)
  await Http.get(`trainings/${payload}`)
    .then(response => {
      commit(types.SET_TRAIN, response.data)
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

/* Call GET /slides */
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

/* Call GET /modules */
export const ActionGetModules = async ({ commit, dispatch }, payload) => {
  dispatch('ActionSetLoadingTrainings', true)
  await Http.get('trainings', payload)
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

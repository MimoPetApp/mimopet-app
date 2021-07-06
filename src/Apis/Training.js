import Api from './Apis'

export default {
  all() {
    return Api.get()
  },

  show(id) {
    return Api.get(`${id}`)
  }
}

export default {
  getMainPetId (state) {
    const obj = state.mainPet.data
    if (obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype) {
      return null
    } else {
      return state.mainPet.data.id
    }
  },
  getPetTimeline (state) {
    return state.petTimeline.data || null
  }
}

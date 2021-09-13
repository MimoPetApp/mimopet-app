export default {
  _calculateAge(birthday) {
    // birthday is a date
    const ageDifMs = Date.now() - birthday.getTime()
    const ageDate = new Date(ageDifMs) // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  },
  _noMask(val) {
    if (!val) return ''
    return val.replace(/[^\d]+/g, '')
  },
  _getImageUrl(image) {
    if (image) {
      return `${process.env.API.slice(0, -1)}${image.url}`
    }
    return ''
  }
}

import MediaHelper from './media'
export default {
  _calculateAge (birthday) {
    // birthday is a date
    const ageDifMs = Date.now() - birthday.getTime()
    const ageDate = new Date(ageDifMs) // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  },
  _noMask (val) {
    if (!val) return ''
    return val.replace(/[^\d]+/g, '')
  },
  async _getMediaUrl (media) {
    if (media) {
      if (media.url.includes('https')) {
        const videoMedia = new MediaHelper(media)
        if (videoMedia.isVideo()) {
          return await videoMedia.getOptimizerVideoUrl()
        }
        return media.url
      }
      return `${process.env.API.slice(0, -1)}${media.url}`
    }
    return ''
  }
}

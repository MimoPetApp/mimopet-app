import axios from 'axios'

export default class MediaHelper {
  constructor(media) {
    this.media = media
  }

  async doesFileExist(urlToFile) {
    try {
      const res = await axios.head(urlToFile)
      return res.status === 200
    } catch (error) {
      console.error(error)
    }
    return false
  }

  getWebmUrl(urlToFile) {
    const re = /(?:\.([^.]+))?$/
    const ext = re.exec(urlToFile)[1]
    return urlToFile.replace(ext, 'webm')
  }

  isVideo() {
    return this.media.mime.includes('video')
  }

  async getOptimizerVideoUrl() {
    if (this.media.mime !== 'video/webm') {
      const webmUrl = this.getWebmUrl(this.media.url)
      const fileExist = await this.doesFileExist(webmUrl)
      if (fileExist) return webmUrl
    }
    return this.media.url
  }
}

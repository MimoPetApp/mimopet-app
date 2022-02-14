export default {
  parseBreed (breed) {
    return breed === 'unknown' ? this.$t('petProfile.extra.unknownBreed') : breed
  },
  parseProfilePet (profile) {
    switch (profile) {
      case 'feline':
        return this.$t('petProfile.profile.feline')
      case 'canine':
        return this.$t('petProfile.profile.canine')
      default:
        return ''
    }
  },
  parseDetails (details) {
    switch (details) {
      case 'adopted':
        return this.$t('petProfile.details.adopted')
      case 'neutered':
        return this.$t('petProfile.details.neutered')
      case 'deficiency':
        return this.$t('petProfile.details.deficiency')
      case 'service':
        return this.$t('petProfile.details.service')
      default:
        return this.$t('petProfile.details.none')
    }
  },
  parseGender (gender) {
    switch (gender) {
      case 'male':
        return this.$t('petProfile.gender.male')
      case 'female':
        return this.$t('petProfile.gender.female')
      default:
        return ''
    }
  },
  parseProfileThumbnail (image) {
    if (image) {
      return `${process.env.API.slice(0, -1)}${image.formats.thumbnail.url}`
    }
    return require('../../assets/images/default_pet_avatar.svg') // 'https://i.pinimg.com/originals/24/cb/7f/24cb7f9b961a5bad99662e149d8bb978.png'
  },
  getAge (age) {
    switch (age) {
      case 'SENIOR':
        return 'Adulto'
      default:
        return 'Filhote'
    }
  }
}

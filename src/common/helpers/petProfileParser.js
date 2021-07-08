export default {
  parseBreed(breed) {
    return breed === 'unknown' ? this.$t('petProfile.extra.unknownBreed') : breed
  },
  parseProfilePet(profile) {
    switch (profile) {
      case 'feline':
        return this.$t('petProfile.profile.feline')
      case 'canine':
        return this.$t('petProfile.profile.canine')
      default:
        return ''
    }
  },
  parseDetails(details) {
    switch (details) {
      case 'adopted':
        return this.$t('petProfile.details.adopted')
      case 'castrated':
        return this.$t('petProfile.details.castrated')
      case 'withSomeDisability':
        return this.$t('petProfile.details.withSomeDisability')
      default:
        return ''
    }
  },
  parseGender(gender) {
    switch (gender) {
      case 'male':
        return this.$t('petProfile.gender.male')
      case 'female':
        return this.$t('petProfile.gender.female')
      default:
        return ''
    }
  },
  parseProfileThumbnail(image) {
    return `${process.env.API.slice(0, -1)}${image.formats.thumbnail.url}`
  },
  getAge(age) {
    switch (age) {
      case 'SENIOR':
        return 'Adulto'
      default:
        return 'Filhote'
    }
  }
}

export default {
  parseTrainingCategory(category) {
    switch (category) {
      case 'adults':
        return 'Adultos'
      case 'puppy':
        return 'Filhotes'
      case 'premium':
        return 'Premium'
      default:
        return category
    }
  },

  parseTrainingCategoryColor(category) {
    switch (category) {
      // eslint-disable-next-line
      default:
      case 'adults':
        return 'primary'
      case 'puppy':
        return 'secondary'
      case 'premium':
        return 'highlight'
    }
  },

  parseTrainingThumbnail(image) {
    if (image) {
      return `${process.env.API.slice(0, -1)}${image.formats.thumbnail.url}`
    }
    return 'https://i.pinimg.com/originals/24/cb/7f/24cb7f9b961a5bad99662e149d8bb978.png'
  }
}

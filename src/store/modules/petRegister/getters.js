export const getBreeds = ({ breeds }) => {
  const aux = []
  if (breeds.data.length > 0) {
    breeds.data.forEach(breed => {
      aux.push(breed.breed)
    })
  }
  return aux
}

import { getLocalToken } from '../services/storage'

const autentication = (to, from, next) => {
  if (getLocalToken() == null) {
    next({
      name: 'hub',
      query: { redirect: to.name }
    })
  } else {
    next()
  }
}

export { autentication }

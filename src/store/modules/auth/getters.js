export const verifyToken = ({ token }) => {
  return Boolean(token)
}

export const getToken = ({ token }) => {
  return token
}

export const getTerms = ({ terms }) => {
  return terms
}

export const getConfirmToken = ({ confirmToken }) => {
  return confirmToken.data
}

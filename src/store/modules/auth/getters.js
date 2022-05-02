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

export const getSendToken = ({ sendToken }) => {
  return sendToken.data
}

export const getSendTokenError = ({ sendToken }) => {
  return sendToken.error
}

export const getRecoverSendToken = ({ recoverSendToken }) => {
  return recoverSendToken.data
}

export const getRecoverSendTokenError = ({ recoverSendToken }) => {
  return recoverSendToken.error
}

export const getRecoverConfirmToken = ({ recoverConfirmToken }) => {
  return recoverConfirmToken.data
}

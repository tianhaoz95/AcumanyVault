import isFirebaseAuthenticated from 'services/authentication/firebase/is_auth'

function isAuthenticated (providerName) {
  if (providerName === 'firebase') {
    return isFirebaseAuthenticated()
  } else {
    const err = 'Provider' + providerName + 'not supported'
    throw err
  }
}

export default isAuthenticated

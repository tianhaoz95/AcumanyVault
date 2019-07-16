import isFirebaseAuthenticated from 'services/authentication/firebase/is_auth'

async function isAuthenticated (providerName) {
  if (providerName === 'firebase') {
    const user = await isFirebaseAuthenticated()
    return user
  } else {
    const err = 'Provider' + providerName + 'not supported'
    throw err
  }
}

export default isAuthenticated

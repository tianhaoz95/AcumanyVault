import firebaseCreateUser from './firebase/createUser'

function createUser(providerName) {
  if (providerName === 'firebase') {
    firebaseCreateUser()
  } else {
    const err = 'Provider' + providerName + 'not supported'
    throw err
  }
}

export default createUser
import firebaseCreateUser from './firebase/createUser'

function createUser (providerName, username) {
  return new Promise((resolve, reject) => {
    if (providerName === 'firebase') {
      firebaseCreateUser(username)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    } else {
      const err = 'Provider ' + providerName + ' not supported'
      reject(err)
    }
  })
}

export default createUser

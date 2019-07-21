import * as firebase from 'firebase/app'
import 'firebase/auth'

function isFirebaseAuthenticated () {
  return new Promise((resolve, reject) => {
    try {
      firebase.auth().onAuthStateChanged((user) => {
        resolve(user)
      })
    } catch (err) {
      reject(err)
    }
  })
}

export default isFirebaseAuthenticated

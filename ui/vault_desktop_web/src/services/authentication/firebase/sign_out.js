import * as firebase from 'firebase/app'
import 'firebase/auth'

function firebaseSignOut () {
  return new Promise((resolve, reject) => {
    firebase.auth().signOut()
      .then(() => {
        resolve()
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export default firebaseSignOut

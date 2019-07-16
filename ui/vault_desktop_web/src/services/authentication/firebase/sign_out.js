import * as firebase from 'firebase'
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

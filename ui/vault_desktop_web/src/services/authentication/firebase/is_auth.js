import * as firebase from 'firebase'
import 'firebase/auth'

function isFirebaseAuthenticated () {
  var user = firebase.auth().currentUser
  user = true
  return user
}

export default isFirebaseAuthenticated

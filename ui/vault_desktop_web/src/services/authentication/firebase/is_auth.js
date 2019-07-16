import * as firebase from 'firebase'
import 'firebase/auth'

function isFirebaseAuthenticated () {
  var user = firebase.auth().currentUser
  return !!user
}

export default isFirebaseAuthenticated

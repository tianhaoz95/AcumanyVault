import * as firebase from 'firebase/app'
import 'firebase/firestore'

import getRunningMode from 'services/utility/get_running_mode'

function getUserCollection () {
  const runningMode = getRunningMode()
  switch (runningMode) {
    case 'unittest':
      return 'user_unittest'
    default:
      const errMsg = 'Unknown running mode'
      throw errMsg
  }
}

function firebaseCreateUser (username) {
  return new Promise((resolve, reject) => {
    const userCollection = getUserCollection()
    const db = firebase.firestore()
    const userRef = db.collection(userCollection).doc(username)
    userRef.set({
      github_username: username,
      watch_projects: []
    })
      .then()
      .catch()
    return userRef
  })
}

export default firebaseCreateUser

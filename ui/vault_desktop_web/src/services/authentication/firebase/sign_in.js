import * as firebase from 'firebase'
import 'firebase/auth'

function signInWithGitHub () {
  return new Promise((resolve, reject) => {
    var provider = new firebase.auth.GithubAuthProvider()
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        var token = result.credential.accessToken
        var user = result.user
        resolve({
          user: user,
          token: token
        })
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export default signInWithGitHub

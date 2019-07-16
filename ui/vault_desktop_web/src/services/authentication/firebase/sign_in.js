import * as firebase from 'firebase'
import 'firebase/auth'

function signInWithGitHub () {
  return new Promise((resolve, reject) => {
    var provider = new firebase.auth.GithubAuthProvider()
    provider.addScope('repo')
    firebase.auth().setPersistence(
      firebase.auth.Auth.Persistence.LOCAL
    )
      .then(() => {
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
      .catch((err) => {
        reject(err)
      })
  })
}

export default signInWithGitHub

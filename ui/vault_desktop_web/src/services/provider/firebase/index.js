import * as firebase from 'firebase/app'

import getFbConfig from 'services/provider/firebase/config'

function initFirebase () {
  const fbConfig = getFbConfig()
  firebase.initializeApp(fbConfig)
}

export default initFirebase

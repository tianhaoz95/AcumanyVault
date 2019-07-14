import * as firebase from 'firebase/app'

import fbConfig from 'services/provider/firebase/config'

function initFirebase () {
  firebase.initializeApp(fbConfig)
}

export default initFirebase

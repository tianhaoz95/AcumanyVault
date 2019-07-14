import initFirebase from 'services/provider/firebase'

function initProvider (providerName) {
  return new Promise((resolve, reject) => {
    if (providerName === 'firebase') {
      try {
        initFirebase()
        resolve('Firebase initialized')
      } catch (err) {
        reject(err)
      }
    } else {
      const err = 'Provider' + providerName + 'not supported'
      reject(err)
    }
  })
}

export default initProvider

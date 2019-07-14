import initFirebase from 'services/provider/firebase'

function initProvider (providerName) {
  return new Promise((resolve, reject) => {
    if (providerName === 'firebase') {
      try {
        initFirebase()
        resolve()
      } catch (err) {
        reject(err)
      }
    } else {
      const err = new Error('Provider' + providerName + 'not supported')
      reject(err)
    }
  })
}

export default initProvider

import initFirebase from 'services/provider/firebase'

async function initProvider (providerName) {
  if (providerName === 'firebase') {
    initFirebase()
  } else {
    const err = 'Provider' + providerName + 'not supported'
    throw err
  }
}

export default initProvider

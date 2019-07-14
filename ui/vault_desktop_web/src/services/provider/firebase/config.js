function getFbConfig () {
  const fbConfig = {
    apiKey: 'unknown',
    authDomain: 'unknown',
    databaseURL: 'unknown',
    projectId: 'unknown',
    storageBucket: 'unknown',
    messagingSenderId: 'unknown',
    appId: 'unknown'
  }
  if (process.env.FB_API_KEY) {
    fbConfig.apiKey = process.env.FB_API_KEY
  } else {
    throw new Error('FB_API_KEY not set')
  }
  if (process.env.FB_AUTH_DOMAIN) {
    fbConfig.authDomain = process.env.FB_AUTH_DOMAIN
  } else {
    throw new Error('FB_AUTH_DOMAIN not set')
  }
  if (process.env.FB_DB_URL) {
    fbConfig.databaseURL = process.env.FB_DB_URL
  } else {
    throw new Error('FB_DB_URL not set')
  }
  if (process.env.FB_PROJ_ID) {
    fbConfig.projectId = process.env.FB_PROJ_ID
  } else {
    throw new Error('FB_PROJ_ID not set')
  }
  if (process.env.FB_BUCKET) {
    fbConfig.storageBucket = process.env.FB_BUCKET
  } else {
    throw new Error('FB_BUCKET not set')
  }
  if (process.env.FB_MSG_ID) {
    fbConfig.messagingSenderId = process.env.FB_MSG_ID
  } else {
    throw new Error('FB_MSG_ID not set')
  }
  if (process.env.FB_APP_ID) {
    fbConfig.appId = process.env.FB_APP_ID
  } else {
    throw new Error('FB_APP_ID not set')
  }
  return fbConfig
}

export default getFbConfig

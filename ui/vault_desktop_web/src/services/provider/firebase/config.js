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
  if (process.env.REACT_APP_FB_API_KEY) {
    fbConfig.apiKey = process.env.REACT_APP_FB_API_KEY
  } else {
    if (process.env.STORYBOOK_FB_API_KEY) {
      fbConfig.apiKey = process.env.STORYBOOK_FB_API_KEY
    } else {
      throw new Error('REACT_APP_FB_API_KEY/STORYBOOK_APP_FB_API_KEY not set')
    }
  }
  if (process.env.REACT_APP_FB_AUTH_DOMAIN) {
    fbConfig.authDomain = process.env.REACT_APP_FB_AUTH_DOMAIN
  } else {
    if (process.env.STORYBOOK_FB_AUTH_DOMAIN) {
      fbConfig.authDomain = process.env.STORYBOOK_FB_AUTH_DOMAIN
    } else {
      throw new Error('REACT_APP_FB_AUTH_DOMAIN/STORYBOOK_FB_AUTH_DOMAIN not set')
    }
  }
  if (process.env.REACT_APP_FB_DB_URL) {
    fbConfig.databaseURL = process.env.REACT_APP_FB_DB_URL
  } else {
    if (process.env.STORYBOOK_FB_DB_URL) {
      fbConfig.databaseURL = process.env.STORYBOOK_FB_DB_URL
    } else {
      throw new Error('REACT_APP_FB_DB_URL not set')
    }
  }
  if (process.env.REACT_APP_FB_PROJ_ID) {
    fbConfig.projectId = process.env.REACT_APP_FB_PROJ_ID
  } else {
    if (process.env.STORYBOOK_FB_PROJ_ID) {
      fbConfig.projectId = process.env.STORYBOOK_FB_PROJ_ID
    } else {
      throw new Error('REACT_APP_FB_PROJ_ID not set')
    }
  }
  if (process.env.REACT_APP_FB_BUCKET) {
    fbConfig.storageBucket = process.env.REACT_APP_FB_BUCKET
  } else {
    if (process.env.STORYBOOK_FB_BUCKET) {
      fbConfig.storageBucket = process.env.STORYBOOK_FB_BUCKET
    } else {
      throw new Error('REACT_APP_FB_BUCKET not set')
    }
  }
  if (process.env.REACT_APP_FB_MSG_ID) {
    fbConfig.messagingSenderId = process.env.REACT_APP_FB_MSG_ID
  } else {
    if (process.env.STORYBOOK_FB_MSG_ID) {
      fbConfig.messagingSenderId = process.env.STORYBOOK_FB_MSG_ID
    } else {
      throw new Error('REACT_APP_FB_MSG_ID not set')
    }
  }
  if (process.env.REACT_APP_FB_APP_ID) {
    fbConfig.appId = process.env.REACT_APP_FB_APP_ID
  } else {
    if (process.env.STORYBOOK_FB_APP_ID) {
      fbConfig.appId = process.env.RSTORYBOOKFB_APP_ID
    } else {
      throw new Error('REACT_APP_FB_APP_ID not set')
    }
  }
  console.log('Using Firebase config: ', fbConfig)
  return fbConfig
}

export default getFbConfig

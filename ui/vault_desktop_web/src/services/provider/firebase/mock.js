export function setDummyFbEnv () {
  process.env.FB_API_KEY = 'DUMMY'
  process.env.FB_AUTH_DOMAIN = 'DUMMY'
  process.env.FB_DB_URL = 'DUMMY'
  process.env.FB_PROJ_ID = 'DUMMY'
  process.env.FB_BUCKET = 'DUMMY'
  process.env.FB_MSG_ID = 'DUMMY'
  process.env.FB_APP_ID = 'DUMMY'
}

export function unsetDummyFbEnv () {
  delete process.env.FB_API_KEY
  delete process.env.FB_AUTH_DOMAIN
  delete process.env.FB_DB_URL
  delete process.env.FB_PROJ_ID
  delete process.env.FB_BUCKET
  delete process.env.FB_MSG_ID
  delete process.env.FB_APP_ID
}

export function setDummyFbEnv () {
  process.env.REACT_APP_FB_API_KEY = 'DUMMY'
  process.env.REACT_APP_FB_AUTH_DOMAIN = 'DUMMY'
  process.env.REACT_APP_FB_DB_URL = 'DUMMY'
  process.env.REACT_APP_FB_PROJ_ID = 'DUMMY'
  process.env.REACT_APP_FB_BUCKET = 'DUMMY'
  process.env.REACT_APP_FB_MSG_ID = 'DUMMY'
  process.env.REACT_APP_FB_APP_ID = 'DUMMY'

  process.env.STORYBOOK_FB_API_KEY = 'DUMMY'
  process.env.STORYBOOK_FB_AUTH_DOMAIN = 'DUMMY'
  process.env.STORYBOOK_FB_DB_URL = 'DUMMY'
  process.env.STORYBOOK_FB_PROJ_ID = 'DUMMY'
  process.env.STORYBOOK_FB_BUCKET = 'DUMMY'
  process.env.STORYBOOK_FB_MSG_ID = 'DUMMY'
  process.env.STORYBOOK_FB_APP_ID = 'DUMMY'
}

export function unsetDummyFbEnv () {
  delete process.env.REACT_APP_FB_API_KEY
  delete process.env.REACT_APP_FB_AUTH_DOMAIN
  delete process.env.REACT_APP_FB_DB_URL
  delete process.env.REACT_APP_FB_PROJ_ID
  delete process.env.REACT_APP_FB_BUCKET
  delete process.env.REACT_APP_FB_MSG_ID
  delete process.env.REACT_APP_FB_APP_ID

  delete process.env.STORYBOOK_FB_API_KEY
  delete process.env.STORYBOOK_FB_AUTH_DOMAIN
  delete process.env.STORYBOOK_FB_DB_URL
  delete process.env.STORYBOOK_FB_PROJ_ID
  delete process.env.STORYBOOK_FB_BUCKET
  delete process.env.STORYBOOK_FB_MSG_ID
  delete process.env.STORYBOOK_FB_APP_ID
}

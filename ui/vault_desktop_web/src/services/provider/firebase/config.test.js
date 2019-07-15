import getFbConfig from 'services/provider/firebase/config'
import { setDummyFbEnv, unsetDummyFbEnv } from 'services/provider/firebase/mock'

test('init Firebase config without FB_API_KEY', () => {
  setDummyFbEnv()
  delete process.env.REACT_APP_FB_API_KEY
  delete process.env.STORYBOOK_FB_API_KEY
  expect(getFbConfig).toThrow()
  unsetDummyFbEnv()
})

test('init Firebase config without FB_AUTH_DOMAIN', () => {
  setDummyFbEnv()
  delete process.env.REACT_APP_FB_AUTH_DOMAIN
  delete process.env.STORYBOOK_FB_AUTH_DOMAIN
  expect(getFbConfig).toThrow()
  unsetDummyFbEnv()
})

test('init Firebase config without FB_DB_URL', () => {
  setDummyFbEnv()
  delete process.env.REACT_APP_FB_DB_URL
  delete process.env.STORYBOOK_FB_DB_URL
  expect(getFbConfig).toThrow()
  unsetDummyFbEnv()
})

test('init Firebase config without FB_PROJ_ID', () => {
  setDummyFbEnv()
  delete process.env.REACT_APP_FB_PROJ_ID
  delete process.env.STORYBOOK_FB_PROJ_ID
  expect(getFbConfig).toThrow()
  unsetDummyFbEnv()
})

test('init Firebase config without FB_BUCKET', () => {
  setDummyFbEnv()
  delete process.env.REACT_APP_FB_BUCKET
  delete process.env.STORYBOOK_FB_BUCKET
  expect(getFbConfig).toThrow()
  unsetDummyFbEnv()
})

test('init Firebase config without FB_MSG_ID', () => {
  setDummyFbEnv()
  delete process.env.REACT_APP_FB_MSG_ID
  delete process.env.STORYBOOK_FB_MSG_ID
  expect(getFbConfig).toThrow()
  unsetDummyFbEnv()
})

test('init Firebase config without FB_APP_ID', () => {
  setDummyFbEnv()
  delete process.env.REACT_APP_FB_APP_ID
  delete process.env.STORYBOOK_FB_APP_ID
  expect(getFbConfig).toThrow()
  unsetDummyFbEnv()
})

import getFbConfig from 'services/provider/firebase/config'
import { setDummyFbEnv, unsetDummyFbEnv } from 'services/provider/firebase/mock'

test('init Firebase config without FB_API_KEY', () => {
  setDummyFbEnv()
  delete process.env.FB_API_KEY
  expect(getFbConfig).toThrow()
  unsetDummyFbEnv()
})

test('init Firebase config without FB_AUTH_DOMAIN', () => {
  setDummyFbEnv()
  delete process.env.FB_AUTH_DOMAIN
  expect(getFbConfig).toThrow()
  unsetDummyFbEnv()
})

test('init Firebase config without FB_DB_URL', () => {
  setDummyFbEnv()
  delete process.env.FB_DB_URL
  expect(getFbConfig).toThrow()
  unsetDummyFbEnv()
})

test('init Firebase config without FB_PROJ_ID', () => {
  setDummyFbEnv()
  delete process.env.FB_PROJ_ID
  expect(getFbConfig).toThrow()
  unsetDummyFbEnv()
})

test('init Firebase config without FB_BUCKET', () => {
  setDummyFbEnv()
  delete process.env.FB_BUCKET
  expect(getFbConfig).toThrow()
  unsetDummyFbEnv()
})

test('init Firebase config without FB_MSG_ID', () => {
  setDummyFbEnv()
  delete process.env.FB_MSG_ID
  expect(getFbConfig).toThrow()
  unsetDummyFbEnv()
})

test('init Firebase config without FB_APP_ID', () => {
  setDummyFbEnv()
  delete process.env.FB_APP_ID
  expect(getFbConfig).toThrow()
  unsetDummyFbEnv()
})

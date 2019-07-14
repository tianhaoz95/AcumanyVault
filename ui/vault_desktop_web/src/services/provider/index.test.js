import initProvider from 'services/provider'

import { setDummyFbEnv, unsetDummyFbEnv } from 'services/provider/firebase/mock'

test('init with unknown provider name', () => {
  const providerName = 'not_supported_provider'
  const errMsg = 'Provider' + providerName + 'not supported'
  setDummyFbEnv()
  expect(initProvider(providerName)).rejects.toMatch(errMsg)
  unsetDummyFbEnv()
})

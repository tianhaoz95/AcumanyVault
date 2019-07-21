import createUser from 'services/database/createUser'
import initProvider from 'services/provider'

test('create user unknown provider name', () => {
  const providerName = 'not_supported_provider'
  const errMsg = 'Provider ' + providerName + ' not supported'
  expect(createUser(providerName)).rejects.toMatch(errMsg)
})

test('create user', () => {
  const providerName = 'firebase'
  initProvider(providerName)
  expect(createUser(providerName, 'tianhaoz95')).resolves.toMatch('placeholder')
})

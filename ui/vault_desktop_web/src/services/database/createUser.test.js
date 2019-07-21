import createUser from 'services/database/createUser'

test('create user unknown provider name', () => {
  const providerName = 'not_supported_provider'
  const errMsg = 'Provider ' + providerName + ' not supported'
  expect(createUser(providerName)).rejects.toMatch(errMsg)
})

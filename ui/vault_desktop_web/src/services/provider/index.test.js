import initProvider from 'services/provider'

test('init with unknown provider name', () => {
  const providerName = 'not_supported_provider'
  const errMsg = 'Provider' + providerName + 'not supported'
  return expect(initProvider(providerName)).rejects.toMatch(errMsg)
})

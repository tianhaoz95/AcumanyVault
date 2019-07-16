import readPubRepos from 'services/github/show_pub_repo'

test('Get pub repos of tianhaoz95', () => {
  expect(readPubRepos('tianhaoz95')).resolves.not.toBe(undefined)
})

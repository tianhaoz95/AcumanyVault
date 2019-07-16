import Octokit from '@octokit/rest'

const octokit = new Octokit()

function readPubRepos (targetUsername) {
  return new Promise((resolve, reject) => {
    octokit.repos.listForUser({ username: targetUsername })
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export default readPubRepos

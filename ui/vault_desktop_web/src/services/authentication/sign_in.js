import signInWithGitHub from 'services/authentication/firebase/sign_in'

async function signIn (providerName) {
  if (providerName === 'firebase') {
    const userInfo = await signInWithGitHub()
    return userInfo
  } else {
    const err = 'Provider' + providerName + 'not supported'
    throw new Error(err)
  }
}

export default signIn

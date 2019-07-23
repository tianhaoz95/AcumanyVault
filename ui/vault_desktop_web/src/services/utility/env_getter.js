export const reactPrefix = 'REACT_APP_'
export const storybookPrefix = 'STORYBOOK_'
export const unittestPrefix = 'UNIT_TEST_'

function getEnvVar (envVarName) {
  const reactEnvVarName = reactPrefix + envVarName
  const storybookEnvVarName = storybookPrefix + envVarName
  const unitestEnvVarName = unittestPrefix + envVarName
  let foundCnt = 0
  let envVarValue = 'unknown'
  if (process.env[reactEnvVarName]) {
    foundCnt += 1
    envVarValue = process.env[reactEnvVarName]
  }
  if (process.env[storybookEnvVarName]) {
    foundCnt += 1
    envVarValue = process.env[storybookEnvVarName]
  }
  if (process.env[unitestEnvVarName]) {
    foundCnt += 1
    envVarValue = process.env[unitestEnvVarName]
  }
  if (foundCnt === 0) {
    const errMsg = envVarName + ' not found'
    throw errMsg
  }
  if (foundCnt > 1) {
    const errMsg = envVarName + ' found in more than 1 configuration, using unit test version'
    console.log(errMsg)
  }
  return envVarValue
}

export default getEnvVar

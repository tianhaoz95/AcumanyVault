import getEnvVar from 'services/utility/env_getter'

function getRunningMode () {
  const runningModeVarName = 'RUNNING_MODE'
  const runningMode = getEnvVar(runningModeVarName)
  return runningMode
}

export default getRunningMode

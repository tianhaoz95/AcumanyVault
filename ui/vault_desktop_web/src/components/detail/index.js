import React from 'react'
import Paper from '@material-ui/core/Paper'

import SecretInput from 'components/elements/secret_input'
import UserAdder from 'components/elements/user_adder'

function Detail () {
  return (
    <Paper>
      <SecretInput onChange={() => {}} />
      <UserAdder />
      <UserAdder />
    </Paper>
  )
}

export default Detail

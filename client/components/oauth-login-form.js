import React from 'react'

const OauthLoginForm = (props) => {
  console.log('im inside oauth form', props)
  return (
    <form method='get' action='/auth/google'>
      <button type='submit' className='btn bg-red white p1 rounded'>Login with Google</button>
    </form>
  )
}

export default OauthLoginForm

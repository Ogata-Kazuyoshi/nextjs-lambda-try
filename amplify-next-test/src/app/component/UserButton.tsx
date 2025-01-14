import React from 'react'
import { auth } from '../../../auth'
import SignInButton from './SignInButton'
import SignOut from './SignOut'

const UserButton = async () => {
  const session = await auth()
  if (!session?.user) return <SignInButton provider="Cognito" />

  return <SignOut />
}

export default UserButton

import React from 'react'
import { signIn } from '../../../auth'

interface Props {
  provider: string
}

const SignInButton = ({ provider }: Props) => {
  return (
    <form
      action={async () => {
        'use server'
        await signIn(provider)
      }}
    >
      <button>ログイン</button>
    </form>
  )
}

export default SignInButton

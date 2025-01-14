import { signOut } from '../../../auth'

const SignOut = async () => {
  return (
    <form
      action={async () => {
        'use server'
        await signOut()
      }}
    >
      <button>サインアウトする</button>
    </form>
  )
}

export default SignOut

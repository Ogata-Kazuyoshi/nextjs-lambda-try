import React from 'react'
import { auth } from '../../../auth'

const page = async () => {
  const session = await auth()

  const headers =
    process.env.DEVELOPEMENT_ENVIRONMENT === 'dev'
      ? {
          Authorization: `Bearer ${session?.accessToken}`,
          'X-Mock-User-Sub': session?.user?.id,
          'X-Mock-User-Groups': 'local-group',
        }
      : { Authorization: `Bearer ${session?.accessToken}` }
  // @ts-ignore
  const response = await fetch(
    // 'https://dmmr4cq2aa.execute-api.ap-northeast-1.amazonaws.com/dev/api/hello',
    'https://gsylcw6nrd.execute-api.ap-northeast-1.amazonaws.com/dev/hello',
    // 'http://127.0.0.1:3030/hello',
    {
      headers: headers,
    }
  ).then(async (res) => {
    const data = await res.json()
    console.log(data)
    return data
  })

  return (
    <div className="bg-gray-800 flex flex-col items-center justify-center h-full">
      <div className="h-8 text-white text-4xl">path</div>
      <div className="text-white text-4xl">{response?.message}</div>
      <div className="text-white text-4xl">{response?.userSub}</div>
      <div className="text-white text-4xl">{response?.userGroups}</div>
    </div>
  )
}

export default page

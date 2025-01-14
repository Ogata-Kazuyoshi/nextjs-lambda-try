import React from 'react'
import { auth } from '../../../auth'

const page = async () => {
  const session = await auth()
  // @ts-ignore
  const response = session?.accessToken
    ? await fetch(
        'https://dmmr4cq2aa.execute-api.ap-northeast-1.amazonaws.com/dev/api/hello',
        {
          headers: {
            Authorization: `Bearer ${session?.accessToken}`,
          },
        }
      ).then(async (res) => {
        const data = await res.json() // Read the response body once
        console.log(data)
        return data.body
      })
    : null

  return (
    <div className="bg-gray-800 flex flex-col items-center justify-center h-full">
      <div className="h-8 text-white text-4xl">path</div>
      <div className="text-white text-4xl">{response?.message}</div>
      <div className="text-white text-4xl">{response?.userSub}</div>
    </div>
  )
}

export default page

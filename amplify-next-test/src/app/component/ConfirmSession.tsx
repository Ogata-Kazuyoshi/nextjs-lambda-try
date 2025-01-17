'use client'

import { getSession, useSession } from 'next-auth/react'
import React, { useEffect } from 'react'
import axios, { AxiosRequestConfig } from 'axios'

const ConfirmSession = () => {
  // const { data: session } = useSession()

  // useEffect(() => {
  //   getSession().then((session) => {
  //     console.log('Access Token:', session)
  //     // @ts-ignore
  //     console.log('Access Token:', session?.accessToken)
  //     axios.get(
  //       'https://dmmr4cq2aa.execute-api.ap-northeast-1.amazonaws.com/dev/api/hello',
  //       {
  //         headers: {
  //           // @ts-ignore
  //           Authorization: `Bearer ${session?.accessToken}`,
  //         },
  //       }
  //     )

  // }, [])
  useEffect(() => {
    getSession().then((session) => {
      console.log('Access Token:', session)
      // @ts-ignore
      console.log('Access Token:', session?.accessToken)
      axios
        .get(
          // 'https://dmmr4cq2aa.execute-api.ap-northeast-1.amazonaws.com/dev/api/hello',
          'https://gsylcw6nrd.execute-api.ap-northeast-1.amazonaws.com/dev/hello',
          {
            headers: {
              // @ts-ignore
              Authorization: `Bearer ${session?.accessToken}`,
            },
          }
        )
        .then(async (res) => {
          // @ts-ignore
          const data = await res.json() // Read the response body once
          console.log(data)
          return data.body
        })
    })
  }, [])
  // useEffect(() => {
  //    getSession().then(session => {
  //     console.log('Access Token:', session)

  //     // API Gatewayへのリクエスト
  //     // fetch('https://your-api-gateway-url.com/endpoint', {
  //     //   method: 'GET', // または 'POST', 'PUT', など
  //     //   headers: {
  //     //     Authorization: `Bearer ${session.accessToken}`,
  //     //     'Content-Type': 'application/json',
  //     //   },
  //     // })
  //     //   .then((response) => response.json())
  //     //   .then((data) => console.log(data))
  //     //   .catch((error) => console.error('Error:', error))

  // }, [])

  return <div>ConfirmSession</div>
}

export default ConfirmSession

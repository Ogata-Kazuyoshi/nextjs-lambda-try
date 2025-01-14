import NextAuth, { NextAuthConfig } from 'next-auth'
import Cognito from 'next-auth/providers/cognito'

export const config: NextAuthConfig = {
  providers: [
    Cognito({
      clientId: process.env.COGNITO_CLIENT_ID,
      clientSecret: process.env.COGNITO_CLIENT_SECRET,
      issuer: process.env.COGNITO_ISSUER,
      authorization: {
        params: {
          scope: 'openid email profile',
        },
      },
      checks: ['nonce'],
    }),
  ],
  basePath: '/api/auth',
  callbacks: {
    authorized({ request, auth }) {
      try {
        const { pathname } = request.nextUrl
        if (pathname == '/protected') return !!auth
        return true
      } catch (error) {
        console.error(error)
      }
    },
    jwt({ token, account }) {
      // Cognitoからのトークンを確認
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    session({ session, token }) {
      // Add JWT to session
      const accessToken = token.accessToken as string
      // @ts-ignore
      session.accessToken = accessToken
      return session
    },
  },
}

export const { handlers, auth, signIn, signOut } = NextAuth(config)

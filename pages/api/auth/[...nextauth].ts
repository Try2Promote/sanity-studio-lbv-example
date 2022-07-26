import { PrismaAdapter } from '@next-auth/prisma-adapter'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import argon2 from 'argon2'

import { prisma } from 'server/prisma'

export default NextAuth({
  callbacks: {
    session: async ({ session, user }) => {
      /*
      console.log('token', token, 'session', session)
      if (!session.user?.email) return { expires: new Date().toDateString() }
      const user = await prisma.user.findFirst({ where: { email: session.user.email } })
      if (!user) return { expires: new Date().toDateString() }
      */
      console.log('session?', session)
      return {
        ...session,
        ...user,
      }
    },
  },
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },

  providers: [
    CredentialsProvider({
      id: 'credentials',
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: Record<'email' | 'password', string> | undefined) {
        if (!credentials?.email || !credentials.password) {
          throw new Error('Error signing in, credentials not found')
        }
        console.log('hello', credentials)
        // Add logic here to look up the user from the credentials supplied
        const user = await prisma.user.findUnique({ where: { email: credentials.email } })
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          const match = await argon2.verify(user.passwordHash, credentials.password)
          if (match) {
            return {
              id: user.id,
              email: user.email,
              firstName: user.firstName,
              lastName: user.lastName,
              image: user.image,
            }
          } else {
            return null
            /*throw new Error(
              'Your account or password is incorrect, please verify your credentials and try again.',
            )*/
          }
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null
          /*
          throw new Error(
            'Your account or password is incorrect, please verify your credentials and try again.',
          )*/

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
})

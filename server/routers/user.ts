/**
 * Create a TRPC route for signup
 * Arguments: firstName, lastName, email, password
 */

import { SignUpUser } from 'server/user'
import { z } from 'zod'
import createRouter from '../createRouter'
import argon2 from 'argon2'
import { TRPCError } from '@trpc/server'

export const userRouter = createRouter()
  .mutation('signup', {
    input: z.object({
      firstName: z.string(),
      lastName: z.string(),
      email: z.string().email(),
      password: z.string(),
    }),
    async resolve({ input: { firstName, lastName, email, password } }) {
      try {
        const passwordHash = await argon2.hash(password)
        const user = SignUpUser({
          firstName: firstName,
          lastName: lastName,
          email: email,
          passwordHash: passwordHash,
        })
        return user
      } catch (error) {
        return new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message:
            'Error while creating your account, please try again or contact support if this error persists.',
        })
      }
    },
  })
  .mutation('verifyEmail', {
    async resolve() {
      console.log('hello')
    },
  })

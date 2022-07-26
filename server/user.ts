import { TRPCError } from '@trpc/server'
import { prisma } from './prisma'

export const SignUpUser = async ({ firstName, lastName, email, passwordHash }) => {
  // check for user in Prisma
  const isUser = await prisma.user.findUnique({ where: { email } })
  if (isUser) {
    throw new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: 'An account already exists with that email.',
    })
  }
  const user = await prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
      passwordHash: passwordHash,
    },
  })
  return user
}

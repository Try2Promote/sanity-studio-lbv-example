import createRouter from '../createRouter'
import superjson from 'superjson'
import { userRouter } from './user'

/**
 * This is the main router for the application.
 * We can add sub-routers here and merge them with the main router using the merge function.
 */

export const appRouter = createRouter()
  .transformer(superjson)
  .query('hi', {
    async resolve() {
      return 'hey'
    },
  })
  .merge('user.', userRouter)

export type AppRouter = typeof appRouter

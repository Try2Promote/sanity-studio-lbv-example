import * as trpcNext from '@trpc/server/adapters/next'
import { appRouter } from 'server/routers/_app'

export default trpcNext.createNextApiHandler({
  router: appRouter,
  onError: ({ error }) => {
    if (error.code === 'INTERNAL_SERVER_ERROR') {
      console.error('Something nasty happend in your server', error)
    }
  },
  batching: {
    enabled: true,
  },
  createContext: () => null,
  // TODO: Add response caching: https://trpc.io/docs/caching#api-response-caching
})

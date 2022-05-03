import type { NextPage } from 'next'
import { trpc } from '../utils/trpc'

const Home: NextPage = () => {
  const hello = trpc.useQuery(['hello', { text: 'client' }])
  if (!hello.data && hello.isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1>{hello.data?.greeting}</h1>
    </div>
  )
}

export default Home

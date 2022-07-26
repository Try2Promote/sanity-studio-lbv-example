import type { NextPage } from 'next'
import { signOut } from 'next-auth/react'
import { useRequireAuth } from 'utils/auth'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      Hello
      <button className="my-4 rounded-md bg-black py-2 px-4 text-white" onClick={() => signOut()}>
        Sign out
      </button>
    </div>
  )
}

export default Home

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const useRequireAuth = (redirect = '/auth/signin') => {
  const session = useSession()
  const router = useRouter()
  useEffect(() => {
    if (session.status === 'unauthenticated') {
      router.push(redirect)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session.status, router])

  return [session.data?.user, session.data?.expires]
}

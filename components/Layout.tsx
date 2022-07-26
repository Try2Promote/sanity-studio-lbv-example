import { useRequireAuth } from 'utils/auth'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
  const [user] = useRequireAuth()
  return (
    <div className="layout">
      <Header user={user} />
      <main className="mt-12">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

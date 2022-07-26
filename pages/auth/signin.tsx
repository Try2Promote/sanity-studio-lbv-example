import { Input } from 'components/Form'
import { signIn } from 'next-auth/react'

export default function SignIn() {
  const handleSignIn = async (e) => {
    e.preventDefault()
    const response = await signIn('credentials', {
      email: 'hey@example.com',
      password: 'hey@example.com',
      callbackUrl: '/',
    })
    console.log('response', response)
  }
  return (
    <>
      <form onSubmit={handleSignIn} className="p-15 m-auto max-w-[500px]">
        <h2 className="pb-8 text-center text-3xl font-bold">Sign in</h2>
        <div className="mb-6">
          <Input
            // label="Email"
            id="email"
            placeholder="hey@example.com"
            required
            type="email"
            // onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <Input
            label="Password"
            placeholder="super complicated password"
            required
            id="password"
            type="password"
            // onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* {error && <Feedback variant="error" message={error} />} */}
        {/* <Button type="submit" disabled={!isFilledIn()}>
          Create Account
        </Button> */}
        <button
          className="rounded-md bg-blue-500 py-2.5 px-4 text-white"
          disabled={false}
          type="submit"
        >
          Login
        </button>
      </form>
    </>
  )
}

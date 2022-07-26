import { Input } from 'components/Form'
import { FormEvent } from 'react'
import { useRegister } from 'utils/users'
import { signIn } from 'next-auth/react'

export default function SignUp() {
  const {
    firstName,
    lastName,
    email,
    password,
    repeatPassword,
    onChangeEmail,
    onChangePassword,
    onChangeRepeatPassword,
    useSignup,
  } = useRegister()
  const register = useSignup()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (password != repeatPassword) {
      // Show error
      return
    }
    try {
      const response = await register.mutateAsync({ firstName, lastName, email, password })
      console.log('response register', response)
      signIn('credentials', { email, password, callbackUrl: '/' })

      /**
       * Redirect to homepage as an authenticated user and show banner to verify email.
       */
    } catch (error) {
      /**
       * Show a toast with an error or show form errors
       */
      console.log('error registering', error)
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="p-15 m-auto max-w-[500px]">
        <h2 className="pb-8 text-center text-3xl font-bold">Sign up</h2>
        <div className="mb-6">
          <Input
            // label="Email"
            id="email"
            placeholder="hey@example.com"
            required
            value={email}
            type="email"
            onChange={(e) => onChangeEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <Input
            label="Password"
            placeholder="super complicated password"
            required
            id="password"
            value={password}
            type="password"
            onChange={(e) => onChangePassword(e.target.value)}
          />
        </div>
        <div className="mb-12">
          <Input
            // label="Repeat Password"
            id="repeat-password"
            placeholder="super complicated password"
            required
            value={repeatPassword}
            type="password"
            onChange={(e) => onChangeRepeatPassword(e.target.value)}
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
          Create Account
        </button>
      </form>
    </>
  )
}

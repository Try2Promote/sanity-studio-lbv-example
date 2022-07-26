/* This example requires Tailwind CSS v2.0+ */
import { XIcon } from '@heroicons/react/outline'

export default function Header({ user }: { user?: any }) {
  return (
    <div className="relative bg-red-800">
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:px-16 sm:text-center">
          <p className="font-medium text-white">
            <span className="md:hidden">Please verify your email</span>
            <span className="hidden md:inline">
              Your email is not verified, please check you inbox for a verification email. (
              {user?.email})
            </span>
            {/* <span className="block sm:ml-2 sm:inline-block">
              <a href="#" className="font-bold text-white underline">
                {' '}
                Learn more <span aria-hidden="true">&rarr;</span>
              </a>
            </span> */}
          </p>
        </div>
        {/* <div className="absolute inset-y-0 right-0 flex items-start pt-1 pr-1 sm:items-start sm:pt-1 sm:pr-2">
          <button
            type="button"
            className="flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <span className="sr-only">Dismiss</span>
            <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div> */}
      </div>
    </div>
  )
}
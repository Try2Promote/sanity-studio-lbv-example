import { User } from '@prisma/client'
import { TRPCError } from '@trpc/server'

import { UseMutationResult } from 'react-query'
import create, { SetState } from 'zustand'
import { trpc } from './trpc'

export type UserRegister = {
  firstName: string
  lastName: string
  email: string
  password: string
  repeatPassword: string
  onChangeEmail: (email: string) => void
  onChangePassword: (password: string) => void
  onChangeRepeatPassword: (repeatPassword: string) => void
  useSignup: () => UseMutationResult<User | TRPCError>
}

export const useRegister = create<UserRegister>((set: SetState<UserRegister>) => ({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  repeatPassword: '',
  onChangeEmail: (email) => set((state) => ({ ...state, email })),
  onChangePassword: (password) => set((state) => ({ ...state, password })),
  onChangeRepeatPassword: (repeatPassword) => set((state) => ({ ...state, repeatPassword })),
  useSignup: () => trpc.useMutation(['user.signup']),
}))

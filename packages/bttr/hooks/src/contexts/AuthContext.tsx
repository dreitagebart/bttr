import { Dispatch, SetStateAction, createContext } from 'react'

export type AuthUser = {
  firstname: string
  lastname: string
  username: string
} | null

export interface AuthContextProps {
  user: AuthUser
  setUser: Dispatch<SetStateAction<AuthUser>>
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: () => null
})

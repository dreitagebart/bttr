import { AuthContext, AuthUser } from '@bttr/hooks'
import { FC, ReactNode, useState } from 'react'

interface Props {
  children: ReactNode
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const [user, setUser] = useState<AuthUser>(null)

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

import { FC, ReactNode } from 'react'

interface Props {
  to?: string
  children: ReactNode
}

export const AuthRoute: FC<Props> = ({ children, to = '/login' }) => {
  return (
    <>
      {to}
      {children}
    </>
  )
}

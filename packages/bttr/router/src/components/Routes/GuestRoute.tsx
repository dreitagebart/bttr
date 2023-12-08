import { FC, ReactNode } from 'react'

interface Props {
  to?: string
  children: ReactNode
}

export const GuestRoute: FC<Props> = ({ children, to = '/' }) => {
  return (
    <>
      {to}
      {children}
    </>
  )
}

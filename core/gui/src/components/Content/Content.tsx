import { FC } from 'react'

interface Props {}

export const Content: FC<Props> = () => {
  return (
    <iframe
      src='http://dreitagebart.io'
      style={{ width: '100%', height: '100%' }}
    ></iframe>
  )
}

import '@mantine/core/styles.css'
import { AppContext } from '@bttr/hooks'
import { MantineProvider } from '@mantine/core'
import { BrowserRouter } from '@bttr/router'
import { FC, ReactNode, useState } from 'react'

import { Titlebar } from '../Titlebar'

interface Props {
  titlebar?: boolean
  children: ReactNode
}

export const AppProvider: FC<Props> = ({ children, titlebar = false }) => {
  const [title, setTitle] = useState('')

  return (
    <BrowserRouter>
      <AppContext.Provider
        value={{
          title,
          setTitle,
          code: 'MM03',
          systemId: 'EMP',
          username: 'nafets'
        }}
      >
        <MantineProvider>
          {titlebar && <Titlebar></Titlebar>}
          {children}
        </MantineProvider>
      </AppContext.Provider>
    </BrowserRouter>
  )
}

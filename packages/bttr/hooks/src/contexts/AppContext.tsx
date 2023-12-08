import { Dispatch, SetStateAction, createContext } from 'react'

export interface AppContextProps {
  title: string
  setTitle: Dispatch<SetStateAction<string>>
  code: string
  username: string
  systemId: string
}

export const AppContext = createContext<AppContextProps>({
  title: '',
  setTitle: () => null,
  code: '',
  username: '',
  systemId: ''
})

import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppProvider } from '@bttr/ui'

import { MainRoot } from '../components'
import '../styles.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider titlebar>
      <MainRoot />
    </AppProvider>
  </React.StrictMode>
)

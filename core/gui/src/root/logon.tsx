import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppProvider } from '@bttr/ui'

import { LogonRoot } from '../components'
import '../styles.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider titlebar>
      <LogonRoot />
    </AppProvider>
  </React.StrictMode>
)

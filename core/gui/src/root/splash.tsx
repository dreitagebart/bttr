import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppProvider } from '@bttr/ui'

import { SplashRoot } from '../components'
import '../styles.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <SplashRoot />
    </AppProvider>
  </React.StrictMode>
)

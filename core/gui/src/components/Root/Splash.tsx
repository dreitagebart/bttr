import { Box, Button } from '@bttr/ui'
import { invoke } from '@tauri-apps/api'

import pkg from '../../../package.json'

export const SplashRoot = () => {
  return (
    <>
      <Box>Hi there {pkg.version}</Box>
      <Button onClick={() => invoke('close_splashscreen')}>show logon</Button>
    </>
  )
}

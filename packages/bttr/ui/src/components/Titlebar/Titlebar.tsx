import { FC, useEffect, useState } from 'react'
import { IconMinus, IconMinimize, IconX, IconMaximize } from '@bttr/icons'
import { appWindow } from '@tauri-apps/api/window'
import { useApp } from '@bttr/hooks'
import { ActionIcon, Group, Text } from '../../core'

import classes from './Titlebar.module.css'

interface Props {}

export const Titlebar: FC<Props> = () => {
  const { title } = useApp()
  const [maximized, setMaximized] = useState(false)

  useEffect(() => {
    appWindow.isMaximized().then((isMaximized) => setMaximized(isMaximized))
  }, [])

  appWindow.onResized(() => {
    appWindow.isMaximized().then((isMaximized) => setMaximized(isMaximized))
  })

  return (
    <Group
      data-tauri-drag-region
      className={classes.titlebar}
      justify='space-between'
    >
      <Text fw='bold'>{title}</Text>
      <Group>
        <ActionIcon
          size='sm'
          variant='subtle'
          onClick={() => appWindow.minimize()}
        >
          <IconMinus></IconMinus>
        </ActionIcon>
        <ActionIcon
          size='sm'
          variant='subtle'
          onClick={() =>
            maximized
              ? appWindow.unmaximize().then(() => setMaximized(false))
              : appWindow.maximize().then(() => setMaximized(true))
          }
        >
          {maximized ? (
            <IconMinimize></IconMinimize>
          ) : (
            <IconMaximize></IconMaximize>
          )}
        </ActionIcon>
        <ActionIcon
          size='sm'
          variant='subtle'
          onClick={() => appWindow.close()}
        >
          <IconX></IconX>
        </ActionIcon>
      </Group>
    </Group>
  )
}

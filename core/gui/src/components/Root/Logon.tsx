import { Box, Button, Table } from '@bttr/ui'
import { systems } from '@bttr/config'
import { useApp } from '@bttr/hooks'

import { useEffect } from 'react'
import { invoke } from '@tauri-apps/api'

export const LogonRoot = () => {
  const { setTitle } = useApp()

  useEffect(() => {
    setTitle('Logon')
  }, [setTitle])

  return (
    <>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>ID</Table.Th>
            <Table.Th>Description</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {systems.map(({ systemId, connection, description, production }) => {
            return (
              <Table.Tr key={systemId}>
                <Table.Td>{systemId}</Table.Td>
                <Table.Td>{description}</Table.Td>
                <Table.Td>
                  <Button
                    onClick={() => {
                      invoke('show_mainscreen', { systemId })
                    }}
                  >
                    connect
                  </Button>
                </Table.Td>
              </Table.Tr>
            )
          })}
        </Table.Tbody>
      </Table>
      <Box>logon Pad</Box>
    </>
  )
}

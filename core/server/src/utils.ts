import { readdirSync } from 'fs'
import { resolve } from 'path'
import { Request } from 'express'

type Namespace = 'bttr' | 'custom'

const appsPath = resolve(process.cwd(), '../../', 'apps')

export const getAppName = (req: Request) => {
  const segments = req.url.split('/')
  return segments[3]!
}

export const getAppPath = (appName: string, namespace: Namespace) => {
  return resolve(appsPath, namespace, appName, 'dist')
}

export const getAppFolders = (namespace: Namespace) => {
  return readdirSync(resolve(appsPath, namespace))
}

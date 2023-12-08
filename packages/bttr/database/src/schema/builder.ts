import SchemaBuilder from '@pothos/core'
import PrismaPlugin from '@pothos/plugin-prisma'
import type PrismaTypes from '@pothos/plugin-prisma/generated'

import { prismaClient } from '../prismaClient'

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes
  DefaultInputFieldRequiredness: true
}>({
  defaultInputFieldRequiredness: true,
  plugins: [PrismaPlugin],
  prisma: {
    client: prismaClient
  }
})

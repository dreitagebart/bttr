import { prismaClient } from '../../prismaClient'
import { builder } from '../builder'
import { UserCreateInput } from '../input'

builder.mutationFields((t) => ({
  createUser: t.prismaField({
    type: 'User',
    args: {
      data: t.arg({
        type: UserCreateInput
      })
    },
    resolve: (query, root, { data }, ctx) => {
      return prismaClient.user.create({
        data
      })
    }
  })
}))

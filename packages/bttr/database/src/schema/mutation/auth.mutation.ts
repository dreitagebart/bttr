import { GraphQLError } from 'graphql'
import { YogaInitialContext } from 'graphql-yoga'

import { prismaClient } from '../../prismaClient'
import { builder } from '../builder'
import { LoginWhereInput } from '../input'

builder.mutationFields((t) => ({
  login: t.prismaField({
    type: 'User',
    args: {
      where: t.arg({
        type: LoginWhereInput
      })
    },
    resolve: async (query, root, { where }, ctx: YogaInitialContext) => {
      const user = await prismaClient.user.findUnique({
        where: {
          username: where.username
        }
      })

      if (!user) {
        throw new GraphQLError('User not found')
      }

      await ctx.request.cookieStore?.set('auth', 'knusperfisch')

      return user
    }
  })
}))

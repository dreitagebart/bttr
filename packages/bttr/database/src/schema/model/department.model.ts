import { builder } from '../builder'

builder.prismaObject('Department', {
  fields: (t) => ({
    id: t.exposeString('id'),
    name: t.exposeString('name')
  })
})

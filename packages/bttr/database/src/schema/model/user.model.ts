import { builder } from '../builder'

builder.prismaObject('User', {
  fields: (t) => ({
    username: t.exposeString('username'),
    firstname: t.exposeString('firstname'),
    lastname: t.exposeString('lastname')
  })
})

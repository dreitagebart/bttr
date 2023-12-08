import { builder } from '../builder'

export const UserCreateInput = builder.inputType('UserCreateInput', {
  fields: (t) => ({
    username: t.string(),
    firstname: t.string(),
    lastname: t.string()
  })
})

import { builder } from '../builder'

export const LoginWhereInput = builder.inputType('LoginWhereInput', {
  fields: (t) => ({
    username: t.string(),
    password: t.string()
  })
})

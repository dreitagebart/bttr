import { builder } from '../builder'

builder.prismaObject('App', {
  fields: (t) => ({
    id: t.exposeString('id'),
    code: t.exposeString('code'),
    descriptions: t.relation('descriptions')
  })
})

builder.prismaObject('AppDescription', {
  fields: (t) => ({
    appId: t.exposeString('appId'),
    languageId: t.exposeString('languageId'),
    description: t.exposeString('description'),
    app: t.relation('app')
  })
})

builder.prismaObject('AppCategory', {
  fields: (t) => ({
    id: t.exposeString('id'),
    descriptions: t.relation('descriptions')
  })
})

builder.prismaObject('AppCategoryDescription', {
  fields: (t) => ({
    categoryId: t.exposeString('categoryId'),
    languageId: t.exposeString('languageId'),
    description: t.exposeString('description'),
    category: t.relation('category')
  })
})

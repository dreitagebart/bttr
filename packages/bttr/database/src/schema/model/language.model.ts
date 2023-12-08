import { builder } from '../builder'

builder.prismaObject('Language', {
  fields: (t) => ({
    id: t.exposeString('id'),
    descriptions: t.relation('descriptions')
  })
})

builder.prismaObject('LanguageDescription', {
  fields: (t) => ({
    langId: t.exposeString('langId'),
    languageId: t.exposeString('languageId'),
    description: t.exposeString('description'),
    language: t.relation('language')
  })
})

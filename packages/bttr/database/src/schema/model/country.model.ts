import { builder } from '../builder'

builder.prismaObject('Country', {
  fields: (t) => ({
    id: t.exposeString('id'),
    descriptions: t.relation('descriptions')
  })
})

builder.prismaObject('CountryDescription', {
  fields: (t) => ({
    countryId: t.exposeString('countryId'),
    languageId: t.exposeString('languageId'),
    country: t.relation('country')
  })
})

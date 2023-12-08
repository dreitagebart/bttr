import { builder } from '../builder'

builder.prismaObject('SalesOrganization', {
  fields: (t) => ({
    id: t.exposeString('id'),
    descriptions: t.relation('descriptions')
  })
})

builder.prismaObject('SalesOrganizationDescription', {
  fields: (t) => ({
    salesOrganizationId: t.exposeString('salesOrganizationId'),
    languageId: t.exposeString('languageId'),
    storageLocation: t.relation('storageLocation')
  })
})

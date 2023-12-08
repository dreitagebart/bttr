import { builder } from '../builder'

builder.prismaObject('StorageLocation', {
  fields: (t) => ({
    id: t.exposeString('id'),
    descriptions: t.relation('descriptions')
  })
})

builder.prismaObject('StorageLocationDescription', {
  fields: (t) => ({
    storageLocationId: t.exposeString('storageLocationId'),
    languageId: t.exposeString('languageId'),
    storageLocation: t.relation('storageLocation')
  })
})

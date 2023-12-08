import { builder } from '../builder'

builder.prismaObject('Plant', {
  fields: (t) => ({
    id: t.exposeString('id'),
    descriptions: t.relation('descriptions')
  })
})

builder.prismaObject('PlantDescription', {
  fields: (t) => ({
    plantId: t.exposeString('plantId'),
    languageId: t.exposeString('languageId'),
    plant: t.relation('plant')
  })
})

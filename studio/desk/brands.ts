import S from '@sanity/desk-tool/structure-builder'

export const brands = S.listItem()
  .title('Brands')
  .schemaType('brand')
  .child(S.documentTypeList('brand'))

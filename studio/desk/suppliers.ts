import S from '@sanity/desk-tool/structure-builder'

export const suppliers = S.listItem()
  .title('Suppliers')
  .schemaType('supplier')
  .child(S.documentTypeList('supplier'))

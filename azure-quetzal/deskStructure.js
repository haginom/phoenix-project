export const deskStructure = (S) =>
  S.list()
    .title('Content')
    .items([...S.documentTypeListItems()])

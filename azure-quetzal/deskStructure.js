import HeroPreview from './previews/hero'

// export const defaultDocumentNodeResolver = (S) =>
//   S.document().views([S.view.form(), S.view.component(HeroPreview).title('Web Preview')])

export const deskStructure = (S) =>
  S.list()
    .title('Content')
    .items([...S.documentTypeListItems()])

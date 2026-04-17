import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Clay')
    .items([
      S.documentTypeListItem('property').title('Properties'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['property'].includes(item.getId()!),
      ),
    ])

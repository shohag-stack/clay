import { type SchemaTypeDefinition } from 'sanity'

import {propertyType} from './propertyType'
import { postType } from './postType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [propertyType, postType],
}

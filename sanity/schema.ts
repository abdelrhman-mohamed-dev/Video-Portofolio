import { type SchemaTypeDefinition } from 'sanity'
import PresonaInformation from './schemas/PresonaInformation'
import Collaborations from './schemas/Collaborations'
import Work from './schemas/Work'

export const schema: { types: SchemaTypeDefinition[] } = {

  types: [PresonaInformation,Collaborations,Work],
}

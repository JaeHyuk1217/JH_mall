import  { gql } from  'apollo-server-express'
import productSchema from './product'
import cartSchema from './cart'

const linkSchema = gql`
    type Query {
        : Boolean
    }
    type Mutation {
        : Boolean
    }
`

export default [linkSchema, productSchema, cartSchema]
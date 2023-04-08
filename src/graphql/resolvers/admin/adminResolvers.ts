import GraphQLJSON from 'graphql-type-json';

// Mutations
import adminLogIn from './mutations/adminLogIn.js'

// Queries
import getAdmin from './queries/getAdmin.js'

export default {
    Query: {
        ...getAdmin.Query
    },
    Mutation: {
        ...adminLogIn.Mutation
    },
    JSON: GraphQLJSON,
}
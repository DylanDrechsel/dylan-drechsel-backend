import GraphQLJSON from 'graphql-type-json';

// Mutations
import adminLogIn from './mutations/adminLogIn'

// Queries
import getAdmin from './queries/getAdmin'

export default {
    Query: {
        ...getAdmin.Query
    },
    Mutation: {
        ...adminLogIn.Mutation
    },
    JSON: GraphQLJSON,
}
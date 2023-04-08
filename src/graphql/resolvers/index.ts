import GraphQLJSON from 'graphql-type-json';

// Resolvers
import adminResolvers from './admin/adminResolvers.js'

export default {
    Query: {
        ...adminResolvers.Query,
    },
    Mutation: {
        ...adminResolvers.Mutation,
    },
    JSON: GraphQLJSON,
}
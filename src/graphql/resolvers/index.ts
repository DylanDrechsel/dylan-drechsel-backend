import GraphQLJSON from 'graphql-type-json';

// Resolvers
import adminResolvers from './admin/adminResolvers'

export default {
    Query: {
        ...adminResolvers.Query,
    },
    Mutation: {
        ...adminResolvers.Mutation,
    },
    JSON: GraphQLJSON,
}
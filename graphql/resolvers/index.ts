import GraphQLJSON from 'graphql-type-json';

import ownerReslovers from './owner/ownerResolvers.js';

export default {
    Query: {
        ...ownerReslovers.Query
    },
    Mutation: {
        ...ownerReslovers.Mutation
    },
    JSON: GraphQLJSON,
}
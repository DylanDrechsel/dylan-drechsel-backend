import GraphQLJSON from 'graphql-type-json';

// OWNER MUTATIONS
import ownerRegister from './mutations/ownerRegister.js';

// OWNER QUERIES
import getOwner from './queries/getOwner.js';

export default {
    Query: {
        // OWNER QUERIES
        ...getOwner.Query,
    },
    Mutation: {
        // OWNER MUTATIONS
        ...ownerRegister.Mutation
    },
    JSON: GraphQLJSON,
}
import GraphQLJSON from 'graphql-type-json';

// OWNER MUTATIONS
import createConfigSetting from './mutations/createConfigSetting.js';

// OWNER QUERIES


export default {
    Query: {
        // OWNER QUERIES
        
    },
    Mutation: {
        // OWNER MUTATIONS
        ...createConfigSetting.Mutation
    },
    JSON: GraphQLJSON,
}
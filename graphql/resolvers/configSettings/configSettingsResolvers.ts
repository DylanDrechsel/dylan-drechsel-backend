import GraphQLJSON from 'graphql-type-json';

// OWNER MUTATIONS
import createConfigSetting from './mutations/createConfigSetting.js';

// OWNER QUERIES
import getConfigSettings from './queries/getConfigSettings.js'

export default {
    Query: {
        // OWNER QUERIES
        ...getConfigSettings.Query
    },
    Mutation: {
        // OWNER MUTATIONS
        ...createConfigSetting.Mutation
    },
    JSON: GraphQLJSON,
}
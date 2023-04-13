import GraphQLJSON from 'graphql-type-json';

// OWNER MUTATIONS
import createConfigSetting from './mutations/createConfigSetting.js';
import updateConfigSetting from './mutations/updateConfigSetting.js'
import deleteConfigSetting from './mutations/deleteConfigSetting.js'

// OWNER QUERIES
import getConfigSettings from './queries/getConfigSettings.js'

export default {
    Query: {
        // OWNER QUERIES
        ...getConfigSettings.Query
    },
    Mutation: {
        // OWNER MUTATIONS
        ...createConfigSetting.Mutation,
        ...updateConfigSetting.Mutation,
        ...deleteConfigSetting.Mutation
    },
    JSON: GraphQLJSON,
}
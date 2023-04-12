import GraphQLJSON from 'graphql-type-json';

import ownerReslovers from './owner/ownerResolvers.js';
import configSettingsResolvers from './configSettings/configSettingsResolvers.js'

export default {
    Query: {
        ...ownerReslovers.Query,
        ...configSettingsResolvers.Query
    },
    Mutation: {
        ...ownerReslovers.Mutation,
        ...configSettingsResolvers.Mutation
    },
    JSON: GraphQLJSON,
}
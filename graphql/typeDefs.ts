import { gql } from 'apollo-server'

const typeDefs = gql`
    scalar Date
    scalar JSON

    type Owner {
        id:                           ID
        createdAt:                    Date
        role:                         String
        token:                        String
        firstname:                    String
        lastname:                     String
        email:                        String
        phoneNumber:                  String
        password:                     String
        profilePick:                  JSON

        # NOTIFACTION SYSTEM
        notified:                     Boolean

        # RESET PASSWORD
        resetPasswordToken:           String
        resetPasswordTokenExpiration: Int
        signUpToken:                  String
    }

    # ---------------------------------------- END SCHEMAS ---------------------------------------- #
    
    type Query {
        # OWNER QUERIES
        getOwner: Owner
    }

    type Mutation {
        # OWNER MUTATIONS
        ownerSignUp(email: String!, password: String!, phoneNumber: String!): Owner
    }

    # ---------------------------------------- END QUERIES AND MUTATIONS ---------------------------------------- #
`;

export default typeDefs;
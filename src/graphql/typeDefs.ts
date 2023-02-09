import { gql } from 'apollo-server'

const typeDefs = gql`
    scalar Date
    scalar JSON

    type Admin {
        id:                           ID
        createdAt:                    Date
        role:                         String
        token:                        String
        firstname:                    String
        lastname:                     String
        email:                        String
        password:                     String
        phoneNumber:                  String
        profilePick:                  JSON

        # ACCOUNT INFORMATION
        locked:                       Boolean
        deleted:                      Boolean

        # NOTIFACTION SYSTEM
        notified:                     Boolean

        # RESET PASSWORD
        resetPasswordToken:           String
        resetPasswordTokenExpiration: Int
        signUpToken:                  String
    }

    # ---------------------------------------- END SCHEMAS ---------------------------------------- #
    
    type Query {

    }

    type Mutation {

    }

    # ---------------------------------------- END QUERIES AND MUTATIONS ---------------------------------------- #
`;

export default typeDefs;
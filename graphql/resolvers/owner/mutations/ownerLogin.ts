import db from "../../../../utils/generatePrisma.js";
import bcrypt from "bcryptjs";
import { UserInputError } from 'apollo-server-errors';
import { validateLoginInput } from "../../../../utils/validators.js";
import generateOwnerToken from "../../../../utils/generateToken/generateOwnerToken.js"
import { OwnerLogin } from '../../../../types/owner/OwnerLogin'

export default {
    Mutation: {
        ownerLogin: async (_: any, { email, password }: OwnerLogin, { req }: any) => {
            const { errors, valid } = validateLoginInput(email, password)
    
            if (!valid) {
                throw new UserInputError('Errors', {
                    errors
                })
            }
    
            email = await email.toLowerCase()
    
            const foundUser = await db.owner.findUnique({
                where: {
                    email
                }
            })
    
            if (!foundUser) {
                errors.general = 'Account not found';
                throw new UserInputError('Incorrect Email', {
                    errors
                });
            }
    
            const isValid = await bcrypt.compare(password, foundUser.password)
    
            if (!isValid) {
                errors.general = 'Incorrect Password'
                throw new UserInputError('Incorrect Password', {
                    errors
                })
            }
    
            const token = await generateOwnerToken(foundUser.id)

            req.session = {
                token: `Bearer ${token}`
            }
    
            try {
                return await {
                    ...foundUser,
                    token: token
                }
            } catch (error: any) {
                throw new Error(error)
            }
        }
    }
}
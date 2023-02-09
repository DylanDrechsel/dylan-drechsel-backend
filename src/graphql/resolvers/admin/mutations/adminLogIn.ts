import db from '../../../../utils/generatePrisma.js';
import bcrypt from 'bcryptjs';
import { UserInputError } from 'apollo-server-errors';
import { validateLoginInput } from '../../../../utils/validators.js';
import generateAdminToken from '../../../../utils/generateToken/generateAdminToken'

export default {
    Mutation: {
        adminLogIn: async (_: any, { email, password }: any, { req }: any) => {
            const { error, valid } = validateLoginInput(email, password)
    
            if (!valid) {
                throw new UserInputError('Errors', {
                    error
                })
            }
    
            email = await email.toLowerCase()
    
            const foundUser = await db.admin.findUnique({
                where: {
                    email
                }
            })
    
            if (!foundUser) {
                error.general = 'Incorrect Email';
                throw new UserInputError('Incorrect Email', {
                    error
                });
            }
    
            const isValid = await bcrypt.compare(password, foundUser.password)
    
            if (!isValid) {
                error.general = 'Incorrect Password'
                throw new UserInputError('Incorrect Password', {
                    error
                })
            }
    
            const token = await generateAdminToken(foundUser.id)

            req.session = {
                token: `Bearer ${token}`
            }
    
            try {
                return await {
                    ...foundUser,
                    token: token
                }
            } catch (error) {
                throw new Error(error)
            }
        }
    }
}
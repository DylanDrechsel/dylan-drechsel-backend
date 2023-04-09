import db from "../../../../utils/generatePrisma.js";
import hashPassword from "../../../../utils/passwordHashing.js";
import { UserInputError } from "apollo-server-errors";
import { validateRegisterInput } from "../../../../utils/validators.js";
import generateOwnerToken from "../../../../utils/generateToken/generateOwnerToken.js";
import tokenGenerator from "../../../../utils/tokenGenerator.js";

export default {
    Mutation: {
        ownerSignUp: async (_: any, {
            email,
            password,
            phoneNumber
        }: any, { req }: any) => {
            const { valid, errors } = validateRegisterInput(email, password)

            if (!valid) {
                throw new UserInputError('Errors', {
                    errors
                })
            }

            email = await email.toLowerCase()

            const foundOwner = await db.owner.findUnique({
                where: {
                    email
                }
            })


            if (foundOwner) {
                throw new UserInputError('Email is already in use', {
                    errors: {
                        email: 'Email is already in use',
                    },
                });
            }

            password = await hashPassword(password)
            const signUpToken = await tokenGenerator(10)

            try {
                const newOwner = await db.owner.create({
                    data: {
                        email: email,
                        password: password,
                        phoneNumber: phoneNumber,
                        signUpToken: signUpToken
                    }
                })

                const token = await generateOwnerToken(newOwner.id)

                req.session = {
                    token: `Bearer ${token}`
                }

                return await {
                    ...newOwner,
                    token: token
                }
            } catch (error: any) {
                throw new Error(error)
            }
        }
    }
}
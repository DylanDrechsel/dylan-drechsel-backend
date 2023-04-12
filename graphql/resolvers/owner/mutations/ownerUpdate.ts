import db from "../../../../utils/generatePrisma.js";
import hashPassword from "../../../../utils/passwordHashing.js";
import checkOwnerAuth from "../../../../utils/checkAuthorization/checkOwnerAuth.js"
import { OwnerUpdate } from "../../../../types/owner/OwnerUpdate.js";

export default {
    Mutation: {
        ownerUpdate: async (_: any, {
            email,
            password,
            phoneNumber
        }: OwnerUpdate, context: any) => {
            const owner = await checkOwnerAuth(context)

            if (!owner) {
                throw new Error("Not the owner... Unauthorized")
            }

            if (email) {
                const foundOwner = await db.owner.findUnique({
                    where: {
                        email: email
                    }
                })
    
                if (foundOwner) {
                    throw new Error("Email is already in use")
                }
            }

            if (typeof password !== "undefined") {
                password = await hashPassword(password)
            }

            if (email) {
                email = email.toLowerCase()
            }

            try {
                return await db.owner.update({
                    where: {
                        id: owner.id
                    },
                    data: {
                        email: email,
                        password: password,
                        phoneNumber: phoneNumber
                    }
                })
            } catch (error: any) {
                throw new Error(error)
            }
        }
    }
}
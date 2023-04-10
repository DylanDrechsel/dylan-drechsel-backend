import db from "../../../../utils/generatePrisma.js";
import checkOwnerAuth from "../../../../utils/checkAuthorization/checkOwnerAuth.js"

export default {
    Query: {
        getOwner: async (_: any, {}, context: any) => {
            const owner = await checkOwnerAuth(context)

            try {
                return await db.owner.findUnique({
                    where: {
                        id: owner.id
                    },
                })
            } catch (error: any) {
                throw new Error(error)
            }
        }
    }
}
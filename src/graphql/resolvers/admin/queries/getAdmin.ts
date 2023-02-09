import checkOwnerAuth from "../../../../utils/checkAuthorization/checkOwnerAuth.js";
import db from "../../../../utils/generatePrisma.js";

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
            } catch (error) {
                throw new Error(error)
            }
        }
    }
}
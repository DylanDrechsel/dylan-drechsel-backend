import db from "../../../../utils/generatePrisma.js";
import checkOwnerAuth from "../../../../utils/checkAuthorization/checkOwnerAuth.js"

export default {
    Mutation: {
        deleteConfigSetting: async (_: any, { id }: any, context: any) => {
            const owner = await checkOwnerAuth(context)

            if (!owner) {
                throw new Error("Not the owner... Unauthorized")
            }

            try {
                return await db.configSetting.delete({
                    where: {
                        id
                    }
                })
            } catch (error : any) {
                console.log(error)
                throw new Error(error)
            }
        }
    }
}
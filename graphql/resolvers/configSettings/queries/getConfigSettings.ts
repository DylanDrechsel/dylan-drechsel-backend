import db from "../../../../utils/generatePrisma.js";
import checkOwnerAuth from "../../../../utils/checkAuthorization/checkOwnerAuth.js"

export default {
    Query: {
        getConfigSettings:async (_: any, {}, context: any) => {
            await checkOwnerAuth(context)

            try {
                return await db.configSetting.findMany()
            } catch (error: any) {
                throw new Error(error)
            }
        }
    }
}
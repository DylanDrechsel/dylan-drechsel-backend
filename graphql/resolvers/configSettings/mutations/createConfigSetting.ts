import db from "../../../../utils/generatePrisma.js";
import checkOwnerAuth from "../../../../utils/checkAuthorization/checkOwnerAuth.js"
import { CreateConfigSetting } from "../../../../types/configSettings/createConfigSetting.js";
import { ConfigSettingSchema } from "../../../../types/configSettings/configSetting.js";

export default {
    Mutation: {
        createConfigSetting: async (_: any, { createConfigSetting }: CreateConfigSetting, context: any) => {
            const owner = await checkOwnerAuth(context)

            if (!owner) {
                throw new Error("Not the owner... Unauthorized")
            }

            ConfigSettingSchema.parse({...createConfigSetting})

            try {
                return await db.configSetting.create({
                    data: {
                        ...createConfigSetting
                    }
                })
            } catch (error : any) {
                throw new Error(error)
            }
        }
    }
}
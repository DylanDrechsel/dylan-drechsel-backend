import db from "../../../../utils/generatePrisma.js";
import checkOwnerAuth from "../../../../utils/checkAuthorization/checkOwnerAuth.js"
import { CreateConfigSetting, CreateConfigSettingSchema } from "../../../../types/configSettings/createConfigSetting.js";

export default {
    Mutation: {
        createConfigSetting: async (_: any, createConfigSetting: CreateConfigSetting, context: any) => {
            const owner = await checkOwnerAuth(context)

            if (!owner) {
                throw new Error("Not the owner... Unauthorized")
            }

            CreateConfigSettingSchema.parse(createConfigSetting)
        }
    }
}
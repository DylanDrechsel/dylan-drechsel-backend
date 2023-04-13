import db from "../../../../utils/generatePrisma.js";
import checkOwnerAuth from "../../../../utils/checkAuthorization/checkOwnerAuth.js"
import { UpdateConfigSetting } from "../../../../types/configSettings/updateConfigSetting.js";
import { OptionalConfigSettingSchema } from "../../../../types/configSettings/configSetting.js";

export default {
    Mutation: {
        updateConfigSetting: async (_: any, { updateConfigSetting }: UpdateConfigSetting, context: any) => {
            const owner = await checkOwnerAuth(context)

            if (!owner) {
                throw new Error("Not the owner... Unauthorized")
            }

            OptionalConfigSettingSchema.parse({...updateConfigSetting})

            try {
                return await db.configSetting.update({
                    where: {
                        id: updateConfigSetting.id
                    },
                    data: {
                        ...updateConfigSetting
                    }
                })
            } catch (error : any) {
                throw new Error(error)
            }
        }
    }
}
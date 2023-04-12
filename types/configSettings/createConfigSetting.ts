import { z } from "zod";

export const CreateConfigSettingSchema = z.object({
    createConfigSetting: z.object({
        key: z.string().trim().min(1),
        value: z.string().trim().min(1),
        description: z.string().trim().min(1),
        type: z.string().trim().min(1)
    })
})

export type CreateConfigSetting = z.infer<typeof CreateConfigSettingSchema>;
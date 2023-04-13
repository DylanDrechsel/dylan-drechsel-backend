import { z } from "zod";

export const UpdateConfigSettingSchema = z.object({
    updateConfigSetting: z.object({
        id: z.string(),
        key: z.string().trim().min(1).optional(),
        value: z.string().trim().min(1).optional(),
        description: z.string().trim().min(1).optional(),
        type: z.string().trim().min(1).optional()
    })
})

export type UpdateConfigSetting = z.infer<typeof UpdateConfigSettingSchema>;
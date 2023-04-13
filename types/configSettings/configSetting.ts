import { z } from "zod";

export const ConfigSettingSchema = z.object({
	key: z.string().trim().min(1),
    value: z.string().trim().min(1),
    description: z.string().trim().min(1),
    type: z.string().trim().min(1)
})

export const OptionalConfigSettingSchema = z.object({
	key: z.string().trim().min(1).optional(),
    value: z.string().trim().min(1).optional(),
    description: z.string().trim().min(1).optional(),
    type: z.string().trim().min(1).optional(),
})

export type ConfigSetting = z.infer<typeof ConfigSettingSchema>;
export type OptionalConfigSetting = z.infer<typeof OptionalConfigSettingSchema>;
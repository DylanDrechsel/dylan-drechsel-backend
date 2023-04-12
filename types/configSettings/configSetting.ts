import { z } from "zod";

export const ConfigSettingSchema = z.object({
	key: z.string().trim().min(1),
    value: z.string().trim().min(1),
    description: z.string().trim().min(1),
    type: z.string().trim().min(1)
})

export type ConfigSetting = z.infer<typeof ConfigSettingSchema>;
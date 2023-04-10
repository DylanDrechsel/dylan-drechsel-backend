import { z } from "zod";

const Errors = z.object({
	email: z.string().optional(),
	password: z.string().optional(),
	general: z.string().optional()
})

export type Errors = z.infer<typeof Errors>;
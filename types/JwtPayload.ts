import { z } from "zod";

const JwtPayload = z.object({
    id: z.string()
})

export type JwtPayload = z.infer<typeof JwtPayload>
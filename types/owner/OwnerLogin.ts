import { z } from 'zod';

const OwnerLogin = z.object({
    email: z.string().email(),
    password: z.string()
})

export type OwnerLogin = z.infer<typeof OwnerLogin>
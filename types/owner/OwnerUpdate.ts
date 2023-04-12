import { z } from 'zod';

const OwnerUpdate = z.object({
    email: z.string().email(),
    password: z.string(),
    phoneNumber: z.string()
})

export type OwnerUpdate = z.infer<typeof OwnerUpdate>
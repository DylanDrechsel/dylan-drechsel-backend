import { z } from 'zod';

const OwnerRegister = z.object({
    email: z.string().email(),
    password: z.string(),
    phoneNumber: z.string()
})

export type OwnerRegister = z.infer<typeof OwnerRegister>
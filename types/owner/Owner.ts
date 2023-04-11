import { z } from 'zod';

const Owner = z.object({
    id: z.string().uuid(),
    createdAt: z.date(),
    role: z.string(),
    email: z.string().email(),
    password: z.string(),
    token: z.string().optional(),
    firstname: z.string().optional(),
    lastname: z.string().optional(),
    phoneNumber: z.string().optional(),
    profilePick: z.object({}).optional(),

    notified: z.boolean().default(false),

    resetPasswordToken: z.string(),
    resetPasswordTokenExpiration: z.number().int().positive(),
    signUpToken: z.string()
})

export type Owner = z.infer<typeof Owner>
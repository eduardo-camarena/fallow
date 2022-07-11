import z from 'zod';

export const loginSchema = z.object({
  email: z.string().email(),
});

export const createUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

export type LoginInput = z.TypeOf<typeof loginSchema>;
export type CreateUserInput = z.TypeOf<typeof createUserSchema>;

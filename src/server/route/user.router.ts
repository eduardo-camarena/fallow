import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import * as trpc from '@trpc/server';

import { createUserSchema } from 'src/schemas/user.schema';
import { createRouter } from 'src/server/createRouter';

export const userRouter = createRouter().mutation('register-user', {
  input: createUserSchema,
  resolve: async ({ ctx, input }) => {
    const { name, email } = input;
    try {
      const user = await ctx.prisma.user.create({
        data: {
          email,
          name,
        },
      });
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new trpc.TRPCError({
            code: 'CONFLICT',
            message: 'User already exists',
          });
        } else {
          throw new trpc.TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Something went wrong',
          });
        }
      }
    }
  },
});

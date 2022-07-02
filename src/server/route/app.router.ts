import { createRouter } from 'src/server/createRouter';
import { userRouter } from 'src/server/route/user.router';

export const appRouter = createRouter().merge('users', userRouter);

export type AppRouter = typeof appRouter;

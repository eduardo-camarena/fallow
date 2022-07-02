import { router } from '@trpc/server';
import superjson from 'superjson';

import { Context } from 'src/server/createContext';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const createRouter = () => {
  return router<Context>().transformer(superjson);
};

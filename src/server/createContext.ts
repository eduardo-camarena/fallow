import { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from 'src/utils/prisma';

interface CreateContextInput {
  req: NextApiRequest;
  res: NextApiResponse;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const createContext = ({ req, res }: CreateContextInput) => {
  return { req, res, prisma };
};

export type Context = ReturnType<typeof createContext>;

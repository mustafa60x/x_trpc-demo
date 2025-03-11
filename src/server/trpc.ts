
import { initTRPC } from '@trpc/server';
import { transformer } from '../utils/transformer';

const t = initTRPC.create({
  transformer,
});


export const publicProcedure = t.procedure;

export const router = t.router;

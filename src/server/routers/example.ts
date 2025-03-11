import { z } from 'zod';
import { router, publicProcedure } from '../trpc';

export const exampleRouter = router({
  hello: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return `Merhaba ${input.name}!`;
    }),

  counter: publicProcedure
    .input(z.object({ count: z.number() }))
    .mutation(({ input }) => {
      return { newCount: input.count + 1 };
    }),

  getAll: publicProcedure.query(() => {
    return [
      { id: 1, name: 'Mustafa' },
      { id: 2, name: 'Ali' },
      { id: 3, name: 'Veli' },
    ];
  }),
});

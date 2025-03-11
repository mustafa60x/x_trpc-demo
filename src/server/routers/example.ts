import { z } from 'zod';
import { router, publicProcedure } from '../trpc';

import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

// Notification Service
const packageDefinition = protoLoader.loadSync('./_grpc/notification.proto', {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const notificationProto = grpc.loadPackageDefinition(packageDefinition).notification as any;
const notificationClient = new notificationProto.NotificationService(
  'localhost:50051',
  grpc.credentials.createInsecure()
);

export const exampleRouter = router({
  hello: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return `Merhaba ${input.name}!`;
    }),

  counter: publicProcedure
    .input(z.object({ count: z.number() }))
    .mutation(async ({ input }) => {
      const newCount = input.count + 1;

      // gRPC ile Notification Service’e bildirim gönder
      await new Promise((resolve, reject) => {
        notificationClient.sendNotification({ count: newCount }, (err: any, response: any) => {
          if (err) {
            console.error('gRPC Hatası:', err);
            reject(err);
          } else {
            console.log('Notification Response:', response.message);
            resolve(response);
          }
        });
      });

      return { count: newCount };
    }),

  getAll: publicProcedure.query(() => {
    return [
      { id: 1, name: 'Mustafa' },
      { id: 2, name: 'Ali' },
      { id: 3, name: 'Veli' },
    ];
  }),
});

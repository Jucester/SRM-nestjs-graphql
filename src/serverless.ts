import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';
import { Handler, Context, Callback, APIGatewayProxyHandler } from 'aws-lambda';
import { createServer, proxy } from 'aws-serverless-express';
import { Server } from 'http';
import { INestApplication } from '@nestjs/common';
import { Express } from 'express';

export async function createApp(
  expressApp: Express,
): Promise<INestApplication> {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressApp),
  );
  return app;
}

async function bootstrap() {
  const expressApp = express();
  const app = await createApp(expressApp);

  app.enableCors();
  await app.init();

  return createServer(expressApp);
}

let server: Server;

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrap());
  return proxy(server, event, context, 'PROMISE').promise;
};

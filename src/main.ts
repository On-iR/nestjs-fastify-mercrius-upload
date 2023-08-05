import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import mercuriusUploadPlugin from 'mercurius-upload';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.register(mercuriusUploadPlugin);
  await app.listen(3000);
  console.log('http://localhost:3000/graphql');
}
bootstrap();

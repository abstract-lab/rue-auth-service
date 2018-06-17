import { NestFactory, NestApplication } from '@nestjs/core';
import { Transport } from '@nestjs/common/enums/transport.enum';

import { AppModule } from './app/app.module';
import { NestMicroserviceOptions } from '@nestjs/common/interfaces/microservices/nest-microservice-options.interface';

(async () => {
  try {
    const app = await NestFactory.createMicroservice(AppModule, {
      transport: Transport.REDIS,
      options: {
        url: 'redis://192.168.10.122:6379',
      },
    });
    await app.listenAsync();
  } catch (e) {
    // tslint:disable-next-line:no-console
    console.log(e);
  }
})();

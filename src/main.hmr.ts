import { NestFactory, NestApplication } from '@nestjs/core';
import { Transport } from '@nestjs/common/enums/transport.enum';

import { AppModule } from './app/app.module';

declare const module: any;

async function bootstrap() {

  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.REDIS,
    options: {
      url: '192.168.10.122',
      port: 6379,
    },
  });

  app.listen(() => {
    // tslint:disable-next-line:no-console
    console.log(`Microservice: rue-auth-service: started`);
  });

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();

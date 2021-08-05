import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {

  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqps://rezbjela:EarA0j97K8zBRx8_gtsew3dUCzIKYg4E@jackal.rmq.cloudamqp.com/rezbjela',
      ],
      queue: 'main_queue',
      queueOptions: {
        durable: false,
      },
    },
  });

  app.listen();
}
bootstrap();

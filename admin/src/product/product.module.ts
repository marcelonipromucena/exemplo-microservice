import { ClientsModule, Transport } from '@nestjs/microservices';

import { Module } from '@nestjs/common';
import { Product } from './product.entity';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([Product]),
    ClientsModule.register([
      {
        name: 'PRODUCT_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqps://rezbjela:EarA0j97K8zBRx8_gtsew3dUCzIKYg4E@jackal.rmq.cloudamqp.com/rezbjela'],
          queue: 'main_queue',
          queueOptions: {
            durable: false
          },
        },
      },
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 49153,
      username: 'docker',
      password: 'docker',
      database: 'teste',
      autoLoadEntities: true,//TODO DON'T USE THIS ON PRODUCT ENVIRONMENT, REPLACE WITH entities[]
      synchronize: true,
    }),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

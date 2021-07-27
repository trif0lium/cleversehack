import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HospitelModule } from './hospitel/hospitel.module';
import { HospitelGateway } from './hospitel.gateway';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { Hospitel } from './datamodel/hospitel.datamodel';
import { HospitelService } from './hospitel/hospitel.service';
import { applicationConfig } from './application-config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV === 'development' && '.env.development',
      isGlobal: true,
      load: [applicationConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        ...configService.get('database'),
        entities: [Hospitel],
      }),
      inject: [ConfigService],
    }),
    HospitelModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

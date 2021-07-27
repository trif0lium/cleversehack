import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HospitelModule } from './hospitel/hospitel.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hospitel } from './datamodel/hospitel.datamodel';
import { ApplicationConfig, applicationConfig } from './application-config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV === 'development' && '.env.development',
      isGlobal: true,
      load: [applicationConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService<ApplicationConfig>) => ({
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

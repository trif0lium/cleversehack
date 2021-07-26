import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HospitelModule } from './hospitel/hospitel.module';
import { HospitelGateway } from './hospitel.gateway';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV === 'development' && '.env.development',
    }),
    HospitelModule,
  ],
  controllers: [AppController],
  providers: [AppService, HospitelGateway],
})
export class AppModule {}

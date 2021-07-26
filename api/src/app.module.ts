import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HospitelModule } from './hospitel/hospitel.module';
import { HospitelGateway } from './hospitel.gateway';

@Module({
  imports: [HospitelModule],
  controllers: [AppController],
  providers: [AppService, HospitelGateway],
})
export class AppModule {}

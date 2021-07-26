import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HospitelModule } from './hospitel/hospitel.module';

@Module({
  imports: [HospitelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

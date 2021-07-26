import { Module } from '@nestjs/common';
import { HospitelController } from './hospitel.controller';
import { HospitelService } from './hospitel.service';

@Module({
  controllers: [HospitelController],
  providers: [HospitelService]
})
export class HospitelModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hospitel } from 'src/datamodel/hospitel.datamodel';
import { HospitelGateway } from 'src/hospitel.gateway';
import { HospitelController } from './hospitel.controller';
import { HospitelService } from './hospitel.service';

@Module({
  imports: [TypeOrmModule.forFeature([Hospitel])],
  controllers: [HospitelController],
  providers: [HospitelService, HospitelGateway],
  exports: [HospitelService],
})
export class HospitelModule {}

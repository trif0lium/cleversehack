import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hospitel } from 'src/datamodel/hospitel.datamodel';
import { HospitelController } from './hospitel.controller';
import { HospitelService } from './hospitel.service';

@Module({
  imports: [TypeOrmModule.forFeature([Hospitel])],
  controllers: [HospitelController],
  providers: [HospitelService],
  exports: [HospitelService],
})
export class HospitelModule {}

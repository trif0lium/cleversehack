import { Controller, Get } from '@nestjs/common';
import { Hospitel } from 'src/datamodel/hospitel.datamodel';
import { HospitelService } from './hospitel.service';

@Controller('hospitel')
export class HospitelController {
  constructor(private readonly hospitelService: HospitelService) {}

  @Get()
  list(): Promise<Hospitel[]> {
    return this.hospitelService.findAll();
  }
}

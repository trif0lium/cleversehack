import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { Hospitel } from 'src/datamodel/hospitel.datamodel';
import { CreateHospitelDTO, GetHospitelDTO } from './hospitel.dto';
import { HospitelService } from './hospitel.service';

@Controller('hospitel')
export class HospitelController {
  constructor(private readonly hospitelService: HospitelService) {}

  @Post()
  list(@Body() data: GetHospitelDTO): Promise<Hospitel[]> {
    return this.hospitelService.findAll();
  }

  @Get(':code')
  async get(@Param('code') code: string): Promise<Hospitel | null> {
    const hospitel = await this.hospitelService.findByCode(code);
    if (!hospitel) {
      throw new NotFoundException();
    }
    return hospitel;
  }

  @Post()
  create(@Body() data: CreateHospitelDTO): Promise<Hospitel> {
    return this.hospitelService.create(data);
  }
}

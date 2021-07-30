import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Hospitel } from 'src/datamodel/hospitel.datamodel';
import { CreateHospitelDTO, UpdateHospitelCapacityDTO } from './hospitel.dto';
import { HospitelService } from './hospitel.service';

@Controller('hospitel')
export class HospitelController {
  constructor(private readonly hospitelService: HospitelService) {}

  @Get()
  list(): Promise<Hospitel[]> {
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

  @Patch(':code')
  async update(
    @Param('code') code: string,
    @Body() data: UpdateHospitelCapacityDTO,
  ): Promise<{ ok: boolean }> {
    if (data.direction === 'SET' && data.currentCapacity) {
      await this.hospitelService.setCurrentCapacity(
        code,
        data.currentCapacity,
        data.maxCapacity,
      );
    }

    if (data.direction === 'INC' && data.n) {
      await this.hospitelService.increaseCurrentCapacity(code, data.n);
    }

    if (data.direction === 'DEC' && data.n) {
      await this.hospitelService.decreaseCurrentCapacity(code, data.n);
    }

    return { ok: true };
  }
}

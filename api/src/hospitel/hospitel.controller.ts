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
    if (data.direction === 'INC') {
      await this.hospitelService.increaseCurrentCapacity(code, data.n);
    }

    if (data.direction === 'DEC') {
      await this.hospitelService.decreaseCurrentCapacity(code, data.n);
    }

    return { ok: true };
  }
}

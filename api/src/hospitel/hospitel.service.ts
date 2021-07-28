import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Subject } from 'rxjs';
import { Hospitel } from 'src/datamodel/hospitel.datamodel';
import { Repository } from 'typeorm';
import { CreateHospitelDTO } from './hospitel.dto';

@Injectable()
export class HospitelService {
  capacityUpdate$: Subject<CapacityUpdate> = new Subject();

  constructor(
    @InjectRepository(Hospitel)
    private hospitelRepository: Repository<Hospitel>,
  ) {}

  findAll(): Promise<Hospitel[]> {
    return this.hospitelRepository.find({});
  }

  findByCode(code: string): Promise<Hospitel | null> {
    return this.hospitelRepository.findOne({ code });
  }

  create(data: CreateHospitelDTO): Promise<Hospitel> {
    return this.hospitelRepository.save(Object.assign(new Hospitel(), data));
  }

  async increaseCurrentCapacity(hospitelCode: string, n: number) {
    const hospitel = await this.hospitelRepository.findOneOrFail({
      code: hospitelCode,
    });

    let maxCapacity = hospitel.maxCapacity;
    if (hospitel.currentCapacity + n > hospitel.maxCapacity) {
      maxCapacity = hospitel.currentCapacity + n;
    }

    await this.hospitelRepository.update(
      { id: hospitel.id },
      { currentCapacity: hospitel.currentCapacity + n, maxCapacity },
    );

    this.capacityUpdate$.next({
      hospitelCode: hospitel.code,
      maxCapacity: maxCapacity,
      currentCapacity: hospitel.currentCapacity + n,
      timestamp: Date.now(),
    });
  }

  async decreaseCurrentCapacity(hospitelCode: string, n: number) {
    const hospitel = await this.hospitelRepository.findOneOrFail({
      code: hospitelCode,
    });

    let currentCapacity = hospitel.currentCapacity - n;
    if (currentCapacity < 0) {
      currentCapacity = 0;
    }

    await this.hospitelRepository.update(
      { id: hospitel.id },
      { currentCapacity: currentCapacity },
    );

    this.capacityUpdate$.next({
      hospitelCode: hospitel.code,
      maxCapacity: hospitel.maxCapacity,
      currentCapacity,
      timestamp: Date.now(),
    });
  }
}
